"use server";
import { getAllCours } from "@/actions/cours";
import { getAllEtudiants } from "@/actions/etudiants";
import { getAllProfs } from "@/actions/prof";
import ListCour from "@/components/ListCour";
import ListEtudiant from "@/components/ListEtudient";
import ListProf from "@/components/ListProf";
import Title from "@/components/Tiltle";
import { redirect } from "next/navigation";
import { auth } from "../../auth";

export default async function Home() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  const cours = await getAllCours();
  const profs = await getAllProfs();
  const etudiants = await getAllEtudiants();
  return (
    <main>
      <Title>Cours</Title>

      <ListCour allCours={cours} />

      <Title>Prof</Title>
      <ListProf allProfs={profs} />

      <Title>Etudiants</Title>
      <ListEtudiant etudiant={etudiants} />
    </main>
  );
}
