import prisma from "../../prisma/script";

export const getAllCours = async () => {
  return await prisma.cours.findMany({
    include: {
      prof: true,
      etudiants: true,
    },
  });
};
