import Image from "next/image";
import consult from "../../public/icons/consult.png"


export default function Card({name,icon}) {
  return (
    <div className="md:w-52 md:h-52 w-32 h-32 hover:bg-[#6D0BBA] hover:fill-white mx-10 my-10 flex justify-center items-center rounded-2xl border border-slate-500 border-opacity-30">
      <div className="flex-col justify-start items-center gap-5 inline-flex">
        <div className="w-11 h-11 relative">
          <div className="w-10 h-10 flex justify-center items-center absolute">
                <Image src={icon} width={40} height={40} ></Image>
          </div>
        </div>
        <div className="h-12 flex-col justify-start items-center gap-5 flex">
          <div className="md:w-40 w-30 text-center text-white text-xs md:text-base font-md leading-relaxed">
            {name}
          </div>
        </div>
      </div>
    </div>
  );
}
