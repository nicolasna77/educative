import { signIn } from "../../auth";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Label } from "./ui/label";

export function SignIn() {
  return (
    <div className="m-auto items-center mt-20 max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Connexion</CardTitle>
        </CardHeader>
        <form
          action={async (formData) => {
            "use server";

            await signIn("credentials", {
              email: formData.get("email"),
              password: formData.get("password"),
              callbackUrl: "/",
              redirect: true,
            });
          }}
        >
          <CardContent>
            <div className="grid w-full items-center gap-4">
              Email
              <Input id="email" name="email" type="email" />
              <label>
                Password
                <Input name="password" type="password" />
              </label>
              <div className="text-xs">
                {" Vous n'avez pas de compte ? "}
                <Link href={"/sign-up"} className="uppercase  hover:underline">
                  {" "}
                  Inscription
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Connexion</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
