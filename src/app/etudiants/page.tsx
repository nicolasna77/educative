import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import image from "../favicon.ico";
import Title from "@/components/Tiltle";
import { getAllEtudiants } from "@/actions/etudiants";
import CardEtudiant from "@/components/ListEtudient";
import ListEtudiant from "@/components/ListEtudient";

const EtudiantsPage = async () => {
  const etudiants = await getAllEtudiants();

  return (
    <main>
      <Title back>Étudiants</Title>
      <div className="container mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:w-3/4">
        <ListEtudiant etudiant={etudiants} />
      </div>
    </main>
  );
};
export default EtudiantsPage;
