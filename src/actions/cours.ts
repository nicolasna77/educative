import prisma from "../../prisma/script";

export const getAllCours = async () => {
  return await prisma.cour.findMany({
    include: {
      prof: true,
      etudiants: true,
    },
  });
};
