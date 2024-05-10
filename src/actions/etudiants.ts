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

export const subscribeToCours = async (userId: string, coursId: string) => {
  await prisma.user.update({
    where: { id: userId },
    data: {
      coursInscrits: {
        connect: {
          id: coursId,
        },
      },
    },
  });

  return await prisma.cour.update({
    where: { id: coursId },
    data: {
      etudiants: {
        connect: {
          id: userId,
        },
      },
    },
  });
};
