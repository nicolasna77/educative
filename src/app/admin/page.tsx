import { addCours, getAllCours } from "@/actions/cours";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { auth } from "../../../auth";
import { getUser } from "@/actions/user";
import { revalidatePath } from "next/cache";

const AdminPage = async () => {
  const cours = await getAllCours();
  const sessions = await auth();

  const user = await getUser(sessions?.user?.email);
  const etudiants = await getAllEtudiants();
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
                <form
                  action={async (formData) => {
                    "use server";
                    await addCours({
                      titre: formData.get("titre"),
                      resume: formData.get("resume"),
                      etudiants: formData.get("etudiants"),
                      profId: user?.id,
                    });
                    revalidatePath("/admin");
                  }}
                >
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
                      étudients
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="selectionnée un étudients" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>étudients</SelectLabel>
                            {etudiants.map((etudiant, index) => (
                              <SelectItem key={index} value={etudiant.name}>
                                {etudiant.name}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
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
