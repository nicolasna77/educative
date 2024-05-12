import { createCours, getAllCours } from "@/actions/cours";
import Title from "@/components/Tiltle";
import { Button } from "@/components/ui/button";
import ListCour from "@/components/ListCour";
import {
  Dialog,
  DialogClose,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Level } from "@/lib/type/cours";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const cours = await getAllCours();
  const session = await auth();

  const user = session ? await getUser(session?.user?.email ?? "") : null;

  if (user?.role != "PROF") {
    redirect("/sign-in");
  }
  const createCour = async (formData: FormData) => {
    "use server";
    const places = parseInt(formData.get("places"), 10);
    const data = {
      titre: formData.get("titre"),
      resume: formData.get("resume"),
      profId: user?.id,
      niveau: formData.get("niveau"),
      places: places,
    };
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
                      <Select name="niveau">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Niveau" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.values(Level).map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                      Places
                      <Input id="places" name="places" type="number" />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">Enregistré</Button>
                    </DialogClose>
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
