"use client";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Button } from "./ui/button";
import { deleteCour } from "@/actions/cours";

type props = {
  idCour: string;
};

const Action = (idCour: props) => {
  return (
    <div className="flex space-x-2">
      <Button variant={"ghost"} size={"icon"}>
        <BiEdit />
      </Button>

      <Button
        onClick={() => {
          deleteCour(idCour?.idCour);
        }}
        variant={"destructive"}
        size={"icon"}
      >
        <BiTrash />
      </Button>
    </div>
  );
};
export default Action;
