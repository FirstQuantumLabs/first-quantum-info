import Image from "next/image";
import consult from "../../public/icons/consult.png";
import { Outfit } from "next/font/google";
import yellow from "../../public/assets/yellow.png";
import circle from "../../public/assets/cricle.png";
import blue from "../../public/assets/blue.png";
import green from "../../public/assets/green.png";

import orange from "../../public/assets/orange.png";

const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export default function AboutCard({ name, icon }) {
  return (
    <div className=" mr-24 md:mt-[180px]  mt-48 mb-[500px]">
      <div className="flex ">
        
        
        <div className="flex flex-col">
        <Image src={circle}  className="z-0 hidden md:flex  absolute w-[400px] xl:w-[500px] "></Image>
          <div className="w-60 h-44 backdrop-blur-2xl absolute mt-[-100px] md:mt-[230px] right-[25%]  md:right-[400px] mx-10 my-10 flex justify-center items-center rounded-2xl border border-slate-500 border-opacity-30">
            <Image src={blue} className="z-0 mb-12 absolute"></Image>
            <div className="flex-col justify-start items-center gap-5 inline-flex">
              <div className="w-11 h-11 relative">
                <div className="w-10 h-10 flex justify-center items-center absolute">
                  <Image
                    src="/icons/protect.png"
                    width={40}
                    height={40}
                  ></Image>
                </div>
              </div>
              <div className="h-12 flex-col justify-start items-center gap-5 flex">
                <div className="w-40 text-center text-white text-base font-semibold leading-relaxed">
                  <div className={outfit.className}> Data Protection</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 h-44 backdrop-blur-2xl absolute mt-[-300px] right-[25%]  md:mt-[-30px] md:right-[400px]  mx-10 my-10 flex justify-center items-center rounded-2xl border border-slate-500 border-opacity-30">
            <Image src={yellow} className="z-10 absolute"></Image>
            <div className="flex-col justify-start items-center gap-5 inline-flex">
              <div className="w-11 h-11 relative">
                <div className="w-10 h-10 flex justify-center items-center absolute">
                  <Image src="/icons/blocks.png" width={40} height={40}></Image>
                </div>
              </div>
              <div className="h-12 flex-col justify-start items-center gap-5 flex">
                <div className="w-40 text-center text-white text-base font-semibold leading-relaxed">
                  <div className={outfit.className}> Blockchain</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-60 h-44 backdrop-blur-2xl absolute mt-[300px] right-[25%] md:right-[120px] mx-10 my-10 flex justify-center items-center rounded-2xl border border-slate-500 border-opacity-30">
            <Image src={green} className="z-0 mb-12 absolute"></Image>
            <div className="flex-col justify-start items-center gap-5 inline-flex">
              <div className="w-11 h-11 relative">
                <div className="w-10 h-10 flex justify-center items-center absolute">
                  <Image src="/icons/lock.png" width={40} height={40}></Image>
                </div>
              </div>
              <div className="h-12 flex-col justify-start items-center gap-5 flex">
                <div className="w-40 text-center text-white text-base font-semibold leading-relaxed">
                  <div className={outfit.className}> Fast & Secure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 h-44 backdrop-blur-2xl absolute  mt-[100px] right-[25%] md:right-[120px]  mx-10 my-10 flex justify-center items-center rounded-2xl border border-slate-500 border-opacity-30">
            <Image src={orange} className="z-10 absolute"></Image>
            <div className="flex-col justify-start items-center gap-5 inline-flex">
              <div className="w-11 h-11 relative">
                <div className="w-10 h-10 flex justify-center items-center absolute">
                  <Image
                    src="/icons/finance.png"
                    width={40}
                    height={40}
                  ></Image>
                </div>
              </div>
              <div className="h-12 flex-col justify-start items-center gap-5 flex">
                <div className="w-40 text-center text-white text-base font-semibold leading-relaxed">
                  <div className={outfit.className}>Finance Protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
