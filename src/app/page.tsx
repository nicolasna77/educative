"use server";
import { getAllCours } from "@/actions/cours";
import ListCour from "@/components/ListCour";
import Title from "@/components/Tiltle";

export default async function Home() {
  const cours = await getAllCours();
  return (
    <main>
      <Title>Cours</Title>

      <ListCour allCours={cours} />
    </main>
  );
}
