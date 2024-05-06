/*
  Warnings:

  - You are about to drop the `Cours` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Etudiant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Prof` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_CoursToEtudiant` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Cours";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Etudiant";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Prof";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CoursToEtudiant";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "Cour" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "niveau" TEXT NOT NULL,
    "places" INTEGER NOT NULL,
    "profId" INTEGER NOT NULL,
    CONSTRAINT "Cour_profId_fkey" FOREIGN KEY ("profId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CoursToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CoursToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Cour" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoursToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CoursToUser_AB_unique" ON "_CoursToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursToUser_B_index" ON "_CoursToUser"("B");
