"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../favicon.ico";
import Image from "next/image";
import Title from "@/components/Tiltle";
import { get } from "http";
import { getAllCours } from "@/actions/cours";
import CardCour from "@/components/ListCour";
import ListCour from "@/components/ListCour";

const CoursPage = async () => {
  const cours = await getAllCours();

  return (
    <main>
      <Title back>Cours</Title>

      <ListCour cours={cours} />
    </main>
  );
};
export default CoursPage;
