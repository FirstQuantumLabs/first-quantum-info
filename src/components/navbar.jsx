import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Saira } from "next/font/google";

import logo from "../../public/assets/FQLogo.png";

const saira = Saira({ weight: "400", subsets: ["latin"] });


export default function Home() {
  const [navbar, setNavbar] = useState(false);

  const goToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };
  return (
    <div className="z-10">
      <nav className="w-screen bg-[#05052C] z-10  ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex ">
          <div>
            <div className="flex w-full items-center justify-between py-3 md:py-5 md:block">
              <div className="flex items-center">
                <Image src={logo} />
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={saira.className}>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white text-base font-medium capitalize leading-relaxed">
                  <div
                    className="cursor-pointer"
                    onClick={() => goToSection("about")}
                  >
                    About Us

                  </div>
                </li>
                <li className="text-white text-base">
                  <div
                    className="cursor-pointer"
                    onClick={() => goToSection("services")}
                  >
                    Services
                  </div>
                </li>
               
               
                <li className="text-white text-base">
                  <div
                    className="cursor-pointer"
                    onClick={() => goToSection("partners")}
                  >
                    Partners
                  </div>
                </li>
               
                <div>
                    <div className={saira.className}>
                  <div className="px-4 text-white rounded-xl flex items-center py-2 justify-center  bg-[#6D0BBA]">
                    <Link href="">
                      Contact Us
                    </Link>
                  </div></div>
                </div>
              </ul></div>
            </div>
          </div>
        </div>

        <div className="w-1/12"></div>
      </nav>
    </div>
  );
}
