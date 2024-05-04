import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

interface TitleProps {
  back?: boolean;
  children: React.ReactNode;
}

const Title = ({ back, children }: TitleProps) => {
  return (
    <div className="flex items-center px-4 py-4 gap-4">
      {back && (
        <Link className="flex items-center" href={"/"}>
          <BiArrowBack className="h-6 w-6 self-center" />
        </Link>
      )}
      <h1 className="mb-4 text-xl font-extrabold align-middle leading-none tracking-tight flex-1 text-gray-900 md:text-5xl flex items-center ">
        {children}
      </h1>
    </div>
  );
};

export default Title;
