import { TypewriterEffectSmooth } from "../typewriter-effect";

function HeadingTextAnimated() {
  const words = [
    {
      text: "First,",
    },
    {
      text: "solve",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "the",
    },
    {
      text: "problem.",
    },
    {
      text: "Then,",
    },
    {
      text: "write",
      className: "text-pink-500 dark:text-purple-500",
    },
    {
      text: "the",
    },
    {
      text: "code.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}

export default HeadingTextAnimated;
