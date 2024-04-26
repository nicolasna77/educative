import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../favicon.ico";
import Image from "next/image";
import Title from "@/components/Tiltle";

const CoursPage = () => {
  const courses = [
    {
      id: 1,
      title: "Mathématiques avancées",
      professor: {
        name: "Prof 1",
        subject: "Mathématiques",
        hiringDate: "12 avril 2024",
        school: "Lycée de Dhaka",
        city: "Dhaka, Bengladesh",
        profilePicture: image,
      },
      students: [
        { id: 1, name: "Étudiant 1" },
        { id: 2, name: "Étudiant 2" },
        // Ajoutez plus d'étudiants ici
      ],
    },
    {
      id: 2,
      title: "Physique quantique",
      professor: {
        name: "Prof 2",
        subject: "Physique",
        hiringDate: "12 avril 2024",
        school: "Lycée de Dhaka",
        city: "Dhaka, Bengladesh",
        profilePicture: image,
      },
      students: [
        { id: 3, name: "Étudiant 3" },
        { id: 4, name: "Étudiant 4" },
        // Ajoutez plus d'étudiants ici
      ],
    },
    // Ajoutez plus de cours ici
  ];

  return (
    <main>
      <Title back>Cours</Title>
      <div className="container mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:w-3/4">
        {courses.map((item, index) => (
          <Card key={index}>
            <CardHeader className="mb-2 pb-0">
              <CardTitle className="text-lg sm:text-base md:text-lg">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <div className="grid grid-cols-5 items-center gap-x-3">
                <div
                  className={`relative col-span-1 h-full w-full rounded-md bg-gray-100              
                `}
                >
                  <Image
                    src={item.professor.profilePicture}
                    alt={item.professor.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="col-span-3">
                  <CardDescription
                    className={`text-base font-medium text-black sm:text-sm md:text-base `}
                  >
                    {item.professor.name}
                  </CardDescription>
                  <div className={`flex items-center`}>
                    <CardDescription
                      className={`mr-5 text-sm sm:text-xs md:text-sm `}
                    >
                      {item.professor.subject}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};
export default CoursPage;
