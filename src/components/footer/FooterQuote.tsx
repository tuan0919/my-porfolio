import { ArrowUpRight, Grip } from "lucide-react";

function FooterQuote() {
  return (
    <div className="bg-[#FFDB00] p-2 rounded-sm">
      <div className="border-2 border-dashed border-black p-3 rounded-sm">
        <div className="flex items-center justify-between mb-4">
          <Grip className="text-black w-5 h-5" />
          <ArrowUpRight className="text-[#FFDB00] bg-black rounded-full p-1" />
        </div>
        <h2 className="text-xs md:text-sm lg:text-base font-lato font-medium text-black text-center">
          A Full Stack Web Developer crafting both the frontend and backend of
          websites and web applications to deliver complete, functional, and
          user-centric digital experiences.
        </h2>
      </div>
    </div>
  );
}

export default FooterQuote;
