import Image from "next/image";
import eth from "../../public/logos/eth.png"
import bin from "../../public/logos/binance.png"
import bit from "../../public/logos/bitget.png"
import coin from "../../public/logos/coingecko.svg"
import cmc from "../../public/logos/cmc.png"
import baby from "../../public/logos/babydoge.png"
import stepn from "../../public/logos/stepn.png"
import mexc from "../../public/logos/mexc.png"
import cryp from "../../public/logos/cryp.png"
import gate from "../../public/logos/gate.png"
import ton from "../../public/logos/ton.png"
import poly from "../../public/logos/polygon.png"
import tomi from "../../public/logos/tomi.png"


import { Saira } from "next/font/google";



const saira = Saira({ weight: "400", subsets: ["latin"] });


export default function Partners({id}){
    return(
        <>
        <div className="text-center text-white text-5xl font-semibold leading-10 py-16">
        <div id={id} className={saira.className}>
          Our  Partners
        </div></div>
        <div className="flex justify-center items-center">
           
        <div className="grid grid-cols-2 md:grid-cols-5 space-y-12 gap-16 px-8  items-center mb-36 ">
            <Image width={200} src={eth} className=" mt-12 py-1 px-2"></Image>
            <Image width={200} src={bin}></Image>
            <Image width={200} src={bit}></Image>
            <Image width={200} src={coin}></Image>
            <Image width={200} src={cmc} className=" py-3 px-2" ></Image>
            <Image width={200} src={baby} ></Image>
            <Image width={200} src={stepn}></Image>
            <Image width={200} src={mexc}></Image>
            <Image width={200} src={cryp}></Image>
            <Image width={200} src={gate} className="py-3 px-2" ></Image>
            <Image width={200} src={ton}></Image>
            <Image width={200} src={poly}></Image>
            <Image width={200} src={tomi}></Image>
        </div></div></>
    )
}