import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function SubHeadingText() {
  return (
    <div className="max-w-lg px-8 md:px-0 flex flex-col items-center justify-center text-center">
      <h2 className="font-poppins font-medium text-black dark:text-zinc-300 text-opacity-90 sm:leading-tight text-xs md:text-sm lg:text-base">
        Hey,{" "}
        <span className="font-medium font-montserrat text-[#222222] dark:text-[#222222] bg-[#FFDB00] dark:bg-[#FFDB00] p-[2.5px]">
          I am Nguyen Quoc Anh Tuan
        </span>
        a versatile individual. With a passion for learning I am dedicated to
        delivering high-quality results and contribute meaningful contribution
        to dev community.
      </h2>
      <div className="flex items-center gap-4 my-8">
        <a href="https://github.com/tuan0919" target="_blank">
          <button className="flex items-center justify-center rounded-md gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-300 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-lato text-sm md:text-base font-medium px-2 py-1 lg:px-4 lg:py-2 w-full md:w-auto">
            <FaGithub />
            Github
          </button>
        </a>
        <Link to="/#projects">
          <button className="flex border-2 border-black dark:border-transparent items-center justify-center rounded-md gap-2 hover:bg-opacity-90 bg-[#FFDB00] text-black font-lato text-sm md:text-base font-medium px-2 py-1 lg:px-4 lg:py-2 w-full md:w-auto">
            See my work
            <ArrowUpRight className="bg-black rounded-full p-1 text-[#FFDB00]" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SubHeadingText;
