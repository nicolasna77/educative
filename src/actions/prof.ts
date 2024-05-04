"use server";

import prisma from "../../prisma/script";

export const getAllProfs = async () => {
  return await prisma.prof.findMany({
    include: {
      cours: true,
    },
  });
};

export const deleteProf = async (id: any) => {
  return await prisma.prof.delete({
    where: {
      id: id,
    },
  });
};

export const getProfById = async (id: any) => {
  return await prisma.prof.findUnique({
    where: {
      id: id,
    },
  });
};

export const createProf = async (data: any) => {
  return await prisma.prof.create({
    data: data,
  });
};

export const updateProf = async (id: any, data: any) => {
  return await prisma.prof.update({
    where: {
      id: id,
    },
    data: data,
  });
};
