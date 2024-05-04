"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const link = [
    {
      name: "Professeurs",
      link: "/prof",
    },
    {
      name: "Cours",
      link: "/cours",
    },
    {
      name: "Etudiants",
      link: "/etudiants",
    },
  ];
  const router = useRouter();
  return (
    <main>
      <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#306ef3e6] to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-black"
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Bienvenue sur le système de gestion de cours
            </h1>
            <br />
            <div className=" grid w-full space-y-6">
              {link.map((item, index) => (
                <div key={index} className="flex m-auto">
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    onClick={() => {
                      router.push(item.link);
                    }}
                  >
                    {item.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
