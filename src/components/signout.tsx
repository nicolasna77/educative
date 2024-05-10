import { signOut } from "../../auth";
import { Button } from "./ui/button";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

const SignOut = async () => {
  const session = await auth();
  if (!session) {
    return null;
  }
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
        redirect("/");
      }}
    >
      <Button variant={"destructive"} type="submit">
        Sign Out
      </Button>
    </form>
  );
};
export default SignOut;
