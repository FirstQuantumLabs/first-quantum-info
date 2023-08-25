import Image from "next/image";
import { Saira } from "next/font/google";
import mask from "../../public/assets/Mask.png";
import wave from "../../public/assets/wave1.png";
import block from "../../public/assets/group.png";
import coin from "../../public/assets/coin.png";
import coin2 from "../../public/assets/coin2.png";
import yellow from "../../public/assets/yellow.png";
import orange from "../../public/assets/orange.png";
import green from "../../public/assets/green.png";
import blue from "../../public/assets/blue.png";
import circle from "../../public/assets/cricle.png";
import wave2  from "../../public/assets/wave2.png";

import Navbar from "@/components/navbar";
import Services from "@/containers/Services";
import Technologies from "@/containers/Technologies";
import About from "@/containers/AboutUs";
import Partners from "@/containers/Partners";

const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-[#05052C] items-center justify-between`}
    >
      <div className="flex md:flex-row flex-col w-full justify-center ">
        <div className="z-10 ml-[100px] text-[50px] md:text-[70px]  text-white h-screen pb-[200px] flex flex-col w-1/3 justify-center items-center ">
          <div className={saira.className}>
            Blockchain Technology & Solutions
            <div className="text-white text-lg font-normal capitalize leading-7">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              dolor sit
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:px-0 px-12 md:mt-0 mt-[-200px] flex justify-center items-start">
          <Image
            src={block}
            className=" z-10 relative md:w-[500px]   md:mt-[50px] "
          ></Image>
        </div>
      </div>
      <div className="">
        <div>
          <Image
            src={mask}
            className="w-screen absolute z-0 top-[500px] md:top-[100px] left-0"
          ></Image>
        </div>
        <div>
          <Image
            src={coin}
            className=" right-[100px] md:right-[800px] absolute top-[350px] md:top-[150px] "
          ></Image>
        </div>
        <div>
          <Image
            src={coin2}
            className=" right-[400px] md:right-[900px] absolute top-[700px] "
          ></Image>
        </div>

        <Image
          src={wave}
          width={300}
          height={300}
          className=" md:w-[500px] sm:w-[300px] w-[150px] flex left-[0px] md:top-[250px] top-[100px] absolute "
        ></Image>

       
        <Image
      
          src={wave2}
          className="flex left-[0px] md:top-[4000px] top-[2500px] absolute z-0 "
        ></Image>
      </div>
      <Services id="services"></Services>
      <Technologies></Technologies>
      <About id="about"></About>
      <Partners id="partners"></Partners>
    </main>
  );
}
