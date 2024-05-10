"use server";

import prisma from "../../prisma/script";
import client from '../../config/redis';

export const getAllProfs = async () => {
  return new Promise((resolve, reject) => {
    // Try to get data from Redis first
    client.get('profsData', async (err, result) => {
      if (err) {
        reject('Error fetching data from Redis');
      } else if (result) {
        // If data is in Redis, parse it and return
        resolve(JSON.parse(result));
      } else {
        // If data is not in Redis, fetch from Prisma
        const data = await prisma.user.findMany({
          include: {
            coursEnseignes: true,
          },
          where: {
            role: "PROF",
          },
        });

        // Store data in Redis
        client.set('profsData', JSON.stringify(data), (err) => {
          if (err) {
            console.error('Error caching data:', err);
          }
        });

        resolve(data);
      }
    });
  });
};

export const deleteProf = async (id: any) => {
  const deletedProf = await prisma.user.delete({
    where: {
      id: id,
      role: "PROF",
    },
  });

  // Invalidate the cached data in Redis
  client.del('profsData', (err) => {
    if (err) {
      console.error('Error deleting data from Redis:', err);
    }
  });

  return deletedProf;
};

export const getProfById = async (id: any) => {
  return new Promise((resolve, reject) => {
    // Try to get data from Redis first
    client.get(`prof:${id}`, async (err, result) => {
      if (err) {
        reject('Error fetching data from Redis');
      } else if (result) {
        // If data is in Redis, parse it and return
        resolve(JSON.parse(result));
      } else {
        // If data is not in Redis, fetch from Prisma
        const data = await prisma.user.findUnique({
          where: {
            id: id,
            role: "PROF",
          },
        });

        // Store data in Redis
        client.set(`prof:${id}`, JSON.stringify(data), (err) => {
          if (err) {
            console.error('Error caching data:', err);
          }
        });

        resolve(data);
      }
    });
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
