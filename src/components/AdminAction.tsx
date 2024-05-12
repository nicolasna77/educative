import { BiEdit, BiTrash } from "react-icons/bi";
import { Button } from "./ui/button";
import { deleteCours, getCoursById, updateCours } from "@/actions/cours";
import { revalidatePath } from "next/cache";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Level } from "@/lib/type/cours";
import { Cour } from "@prisma/client";

type props = {
  idCour: string;
  idProf: string;
};

const Action = async ({ idCour, idProf }: props) => {
  const cour: Cour = await getCoursById(idCour);

  const deleteItem = async (idCour: string) => {
    "use server";
    await deleteCours(idCour);
    revalidatePath("/admin");
  };

  const updateCour = async (formData: FormData) => {
    "use server";
    const places = parseInt(formData.get("places"), 10);
    const data = {
      titre: formData.get("titre"),
      resume: formData.get("resume"),
      profId: idProf,
      niveau: formData.get("niveau"),
      places: places,
    };
    await updateCours(idCour, data);
    revalidatePath("/admin");
  };

  return (
    <div className="flex space-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <BiEdit />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Modification cour</DialogTitle>
          </DialogHeader>
          <form action={updateCour}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                Titre
                <Input
                  id="titre"
                  name="titre"
                  defaultValue={cour?.titre}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                Résumé
                <Input
                  id="resume"
                  defaultValue={cour?.resume}
                  name="resume"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                Niveau
                <Select name="niveau" defaultValue={cour?.niveau}>
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
                <Input
                  id="places"
                  name="places"
                  type="number"
                  defaultValue={cour?.places}
                />
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

      <Button
        formAction={deleteItem(idCour)}
        variant={"destructive"}
        size={"icon"}
      >
        <BiTrash />
      </Button>
    </div>
  );
};
export default Action;
