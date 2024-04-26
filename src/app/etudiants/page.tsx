import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import image from "../favicon.ico";
import Title from "@/components/Tiltle";

const EtudiantsPage = () => {
  const students = [
    {
      id: 1,
      name: "Étudiant 1",
      courses: [
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
        },
        // Ajoutez plus de cours ici
      ],
    },
    {
      id: 2,
      name: "Étudiant 2",
      courses: [
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
        },
        // Ajoutez plus de cours ici
      ],
    },
    // Ajoutez plus d'étudiants ici
  ];

  return (
    <main>
      <Title back>Étudiants</Title>
      <div className="container mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:w-3/4">
        {students.map((student, index) =>
          student.courses.map((course, courseIndex) => (
            <Card key={`${index}-${courseIndex}`}>
              <CardHeader className="mb-2 pb-0">
                <CardTitle className="text-lg sm:text-base md:text-lg">
                  {student.name}
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-5 items-center gap-x-3">
                  <div className="col-span-3">
                    <CardDescription
                      className={`text-base font-medium text-black sm:text-sm md:text-base `}
                    >
                      {course.title}
                    </CardDescription>
                    <div className={`flex items-center`}>
                      <CardDescription
                        className={`mr-5 text-sm sm:text-xs md:text-sm `}
                      >
                        {course.professor.name}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </main>
  );
};
export default EtudiantsPage;
