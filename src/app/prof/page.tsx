import React from "react";
import Title from "@/components/Tiltle";
import { getAllProfs } from "@/actions/prof";
import ListProf from "@/components/ListProf";

const ProfPage = async () => {
  const allProfs: any = await getAllProfs();

  return (
    <main>
      <Title back>Professeurs</Title>
      <div className="container">
        <ListProf allProfs={allProfs} />
      </div>
    </main>
  );
};
export default ProfPage;
