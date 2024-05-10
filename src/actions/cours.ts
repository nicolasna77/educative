import prisma from "../../prisma/script";

export const getAllCours = async () => {
  return await prisma.cour.findMany({
    include: {
      prof: true,
      etudiants: true,
    },
  });
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
