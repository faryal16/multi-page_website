import Image from "next/image";
import Typewriter from "typewriter-effect";
import dp from "@/app/images/about.webp";

function HeroSection() {
  return (
    <main className="bg-orange-200 h-[80vh] text-4xl  gap-20 flex flex-col lg:flex-row justify-center items-center">
      <div>
        <h1 className="text-orange-400  mt-16 lg:mb-4 text-2xl lg:text-4xl lg:leading-normal font-extrabold">
          <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I&apos;m {"Faryal Junaid!!"}
            <br />
            And also a<br />
          </span>
        </h1>
        <h1 className="text-red-800 font-bold ">
          {" "}
          <Typewriter
            options={{
              strings: [
                "Working Mom!!",
                "HouseWife!!",
                "Web Developer!!",
                "Programmer!!",
                "UI/Ux Designer!!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="text-red-500  text-2xl lg:text-3xl">
          {" "}
          <br />
          &quot;Being a working mom is not easy.
          <br /> You have to be willing to screw up at every level.&quot;
        </p>
      </div>
      <Image src={dp} alt="Profile Picture" className=" lg:w-4/12 md:w-[300px] w-[250px]  rounded-full " />
    </main>
  );
}

export default HeroSection;
