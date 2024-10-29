"use client";
import { usePathname } from "next/navigation";
import React from "react";

function PageTitle() {
  const pathname = usePathname();
  const titleString = pathname.split("/").slice(2).join("").replace(/-/g, " ");
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <h4 className="text-center font-bold text-3xl uppercase">
       {
        pathname.includes("/blog") ?  `${titleString}` : "Not a correct path"
       }
      </h4>
    </div>
  );
}

export default PageTitle;
