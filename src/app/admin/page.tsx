import { getAllCours } from "@/actions/cours";
import { getAllEtudiants } from "@/actions/etudiants";
import { getAllProfs } from "@/actions/prof";
import Title from "@/components/Tiltle";
import { Button } from "@/components/ui/button";
import CardEtudiant from "@/components/ListEtudient";
import CardProf from "@/components/ListProf";

const AdminPage = async () => {
  const cours = await getAllCours();
  const etudiants = await getAllEtudiants();
  const profs = await getAllProfs();
  return (
    <div className=" container">
      <section className="border-b py-8">
        <div className="flex justify-between items-center">
          <Title>Professeurs</Title>
          <div>
            <Button variant={"default"} size={"sm"}>
              Ajouter
            </Button>
          </div>
        </div>
        <div className=" mb-5  grid grid-cols-1 gap-4 sm:grid-cols-2 m-auto md:grid-cols-3 lg:w-3/4">
          {profs &&
            profs.map((item: any, index: any) => (
              <CardProf key={index} prof={item} admin={true} />
            ))}
        </div>
      </section>

      <section className="border-b py-8">
        <div className="flex justify-between items-center">
          <Title>Etudiants</Title>
          <div>
            <Button variant={"default"} size={"sm"}>
              Ajouter
            </Button>
          </div>
        </div>

        <div className=" mb-5  grid grid-cols-1 gap-4 sm:grid-cols-2 m-auto md:grid-cols-3 lg:w-3/4">
          {etudiants.map((student, index) => (
            <CardEtudiant key={index} etudiant={student} admin={true} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default AdminPage;
