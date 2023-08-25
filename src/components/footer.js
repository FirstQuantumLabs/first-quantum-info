import Image from "next/image";
import logo from "../../public/assets/FQLogo.png";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Mail } from "react-feather";
import { SocialIcon } from "react-social-icons";
const plus = Plus_Jakarta_Sans({ weight: "400", subsets: ["latin"] });
const space = Space_Grotesk({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <div className="bg-[#040423] flex md:flex-row flex-col  ">
      <div className="w-full">
        <div className="w-full border-white border-opacity-20 flex border lg:justify-center items-center ">
          <div className="flex w-2/5 flex-col items-start p-4">
            <div className={plus.className}>
              <Image src={logo}></Image>
              <div className="w-full py-8 px-[-28px] flex gap-16  text-white justify-between">
                <p>About Us</p>
                <p>Services</p>
                <p>Partners</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-white border-opacity-20 flex border lg:justify-center items-center ">
          <div className="flex w-2/5 flex-col items-start p-4">
            <div className={space.className}>
              <p className="text-white text-3xl font-bold leading-10">
                Contact Us{" "}
              </p>
              <div className="w-full py-8 px-[-28px] flex  justify-start  text-white">
                <Mail></Mail>
                <p className="ml-8 md:text-sm lg:text-base">
                  contact@firstquantumlabs.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-white border-opacity-20 flex border lg:justify-center items-center ">
          <div className="flex w-2/5 flex-col items-start p-4">
            <div className={space.className}>
              <p className="text-white pt-6 text-3xl font-bold leading-10">
                Follow Us
              </p>
              <div className="w-full py-8 px-[-28px] flex gap-8 justify-around  text-white">
                <SocialIcon
                  bgColor="#6D0BBA"
                  fgColor="white"
                  network="twitter"
                ></SocialIcon>
                <SocialIcon
                  bgColor="#6D0BBA"
                  fgColor="white"
                  network="telegram"
                ></SocialIcon>
                <SocialIcon
                  bgColor="#6D0BBA"
                  fgColor="white"
                  network="linkedin"
                ></SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className=" border-white border-opacity-20 py-12 flex border px-12 justify-start items-center">
          <div className={space.className}>
            <p className="text-white text-3xl font-bold leading-10">
              Contact Us{" "}
            </p>
            <div className="w-full py-8 px-[-28px] flex  justify-start  text-white">
              <p className=" md:text-sm lg:text-base">
                Fill out the form below and we will get in touch with you soon
              </p>
            </div>
            <div className="flex gap-8 h-full">
              <input
                placeholder="First Name"
                className="w-full bg-[#040423] border-2 rounded-md text-white p-4 border-white  border-opacity-20
              "
              ></input>
              <input placeholder="Last Name" className="w-full bg-[#040423] p-4 border-2 rounded-md border-white border-opacity-20"></input>
            </div>
            <div className="flex gap-8 py-4 h-full">
              <input
                placeholder="Phone Number"
                className="w-full bg-[#040423] border-2 rounded-md text-white p-4 border-white border-opacity-20
              "
              ></input>
              <input placeholder="E-Mail" className="w-full bg-[#040423] p-4 border-2 rounded-md border-white border-opacity-20"></input>
            </div>
            <div className="flex gap-8 py-4 h-full">
             <textarea placeholder="How can we help you?" className="w-full bg-[#040423] border-2 rounded-md text-white p-4 border-white border-opacity-20"></textarea>
            </div>
            <div className="flex gap-8 py-4 h-full">
                <div className="w-40 py-3 px-5 bg-[#6D0BBA] cursor-pointer flex justify-center text-white rounded-xl" >
                    Contact Us
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
