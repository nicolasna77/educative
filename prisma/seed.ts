import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "prof@prof.com",
      role: "PROF",
    },
  });

  await prisma.cour.create({
    data: {
      titre: "Introduction à Prisma",
      resume: "Un cours sur Prisma",
      niveau: "Débutant",
      places: 30,
      profId: user.id,
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
