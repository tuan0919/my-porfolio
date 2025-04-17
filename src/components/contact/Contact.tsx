import { ArrowUpRight } from "lucide-react";
import lightImg from "../../assets/project/lightArrow.svg";
import darkImg from "../../assets/project/darkArrow.svg";
import TitleText from "../title-text";

function Contact() {
  return (
    <div id="contact" className="w-full h-full my-10">
      <div className="flex flex-col w-full gap-8 mb-8 items-center justify-center md:px-20">
        <TitleText
          title="What's next"
          description={`I’m currently looking for a intern opportunity for Web Developer.\nWhether you have a position opening or just want to say hi, my inbox is open for all!`}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div>
          <img
            src={lightImg}
            alt="light"
            className="flex dark:hidden w-[150px] h-[150px]"
          />
          <img
            src={darkImg}
            alt="light"
            className="hidden dark:flex w-[150px] h-[150px]"
          />
        </div>

        {/** project button */}
        <a href="mailto:nqat0919@gmail.com?subject=Hi Tuan&body=I want to contact with you for...">
          <button
            className="flex items-center gap-2
           bg-[#FFDB00] text-black hover:opacity-95
            font-montserrat font-medium
            border-2 border-black dark:border-transparent
            text-base rounded p-2"
          >
            Contact me
            <ArrowUpRight className="text-[#FFDB00] bg-black rounded-full w-fit p-1" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
