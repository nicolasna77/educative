"use server";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Button } from "./ui/button";
import { deleteCours } from "@/actions/cours";
import { revalidatePath } from "next/cache";

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
        formAction={() => {
          "use server";
          console.log("delete", idCour);
          deleteCours(idCour?.idCour);
          revalidatePath("/admin");
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
