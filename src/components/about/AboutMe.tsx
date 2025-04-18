import TitleText from "../title-text";

export default function AboutMe() {
  return (
    <div id="expertise" className="w-full h-full">
      <TitleText title="About me" description={``} />
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div
          className="flex flex-shrink-0 items-center justify-end
            w-[12rem] h-[12rem] 
            md:w-[175px] md:h-[175px] 
            lg:w-[200px] lg:h-[200px] 
            relative"
        >
          <img
            src="https://avatars.githubusercontent.com/u/147523268?v=4"
            className="object-cover border-2 border-black rounded-sm z-10"
          />
          <div
            className="
                w-full h-full
                border-2 dark:border-zinc-500 
                border-zinc-900 rounded-sm border-dashed
                bg-zinc-200 dark:bg-slate-700
                absolute translate-x-3 translate-y-3 z-0
                "
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <p>
            Hi there!{" "}
            <span className="bg-[#FFDB00] px-1 text-black">
              I'm Nguyen Quoc Anh Tuan
            </span>
            , a final-year Computer Science student at Nong Lam University – Ho
            Chi Minh City.
          </p>
          <p>
            I have a solid foundation in{" "}
            <span className="underline decoration-purple-600 dark:decoration-yellow-500 underline-offset-4">
              backend
            </span>{" "}
            development, with a strong focus on building scalable web
            applications using Spring Boot. In addition, I am also capable of
            working as a{" "}
            <span className="underline decoration-purple-600 dark:decoration-yellow-500 underline-offset-4">
              fullstack
            </span>{" "}
            developer, with hands-on experience in ReactJS and its surrounding
            ecosystem.
          </p>
          <p>
            I’ve been exploring and applying various DevOps practices such as
            CI/CD using Jenkins and GitLab, along with cloud services like AWS,
            Cloudinary, and Cloudflare. My long-term goal is to become a{" "}
            <span className="underline decoration-purple-600 dark:decoration-yellow-500 underline-offset-4">
              Cloud Solution Architect
            </span>
            .
          </p>
          <p>
            I'm currently holding a{" "}
            <span className="underline decoration-purple-600 dark:decoration-yellow-500 underline-offset-4">
              TOEIC Listening & Reading
            </span>{" "}
            certificate with a score of 815/990 and preparing for the{" "}
            <span className="underline decoration-purple-600 dark:decoration-yellow-500 underline-offset-4">
              AWS SAA-C03
            </span>{" "}
            certification.
          </p>
        </div>
      </div>
    </div>
  );
}
