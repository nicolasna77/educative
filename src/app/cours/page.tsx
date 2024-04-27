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

const CoursPage = async () => {
  const cours = await getAllCours();
  console.log(cours);

  return (
    <main>
      <Title back>Cours</Title>
      <div className="container mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:w-3/4">
        {cours.map((item, index) => (
          <Card key={index}>
            <CardHeader className="mb-2 pb-0">
              <CardTitle className="text-lg sm:text-base md:text-lg">
                {item.titre}
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <div className="grid grid-cols-5 items-center gap-x-3">
                <div className="col-span-3">
                  <CardDescription
                    className={`text-base font-medium text-black sm:text-sm md:text-base `}
                  >
                    Professeurs {item.prof.nom}
                  </CardDescription>
                  <div className={` mt-8`}>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
                      Etudiants
                    </h2>
                    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
                      {item.etudiants.map((etudiant, index) => (
                        <li key={index}> {etudiant.nom}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};
export default CoursPage;
