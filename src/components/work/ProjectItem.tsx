import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export const ProjectGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-wrap md:grid md:auto-rows-[35rem] lg:auto-rows-[32rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ProjectGridItem = ({
  className,
  title,
  description,
  image,
  time,
  icon,
  stack,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  time?: string;
  icon?: React.ReactNode;
  stack?: string[];
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-3 dark:bg-[#101827] dark:border-gray-800 dark:hover:border-gray-700 bg-white border-2 hover:border-gray-300 flex flex-col space-y-2",
        className
      )}
    >
      <div className="h-[20rem] object-fill rounded-xl border">
        <img
          src={image}
          alt="title"
          className="rounded-xl h-full w-full object-cover"
        />
      </div>
      <div className="transition duration-200 flex-1 flex flex-col justify-between">
        <div className="flex flex-col">
          <a
            href={link}
            target="_blank"
            className="hover:underline flex items-center gap-2"
          >
            <div className="flex items-center justify-center bg-black dark:bg-transparent p-1 rounded-md">
              {icon}
            </div>
            <div className="font-poppins font-bold text-neutral-800 dark:text-neutral-100 mb-2 mt-2">
              {title}
            </div>
            <div className="flex items-center justify-center bg-black dark:bg-transparent p-1 rounded-full">
              <ArrowUpRight className="text-[#FFDB00] text-sm" />
            </div>
          </a>
          <div className="font-sans italic font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {time}
          </div>
        </div>
        <div className="flex gap-2 py-2 flex-wrap w-100">
          {stack?.map((str, index) => (
            <div
              key={index}
              className="bg-[#FFDB00] border-black dark:border-[#d6d6d6] dark:bg-transparent w-[2rem] h-[2rem] transition duration-200 cursor-pointer flex items-center justify-center rounded-sm border-2 hover:border-transparent dark:hover:border-transparent"
            >
              <img src={str} width={"90%"} height={"90%"} />
            </div>
          ))}
        </div>
        <div className="font-sans font-medium text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
