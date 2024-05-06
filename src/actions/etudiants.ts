import prisma from "../../prisma/script";

export const getAllEtudiants = async () => {
  return await prisma.user.findMany({
    include: {
      coursInscrits: true,
    },
    where: {
      role: "USER",
    },
  });
};
