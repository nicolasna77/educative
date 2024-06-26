"use server";
import { getUser } from "@/actions/user";
import { auth } from "../../auth";
import Action from "./AdminAction";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "./ui/card";
import { subscribeToCours } from "@/actions/etudiants";

const ListCour = async ({ allCours, admin }: any) => {
  const subscribe = async (id: string) => async () => {
    "use server";
    console.log("user", "d,zlf,az");
    if (user) await subscribeToCours(user.id, id);
  };

  const session = await auth();
  const user = session ? await getUser(session?.user?.email) : null;

  return (
    <div className=" mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 m-auto md:grid-cols-3 ">
      {allCours.map((item: any, index: any) => {
        const isUserEnrolled = item.etudiants.some(
          (etudiant: any) => etudiant.id === user?.id
        );
        return (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg sm:text-base md:text-lg">
                  {item.titre}
                  <div className="bg-amber-600/30 rounded-full m-auto text-center  p-1 text-xs">
                    {item.niveau}
                  </div>
                  <p className="text-sm text-gray-500">
                    place disponible {item.places - item.etudiants.length}
                  </p>
                </CardTitle>

                {admin && <Action idCour={item.id} idProf={user?.id} />}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-5 items-center gap-x-3">
                <div className="col-span-3">
                  {item.etudiants.length > 0 ? (
                    <>
                      <h2 className="mb-2 text-lg font-semibold text-gray-900 ">
                        Etudiants :
                      </h2>
                      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
                        {item.etudiants.map((etudiant: any, index: string) => (
                          <li key={index}> {etudiant.name}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    "Pas d'etudiant inscrits"
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {!admin && (
                <Button
                  // onClick={subscribe(item.id)}
                  variant={"secondary"}
                  size={"sm"}
                  className="w-full"
                  disabled={item.places - item.etudiants.length <= 0}
                >
                  {isUserEnrolled ? "Inscrit" : "S'inscrire"}
                </Button>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
export default ListCour;
