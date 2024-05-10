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
import Action from "./AdminAction";
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
                {item.name}
              </CardTitle>
              {admin && <Action LinkDelete="" LinkEdit="" />}
            </div>
            <div className="mr-2 rounded  bg-green-200 pl-2 pr-2 text-sm font-bold text-green-700 sm:text-xs md:text-sm">
              {item.coursEnseignes.length} cours
            </div>
          </CardHeader>
          <CardContent>
            <h4>Cours données : </h4>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside ">
              {item.coursEnseignes.map((cours: any) => (
                <li key={cours.id}>{cours.titre}</li>
              ))}
            </ul>
            <div className={`flex items-center`}>
              <div className={`mr-5 text-sm sm:text-xs md:text-sm `}>
                {item.school}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default ListProf;
