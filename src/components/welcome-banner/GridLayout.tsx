import { ArrowUpRight, Ellipsis } from "lucide-react";
import HeroMain from "../../assets/hero/hero-main.jpg";
import HeroCode from "../../assets/hero/hero-code.jpg";

function GridLayout() {
  return (
    <div className="flex flex-col gap-2 w-full pb-8 px-2 md:px-8 h-fit md:flex-row items-center justify-center">
      {/** left image */}
      <div className="w-full md:w-3/4 h-[150px] md:h-[320px] lg:h-[350px] flex items-center justify-center border-2 dark:border-[#ffd22f] rounded-2xl">
        <img
          src={HeroMain}
          alt="left-image"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/** right image */}
      <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center gap-2">
        {/** top image */}
        <div className="w-1/2 md:w-full h-[150px] md:h-[160px] lg:h-[170px] flex items-center justify-center border-2 rounded-2xl border-[#ffd22f]">
          <img
            src={HeroCode}
            alt="right-image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/** bottom text container */}
        <div className="w-1/2 md:w-full h-[150px] md:h-[160px] lg:h-[175px] flex flex-col gap-2 items-center justify-center border-2 p-4 border-black dark:border-[#ffd22f] bg-[#FFDB00] rounded-2xl">
          <span className="w-full flex items-center justify-between">
            <Ellipsis className="text-black w-3 h-3 md:w-5 md:h-5" />
            <ArrowUpRight className="bg-black rounded-full p-[2px] md:p-1 w-3 h-3 md:w-5 md:h-5 text-[#FFDB00]" />
          </span>
          <span className="text-start text-black font-montserrat font-bold text-base md:text-lg lg:text-xl md:leading-tight">
            Let's develop something big together
          </span>
          <span className="text-start text-black font-poppins font-medium text-[10px] md:text-xs lg:text-base md:leading-tight">
            {`First, solve the problem. Then, write the {code}.`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default GridLayout;