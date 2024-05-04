"use client";
import { BiEdit, BiTrash } from "react-icons/bi";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type props = {
  LinkEdit: string;
  LinkDelete: string;
};

const Action = ({ LinkEdit, LinkDelete }: props) => {
  const router = useRouter();
  return (
    <div className="flex space-x-2">
      <Button
        onClick={() => router.push(LinkEdit)}
        variant={"ghost"}
        size={"icon"}
      >
        <BiEdit />
      </Button>

      <Button
        onClick={() => router.push(LinkDelete)}
        variant={"destructive"}
        size={"icon"}
      >
        <BiTrash />
      </Button>
    </div>
  );
};
export default Action;
