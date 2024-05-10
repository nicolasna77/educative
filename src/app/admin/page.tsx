import { createCours, getAllCours } from "@/actions/cours";
import { getAllEtudiants } from "@/actions/etudiants";
import Title from "@/components/Tiltle";
import { Button } from "@/components/ui/button";
import ListCour from "@/components/ListCour";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { auth } from "../../../auth";
import { getUser } from "@/actions/user";
import { revalidatePath } from "next/cache";

const AdminPage = async () => {
  const cours = await getAllCours();
  const session = await auth();

  const user = session ? await getUser(session?.user?.email) : null;

  const createCour = async (formData: FormData) => {
    "use server";
    const data = {
      titre: formData.get("titre"),
      resume: formData.get("resume"),
      profId: user?.id,
      niveau: "debutant",
      places: 10,
    };
    console.log(data);
    await createCours(data);
    revalidatePath("/admin");
  };

  return (
    <div>
      <section className="border-b py-8">
        <div className="flex justify-between items-center">
          <Title>cours</Title>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant={"default"} size={"sm"}>
                  Ajouter
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Ajouter un cour</DialogTitle>
                </DialogHeader>
                <form action={createCour}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      Titre
                      <Input id="titre" name="titre" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      Résumé
                      <Input id="resume" name="resume" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      Niveau
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Enregistré</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <ListCour allCours={cours} admin={true} />
      </section>
    </div>
  );
};
export default AdminPage;
