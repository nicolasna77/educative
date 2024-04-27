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

const EtudiantsPage = async () => {
  const etudiants = await getAllEtudiants();

  return (
    <main>
      <Title back>Étudiants</Title>
      <div className="container mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:w-3/4">
        {etudiants.map((student, index) => (
          <Card key={`${index}-${student}`}>
            <CardHeader className="mb-2 pb-0">
              <CardTitle className="text-lg sm:text-base md:text-lg">
                {student.nom}
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <div className="grid grid-cols-5 items-center gap-x-3">
                <div className="col-span-3">
                  <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
                    Cours inscrits
                  </h2>
                  <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
                    {student.cours.map((course, index) => (
                      <li key={index}>{course.titre}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};
export default EtudiantsPage;
