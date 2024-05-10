"use server";

import prisma from "../../prisma/script";

export const getAllProfs = async () => {
  return await prisma.user.findMany({
    include: {
      coursEnseignes: true,
    },
    where: {
      role: "PROF",
    },
  });
};

export const deleteProf = async (id: any) => {
  return await prisma.user.delete({
    where: {
      id: id,
      role: "PROF",
    },
  });
};

export const getProfById = async (id: any) => {
  return await prisma.user.findUnique({
    where: {
      id: id,
      role: "PROF",
    },
  });
};

export const createProf = async (data: any) => {
  return await prisma.user.create({
    data: data,
  });
};

export const updateProf = async (id: any, data: any) => {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: data,
  });
};
