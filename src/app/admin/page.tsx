import { getAllCours } from "@/actions/cours";
import { getAllEtudiants } from "@/actions/etudiants";
import { getAllProfs } from "@/actions/prof";
import Title from "@/components/Tiltle";
import { Button } from "@/components/ui/button";
import CardEtudiant from "@/components/ListEtudient";
import CardProf from "@/components/ListProf";
import ListEtudiant from "@/components/ListEtudient";
import ListProf from "@/components/ListProf";
import ListCour from "@/components/ListCour";

const AdminPage = async () => {
  const cours = await getAllCours();

  return (
    <div>
      <section className="border-b py-8">
        <div className="flex justify-between items-center">
          <Title>cours</Title>
          <div>
            <Button variant={"default"} size={"sm"}>
              Ajouter
            </Button>
          </div>
        </div>
        <ListCour allCours={cours} admin={true} />
      </section>
    </div>
  );
};
export default AdminPage;
