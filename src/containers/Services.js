import Card from "@/components/card";

import { Saira } from "next/font/google";



const saira = Saira({ weight: "400", subsets: ["latin"] });
export default function Services({id}){
    return(
     <div className="flex flex-col justify-center">

        <div className="text-center text-white text-3xl md:text-5xl font-semibold leading-10 py-16">
            <div id={id} className={saira.className}>
            Blockchain Development Services
            </div></div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            <Card name="Consulting & Proof Of Concept" icon="/icons/consult.png"></Card>
            <Card name="New Blockchain Public/Private" icon="/icons/public.png"></Card>
            <Card name="Blockchain P2P Lending Platform" icon="/icons/p2p.png"></Card>
            <Card name="Create Consortium Network" icon="/icons/consort.png"></Card>
            <Card name="Blockchain in IOT" icon="/icons/iot.png"></Card>
            <Card name="DApp (Decentralized Application}" icon="/icons/dapp.png"></Card>
            <Card name="NFT & Marketplace" icon="/icons/nft.png"></Card>
            <Card name="New Crypto Coin/Token" icon="/icons/token.png"></Card>
            <Card name="Smart Contracts & Audit" icon="/icons/file.png" ></Card>
            <Card name="Build Decentralized Exchange" icon="/icons/build.png"></Card>
            <Card name="Decentralized Applications" icon="/icons/decent.png"></Card>
            <Card name="Hyperledger Exchange" icon="/icons/hyper.png"></Card>
            <Card name="Staking Platform" icon="/icons/stake.png"></Card>
            <Card name="Decentralized Social Media" icon="/icons/social.png"></Card>
            <Card name="Crypto Wallet & Custodians" icon="/icons/crypto.png"></Card>
       
            
        </div></div>
    )
}