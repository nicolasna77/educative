import { BiEdit, BiTrash } from "react-icons/bi";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "./ui/card";
import Action from "./action";
import { List } from "lucide-react";

type props = {
  allProfs: any;
  admin?: boolean;
};

const ListProf = ({ allProfs, admin }: props) => {
  if (!allProfs) {
    return (
      <div className="flex justify-center items-center h-96">
        <List size={100} />
      </div>
    );
  }

  return (
    <div className=" mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 m-auto md:grid-cols-3 ">
      {allProfs.map((item: any, index: any) => (
        <Card key={index}>
          <CardHeader className="mb-2 pb-0">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg sm:text-base md:text-lg">
                {item.nom}
              </CardTitle>
              {admin && <Action LinkDelete="" LinkEdit="" />}
            </div>
            <div className="mr-2 rounded  bg-green-200 pl-2 pr-2 text-sm font-bold text-green-700 sm:text-xs md:text-sm">
              {item.coursEnseignes.length} cours
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 items-center gap-x-3">
              <div className="col-span-3">
                <CardDescription
                  className={`text-base font-medium text-black sm:text-sm md:text-base `}
                >
                  <div>
                    {" "}
                    {item.coursEnseignes
                      .map((cours: any) => cours.titre)
                      .join(", ")}
                  </div>

                  <div className={`flex items-center`}>
                    <div className={`mr-5 text-sm sm:text-xs md:text-sm `}>
                      {item.school}
                    </div>
                  </div>
                </CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default ListProf;
