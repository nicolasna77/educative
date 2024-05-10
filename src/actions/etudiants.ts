import prisma from "../../prisma/script";
import client from "../../config/redis";

export const getAllEtudiants = async () => {
  return new Promise((resolve, reject) => {
    // Try to get data from Redis first
    client.get("etudiantsData", async (err, result) => {
      if (err) {
        reject("Error fetching data from Redis");
      } else if (result) {
        // If data is in Redis, parse it and return
        resolve(JSON.parse(result));
      } else {
        // If data is not in Redis, fetch from Prisma
        const data = await prisma.user.findMany({
          include: {
            coursInscrits: true,
          },
          where: {
            role: "USER",
          },
        });

        // Store data in Redis
        client.set("etudiantsData", JSON.stringify(data), (err) => {
          if (err) {
            console.error("Error caching data:", err);
          }
        });

        resolve(data);
      }
    });
  });
};

export const getEtudiantById = async (id: any) => {
  return new Promise((resolve, reject) => {
    // Try to get data from Redis first
    client.get(`etudiant:${id}`, async (err, result) => {
      if (err) {
        reject("Error fetching data from Redis");
      } else if (result) {
        // If data is in Redis, parse it and return
        resolve(JSON.parse(result));
      } else {
        // If data is not in Redis, fetch from Prisma
        const data = await prisma.user.findUnique({
          where: {
            id: id,
            role: "USER",
          },
        });

        // Store data in Redis
        client.set(`etudiant:${id}`, JSON.stringify(data), (err) => {
          if (err) {
            console.error("Error caching data:", err);
          }
        });

        resolve(data);
      }
    });
  });
};

export const createEtudiant = async (data: any) => {
  const newEtudiant = await prisma.user.create({
    data: {
      ...data,
      role: "USER",
    },
  });

  return newEtudiant;
};

export const deleteEtudiant = async (id: any) => {
  const deletedEtudiant = await prisma.user.delete({
    where: {
      id: id,
      role: "USER",
    },
  });

  // Invalidate the cached data in Redis
  client.del("etudiantsData", (err) => {
    if (err) {
      console.error("Error deleting data from Redis:", err);
    }
  });

  return deletedEtudiant;
};

export const updateEtudiant = async (id: any, data: any) => {
  const updatedEtudiant = await prisma.user.update({
    where: {
      id: id,
      role: "USER",
    },
    data: data,
  });

  return updatedEtudiant;
};
