import React from "react";
import Image from "next/image";


import img from "@/app/images/home.webp"

function about() {
  return (
    <main  className=" bg-orange-200 lg:h-[80vh] text-4xl gap-20  flex flex-col lg:flex-row justify-center items-center">
      <div className="w-1/2">
      <h1 className="text-red-600 lg:text-4xl text-3xl text-center md:mt-16 mt-32">
        About <span className="text-red-800 font-bold">ME!!</span>
      </h1>
      <p className="text-center  lg:text-4xl text-red-500 text-2xl font-normal mt-8">
        Hardworking mothers are the unsung heroes of our society. 
        They juggle multiple roles and responsibilities, often sacrificing
        their own needs to provide for their families. They work long hours, 
        often holding down multiple jobs, and go above and beyond to make sure 
        their children are cared for and have a bright future.
      </p>
    </div>
    <Image src={ img } alt="Profile Picture" className=" lg:w-4/12 md:w-[250px] w-[200px] md:mb-16 mb-32  rounded-full " />

      </main>
  );
}

export default about;
