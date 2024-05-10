/*
  Warnings:

  - The primary key for the `Cour` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titre" TEXT NOT NULL,
    "resume" TEXT NOT NULL,
    "niveau" TEXT NOT NULL,
    "places" INTEGER NOT NULL,
    "profId" TEXT NOT NULL,
    CONSTRAINT "Cour_profId_fkey" FOREIGN KEY ("profId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cour" ("id", "niveau", "places", "profId", "resume", "titre") SELECT "id", "niveau", "places", "profId", "resume", "titre" FROM "Cour";
DROP TABLE "Cour";
ALTER TABLE "new_Cour" RENAME TO "Cour";
CREATE TABLE "new__CoursToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CoursToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Cour" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoursToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__CoursToUser" ("A", "B") SELECT "A", "B" FROM "_CoursToUser";
DROP TABLE "_CoursToUser";
ALTER TABLE "new__CoursToUser" RENAME TO "_CoursToUser";
CREATE UNIQUE INDEX "_CoursToUser_AB_unique" ON "_CoursToUser"("A", "B");
CREATE INDEX "_CoursToUser_B_index" ON "_CoursToUser"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
