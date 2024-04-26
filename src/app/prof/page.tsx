"use client";

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

const ProfPage = () => {
  const allProfs:any = getAllProfs()
  console.log(allProfs)
  if (allProfs.length === 0) {
    return <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-16">No profs found</h2>;
  }

  return (
    <main>
      <Title back>Professeurs</Title>
      <div className="container mb-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 m-auto md:grid-cols-3 lg:w-3/4">
        {/* {allProfs ? allProfs.map((item: any, index: any) => (
          <Card key={index}>
            <CardHeader className="mb-2 pb-0">
              <CardTitle className="text-lg sm:text-base md:text-lg">
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-start">
                <CardDescription className="mr-2 rounded bg-green-200 pl-2 pr-2 text-sm font-bold text-green-700 sm:text-xs md:text-sm">
                  {item.city}
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <div className="grid grid-cols-5 items-center gap-x-3">
                <div
                  className={`relative col-span-1 h-full w-full rounded-md bg-gray-100              
                `}
                >
                  <Image
                    src={item.profilePicture}
                    alt={item.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="col-span-3">
                  <CardDescription
                    className={`text-base font-medium text-black sm:text-sm md:text-base `}
                  >
                    {item.subject}
                  </CardDescription>
                  <div className={`flex items-center`}>
                    <Image
                      src="../MapPin.svg"
                      alt="description"
                      className="mr-1"
                      width={20}
                      height={20}
                    />
                    <CardDescription
                      className={`mr-5 text-sm sm:text-xs md:text-sm `}
                    >
                      {item.school}
                    </CardDescription>
                  </div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <Image src={image} alt="description" width={20} height={20} />
                </div>
              </div>
            </CardFooter>
          </Card>
        ))} */}
      </div>
    </main>
  );
};
export default ProfPage;
