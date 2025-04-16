import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function SocialIcons() {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <a
        href="https://www.linkedin.com/in/nqat"
        target="_blank"
        className="cursor-pointer p-1 rounded-lg flex items-center justify-center"
      >
        <FaLinkedin className="text-[#FFDB00] hover:text-white w-6 h-6" />
      </a>
      <a
        href="https://github.com/tuan0919"
        target="_blank"
        className="cursor-pointer p-1 rounded-lg flex items-center justify-center"
      >
        <FaGithub className="text-[#FFDB00] hover:text-white w-6 h-6" />
      </a>
      <a
        href="mailto:nqat0919@gmail.com"
        target="_blank"
        className="cursor-pointer p-1 rounded-lg flex items-center justify-center"
      >
        <MdAttachEmail className="text-[#FFDB00] hover:text-white w-6 h-6" />
      </a>
      <a
        href="https://www.facebook.com/StrikerAOT/"
        target="_blank"
        className="cursor-pointer p-1 rounded-lg flex items-center justify-center"
      >
        <FaFacebook className="text-[#FFDB00] hover:text-white w-6 h-6" />
      </a>
    </div>
  );
}

export default SocialIcons;
