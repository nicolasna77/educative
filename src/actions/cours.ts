import prisma from "../../prisma/script";
import client from "../../config/redis";
import { revalidatePath } from "next/cache";

export const getAllCours = async () => {
  return new Promise((resolve, reject) => {
    // Try to get data from Redis first
    client.get("coursData", async (err, result) => {
      if (err) {
        reject("Error fetching data from Redis");
      } else if (result) {
        // If data is in Redis, parse it and return
        resolve(JSON.parse(result));
      } else {
        // If data is not in Redis, fetch from Prisma
        const data = await prisma.cour.findMany({
          include: {
            prof: true,
            etudiants: true,
          },
        });

        // Store data in Redis
        client.set("coursData", JSON.stringify(data), (err) => {
          if (err) {
            console.error("Error caching data:", err);
          }
        });

        resolve(data);
      }
    });
  });
};

export const deleteCours = async (id: string) => {
  const deletedCours = await prisma.cour.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/admin");

  // Invalidate the cached data in Redis
  client.del("coursData", (err) => {
    if (err) {
      console.error("Error deleting data from Redis:", err);
    }
  });

  return deletedCours;
};

export const getCoursById = async (id: any) => {
  return new Promise((resolve, reject) => {
    // Try to get data from Redis first
    client.get(`cours:${id}`, async (err, result) => {
      if (err) {
        reject("Error fetching data from Redis");
      } else if (result) {
        // If data is in Redis, parse it and return
        resolve(JSON.parse(result));
      } else {
        // If data is not in Redis, fetch from Prisma
        const data = await prisma.cour.findUnique({
          where: {
            id: id,
          },
          include: {
            prof: true,
            etudiants: true,
          },
        });

        // Store data in Redis
        client.set(`cours:${id}`, JSON.stringify(data), (err) => {
          if (err) {
            console.error("Error caching data:", err);
          }
        });

        resolve(data);
      }
    });
  });
};

export const createCours = async (data: any) => {
  const newCours = await prisma.cour.create({
    data: {
      ...data,
    },
  });

  return newCours;
};

export const updateCours = async (id: any, data: any) => {
  const updatedCours = await prisma.cour.update({
    where: {
      id: id,
    },
    data: {
      ...data,
    },
  });

  // Invalidate the cached data in Redis
  client.del("coursData", (err) => {
    if (err) {
      console.error("Error deleting data from Redis:", err);
    }
  });

  return updatedCours;
};
