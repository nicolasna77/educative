import Image from "next/image";
import React, { useState } from "react";
import image from "../favicon.ico";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Title from "@/components/Tiltle";
import { getAllProfs } from "@/actions/prof";

const ProfPage = async () => {
  const allProfs: any = await getAllProfs();
  console.log(allProfs);
  if (allProfs.length === 0) {
    return (
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-16">
        Pas de professeurs
      </h2>
    );
  }

  return (
    <main>
      <Title back>Professeurs</Title>
      <div className="container mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 m-auto md:grid-cols-3 lg:w-3/4">
        {allProfs &&
          allProfs.map((item: any, index: any) => (
            <Card key={index}>
              <CardHeader className="mb-2 pb-0">
                <CardTitle className="text-lg sm:text-base md:text-lg">
                  {item.nom}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-start">
                  <CardDescription className="mr-2 rounded bg-green-200 pl-2 pr-2 text-sm font-bold text-green-700 sm:text-xs md:text-sm">
                    {item.cours.length} cours
                  </CardDescription>
                </div>
              </CardContent>
              <CardFooter>
                <div className="grid grid-cols-5 items-center gap-x-3">
                  <div className="col-span-3">
                    <CardDescription
                      className={`text-base font-medium text-black sm:text-sm md:text-base `}
                    >
                      {item.cours.map((cours: any) => cours.titre).join(", ")}
                    </CardDescription>
                    <div className={`flex items-center`}>
                      <CardDescription
                        className={`mr-5 text-sm sm:text-xs md:text-sm `}
                      >
                        {item.school}
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
export default ProfPage;
