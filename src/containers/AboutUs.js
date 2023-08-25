import AboutCard from "@/components/aboutcard";
import { Saira } from "next/font/google";
import Image from "next/image";

const saira = Saira({ weight: "400", subsets: ["latin"] });

export default function About({id}) {
  return (
    <div className="flex lg:flex-row flex-col w-full h-full justify-center ">
      <div id={id} className="z-10 md:ml-[100px] text-[50px] md:text-[70px] px-8 text-white h-screen flex flex-col lg:w-1/2 justify-center items-center ">
        <div className={saira.className}>
          About Us
          <div className="text-white  text-lg font-normal capitalize leading-7">
          We are a product as well as service-based , company energetic and driven to be the best in We are committed to Blockchain Technology and Blockchain. using its versatility in creating innovative solutions for real-world challenges. We aim to harness its potential in offering indispensable interoperability within various industries.
          </div>
        </div>
      </div>

      <div className="lg:w-full mr-12 w-full flex md:flex-row flex-col justify-center items-center sm:mt-[-300px]  lg:mt-44 md:items-start">
    
          <AboutCard icon="/icons/blocks.png" name="Blockchain"></AboutCard>
         
    
      </div>
    </div>
  );
}
