import prisma from "../../prisma/script";
import redisClient from '../../config/redis'; // Remplacez par le chemin vers votre client Redis

export const getAllCours = async () => {
  // Essayez d'abord de récupérer les données du cache
  const cacheData = await new Promise((resolve, reject) => {
    redisClient.get('coursData', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  if (cacheData) {
    // Si les données sont dans le cache, les renvoyer
    return JSON.parse(cacheData);
  } else {
    // Sinon, récupérez les données de la base de données
    const data = await prisma.cours.findMany({
      include: {
        prof: true,
        etudiants: true,
      },
    });

    // Mettez les données en cache pour une utilisation future
    redisClient.set('coursData', JSON.stringify(data), (err) => {
      if (err) {
        console.error('Erreur lors de la mise en cache des données:', err);
      }
    });

    return data;
  }
};
type Cour = {
  titre: string;
  etudiants: string;
  resume: string;
  places: number;
  niveau: string;
  profId: string;
};
export async function addCours(data: Cour) {
  await prisma.cour.create({
    data: {
      titre: data.titre,
      resume: data.resume,
      niveau: "DEBUTANT",
      places: 10,
      profId: data.profId,
    },
  });
}

export async function deleteCour(id: string) {
  await prisma.cour.delete({ where: { id } });
}
