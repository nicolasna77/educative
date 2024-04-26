import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Créer 3 professeurs
  for (let i = 1; i <= 3; i++) {
    await prisma.prof.create({
      data: {
        nom: `Professeur ${i}`,
        coursid: 1,
      },
    });
  }

  // Créer 3 étudiants
  for (let i = 1; i <= 3; i++) {
    await prisma.etudiant.create({
      data: {
        nom: `Etudiant ${i}`,
        // Vous devez spécifier un coursId valide ici
        cours: {
          connect: {
            id: 1,
          },
        },
      },
    });
  }

  // Créer 3 cours
  for (let i = 1; i <= 3; i++) {
    await prisma.cours.create({
      data: {
        titre: `Cours ${i}`,
        profId: 1,
        coursId: 1,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });