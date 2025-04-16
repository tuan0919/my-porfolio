import { cn } from "@/lib/utils";

export const NoteGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NoteGridItem = ({
  className,
  title,
  description,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  stack?: string[];
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-[#101827] bg-white  flex flex-col space-y-2",
        className
      )}
    >
      <div className="transition duration-200 flex-1 flex flex-col justify-between">
        <div className="flex flex-col">
          <a
            href={link}
            target="_blank"
            className="hover:underline text-neutral-800 flex items-center gap-2 bg-[#FFDB00] border-black dark:border-gray-800 border-2 rounded-t-md px-1"
          >
            <div className="flex items-center justify-center p-1 rounded-md">
              {icon}
            </div>
            <div className="font-poppins font-bold text-neutral-800 mb-2 mt-2">
              {title}
            </div>
          </a>
        </div>
        <div className="flex-1 border-t-0 font-sans font-medium text-neutral-600 text-xs dark:text-neutral-300 p-3 border-2 rounded-b-md dark:border-gray-800 dark:hover:border-gray-700 hover:border-gray-300">
          {description}
        </div>
      </div>
    </div>
  );
};
