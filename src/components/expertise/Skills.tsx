import {
  backends,
  devops,
  frontends,
  tools,
  versionControl,
} from "@/constants";
import { CircleIcon } from "./CircleIcon";

function Skills() {
  return (
    <div
      className="relative h-full py-10 
      px-4 lg:px-20
     bg-zinc-200 dark:bg-gray-900 border-2
      border-black dark:border-zinc-500
       border-dashed rounded-xl"
    >
      <CircleIcon className="absolute bg-[#FFDB00] -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute bg-[#FFDB00] -bottom-[2px] -right-[2px]" />
      <CircleIcon className="absolute bg-[#FFDB00] -left-[2px] -top-[2px]" />
      <CircleIcon className="absolute bg-[#FFDB00] -bottom-[2px] -left-[2px]" />

      <div className="flex flex-col gap-6">
        <div className="mb-2 flex flex-col text-center items-center gap-1 justify-center">
          <h2 className="text-xl md:text-2xl font-montserrat font-bold text-zinc-900 dark:text-[#d3d3d3]">
            Technical Skills
          </h2>
          <span className="text-sm md:text-base text-zinc-900 dark:text-[#d3d3d3] font-openSans">
            My Technical skills which I gained for my software developer career.
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-md md:text-2xl text-left font-montserrat font-bold text-zinc-900 dark:text-[#d3d3d3]">
            Backend
          </h2>
          <div
            className="
            w-full h-full
            flex gap-2 flex-wrap justify-start
            lg:gap-8 lg:grid lg:grid-cols-12 
            items-center lg:justify-center
            "
          >
            {backends?.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="
                    flex bg-slate-700
                    items-center justify-center 
                    w-[2rem] h-[2rem] rounded-sm p-1
                    md:w-[3rem] md:h-[3rem] 
                    lg:w-[4rem] lg:h-[4rem] lg:rounded-md 
                  "
                >
                  <img src={skill.image} className="md:w-[3rem]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-md md:text-2xl text-left font-montserrat font-bold text-zinc-900 dark:text-[#d3d3d3]">
            Frontend
          </h2>
          <div
            className="
            w-full h-full
            flex gap-2 flex-wrap justify-start
            lg:gap-8 lg:grid lg:grid-cols-12 
            items-center lg:justify-center
          "
          >
            {frontends?.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="
                    flex bg-slate-700
                    items-center justify-center 
                    w-[2rem] h-[2rem] rounded-sm p-1
                    md:w-[3rem] md:h-[3rem] 
                    lg:w-[4rem] lg:h-[4rem] lg:rounded-md 
                  "
                >
                  <img src={skill.image} className="md:w-[3rem]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-md md:text-2xl text-left font-montserrat font-bold text-zinc-900 dark:text-[#d3d3d3]">
            Cloud & Infrastructure
          </h2>
          <div
            className="
            w-full h-full
            flex gap-2 flex-wrap justify-start
            lg:gap-8 lg:grid lg:grid-cols-12 
            items-center lg:justify-center
          "
          >
            {devops?.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="
                  flex bg-slate-700
                  items-center justify-center 
                  w-[2rem] h-[2rem] rounded-sm p-1
                  md:w-[3rem] md:h-[3rem] 
                  lg:w-[4rem] lg:h-[4rem] lg:rounded-md 
                "
                >
                  <img src={skill.image} className="md:w-[3rem]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-md md:text-2xl text-left font-montserrat font-bold text-zinc-900 dark:text-[#d3d3d3]">
            Version control
          </h2>
          <div
            className="
            w-full h-full
            flex gap-2 flex-wrap justify-start
            lg:gap-8 lg:grid lg:grid-cols-12 
            items-center lg:justify-center
          "
          >
            {versionControl?.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="
                flex bg-slate-700
                items-center justify-center 
                w-[2rem] h-[2rem] rounded-sm p-1
                md:w-[3rem] md:h-[3rem] 
                lg:w-[4rem] lg:h-[4rem] lg:rounded-md 
                "
                >
                  <img src={skill.image} className="md:w-[3rem]" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="text-md md:text-2xl text-left font-montserrat font-bold text-zinc-900 dark:text-[#d3d3d3]">
            Tools
          </h2>
          <div
            className="
            w-full h-full
            flex gap-2 flex-wrap justify-start
            lg:gap-8 lg:grid lg:grid-cols-12 
            items-center lg:justify-center
          "
          >
            {tools?.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="
                    flex bg-slate-700
                    items-center justify-center 
                    w-[2rem] h-[2rem] rounded-sm p-1
                    md:w-[3rem] md:h-[3rem] 
                    lg:w-[4rem] lg:h-[4rem] lg:rounded-md 
                  "
                >
                  <img src={skill.image} className="md:w-[3rem]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
