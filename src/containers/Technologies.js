import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import next from "../../public/assets/next.png";
import react from "../../public/assets/react.png";
import aws from "../../public/assets/aws.png";
import apple from "../../public/assets/solana.png";
import andro from "../../public/assets/sol.png";
import flutter from "../../public/assets/Flutter.png";
import mongo from "../../public/assets/mongo.png";
import node from "../../public/assets/node.png";

import Image from "next/image";
import { Saira } from "next/font/google";

const saira = Saira({ weight: "400", subsets: ["latin"] });
export default function Technologies() {
  return (
    <div className=" md:px-24 pt-48">
      <div className="text-center text-white text-3xl md:text-5xl font-semibold px-12 leading-10 py-16">
        <div className={saira.className}>Technologies We Work With</div>
      </div>

      <div className="border mb-12 border-slate-500 w-full border-opacity-50"></div>

      <div className="w-full items-center grid grid-cols-2 md:grid-cols-4 gap-24 mb-24 ">
        <div className="flex flex-col justify-center items-center">
          <Image width={80} src={next}></Image>
          <div className="text-white py-2 text-base font-normal leading-tight">
            Next.js
          </div>
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <Image src={react}></Image>
          <div className="text-white py-2 text-base font-normal leading-tight">
            React.js
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={apple} width={80}></Image>
          <div className="text-white py-2 text-base font-normal leading-tight">
            Solana
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={andro} width={90}></Image>
          <div className="text-white py-2 text-base font-normal leading-tight">
            Ethereum
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={flutter} width={120}></Image>
          <div className="text-white py-2 text-base font-normal leading-tight">
            Flutter
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={mongo} width={120}></Image>
          <div className="text-white py-2 text-base font-normal leading-tight">
            MongoDB
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={aws} width={100}></Image>
          <div className="text-white py-2 mt-4 text-base font-normal leading-tight">
            AWS
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={node} width={120}></Image>
          <div className="text-white py-2 mt-4 text-base font-normal leading-tight">
            Node.js
          </div>
        </div>
      </div>
    </div>
  );
}
