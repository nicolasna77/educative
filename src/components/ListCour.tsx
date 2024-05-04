import Action from "./action";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
  CardContent,
} from "./ui/card";

const ListCour = ({ cours, admin }: any) => {
  return cours.map((item, index) => (
    <Card key={index}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg sm:text-base md:text-lg">
            {item.titre}
          </CardTitle>

          {admin && <Action LinkDelete="" LinkEdit="" />}
        </div>{" "}
        Professeurs {item.prof.nom}
      </CardHeader>
      <CardFooter>
        <div className="grid grid-cols-5 items-center gap-x-3">
          <div className="col-span-3">
            <CardContent
              className={`text-base font-medium text-black sm:text-sm md:text-base `}
            >
              <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
                Etudiants
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
                {item.etudiants.map((etudiant: any, index: string) => (
                  <li key={index}> {etudiant.nom}</li>
                ))}
              </ul>
            </CardContent>
          </div>
        </div>
      </CardFooter>
    </Card>
  ));
};
export default ListCour;
