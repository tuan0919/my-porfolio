import { cards } from "@/constants";
import TitleText from "../title-text";
import Skills from "./Skills";

function Expertise() {
  return (
    <div id="expertise" className="w-full h-full">
      <TitleText
        title="What i can do"
        description={`
          My technical skills which consist practices of 
          Full-Stack Development, Cloud Integration,
          Error Handling, Modern Web Technologies.
            `}
      />

      {/** cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {cards.map((card, index) => {
          return (
            <div key={index} className="relative inline-block group">
              <span
                className={`absolute dark:hidden rounded-2xl inset-0 w-full h-full transition duration-200 ease-out transform translate-x-[5px] translate-y-[5px] ${card.borderColor} group-hover:-translate-x-0 group-hover:-translate-y-0`}
              ></span>
              <div
                //key={index}
                className={`relative flex items-center border rounded-xl px-2 
                            ${card.cardBgColor} border border-[#333]
                        `}
              >
                {/** text-section */}
                <div className="md:w-1/2 h-full flex items-center">
                  <div
                    className={`${card.textColor} font-poppins font-semibold text-base md:text-xl px-1`}
                  >
                    <h2 className={`${card.textBgColor} w-fit px-1`}>
                      {card.title}
                    </h2>
                    <h2 className={`${card.textBgColor} w-fit px-1 ml-1`}>
                      {card.subTitle}
                    </h2>
                  </div>
                </div>

                {/** image-section */}
                <div className="flex-1 md:w-1/2 h-[10rem] md:h-full flex items-center justify-center">
                  <div className="flex items-center justify-end w-[6rem] h-[6rem] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/** Skills circle section */}
      <div className="mt-20" id="skills">
        <Skills />
      </div>
    </div>
  );
}

export default Expertise;
