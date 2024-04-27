import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Créer 3 cours
  const cours = [];
  for (let i = 1; i <= 3; i++) {
    const coursCreated = await prisma.cours.create({
      data: {
        titre: `Cours ${i}`,
        profId: i, // Supposons que chaque cours a un professeur différent
      },
    });
    cours.push(coursCreated);
  }

  // Créer 3 professeurs
  for (let i = 1; i <= 3; i++) {
    await prisma.prof.create({
      data: {
        nom: `Professeur ${i}`,
        cours: {
          connect: {
            id: cours[i - 1].id, // Connecter chaque professeur à un cours
          },
        },
      },
    });
  }

  // Créer 3 étudiants
  for (let i = 1; i <= 3; i++) {
    await prisma.etudiant.create({
      data: {
        nom: `Etudiant ${i}`,
        cours: {
          connect: {
            id: cours[i - 1].id, // Connecter chaque étudiant à un cours
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
