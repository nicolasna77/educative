-- CreateTable
CREATE TABLE "Prof" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Etudiant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "profId" INTEGER NOT NULL,
    CONSTRAINT "Cours_profId_fkey" FOREIGN KEY ("profId") REFERENCES "Prof" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CoursToEtudiant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_CoursToEtudiant_A_fkey" FOREIGN KEY ("A") REFERENCES "Cours" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CoursToEtudiant_B_fkey" FOREIGN KEY ("B") REFERENCES "Etudiant" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CoursToEtudiant_AB_unique" ON "_CoursToEtudiant"("A", "B");

-- CreateIndex
CREATE INDEX "_CoursToEtudiant_B_index" ON "_CoursToEtudiant"("B");
