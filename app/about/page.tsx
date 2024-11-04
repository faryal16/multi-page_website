import React from "react";
import Image from "next/image";


import img from "@/app/images/home.webp"

function about() {
  return (
    <main  className="bg-orange-200 h-[80vh] text-4xl gap-20  flex justify-center items-center">
      <div>
      <h1 className="text-red-600 text-center">
        About <span className="text-red-800 font-bold">ME!!</span>
      </h1>
      <p className="text-center text-red-500 text-2xl font-normal mt-8">
        Hardworking mothers are the unsung heroes of our society. <br />
        They juggle multiple roles and responsibilities, often sacrificing<br /> 
        their own needs to provide for their families. They work long hours, <br />
        often holding down multiple jobs, and go above and beyond to make sure<br /> 
        their children are cared for and have a bright future.
      </p>
    </div>
    <Image src={ img } alt="Profile Picture" className=" w-4/12 rounded-full " />

      </main>
  );
}

export default about;
