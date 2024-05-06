import { BiEdit, BiTrash } from "react-icons/bi";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "./ui/card";
import { Key } from "react";
import Action from "./action";

type CardEtudiantProps = {
  etudiant: any;
  admin?: boolean;
};

const ListEtudiant = ({ etudiant, admin }: CardEtudiantProps) => {
  return (
    <div className="mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {etudiant.map((item: any, index: any) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg sm:text-base md:text-lg">
                {item.nom}
              </CardTitle>
              {admin && <Action LinkDelete="" LinkEdit="" />}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 items-center gap-x-3">
              <div className="col-span-3">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
                  Cours inscrits
                </h2>
                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
                  {item.coursInscrits.map((cours: any, index: Key) => (
                    <li key={index}>{cours.titre}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default ListEtudiant;
