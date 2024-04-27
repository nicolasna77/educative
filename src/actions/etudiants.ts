import prisma from "../../prisma/script";

export const getAllEtudiants = async () => {
  return await prisma.etudiant.findMany({
    include: {
      cours: true,
    },
  });
};
