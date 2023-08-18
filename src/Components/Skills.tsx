import {
  FaBootstrap,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaDatabase,
  FaFigma,
  FaGit,
  FaPhp,
  FaUnity,
  FaMicrosoft,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiCsharp,
  SiDjango,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNativescript,
  SiNextdotjs,
  SiOracle,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const iconSize = "text-2xl";

  return (
    <div className="px-12 mt-12">
      <div className="flex flex-col items-center">
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] font-bold text-white">Skills</h2>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <FaBootstrap className={`${iconSize} text-green-600`} />
          <SiCplusplus className={`${iconSize} text-blue-600`} />
          <SiCsharp className={`${iconSize} text-purple-600`} />
          <FaCss3Alt className={`${iconSize} text-blue-500`} />
          <SiDjango className={`${iconSize} text-green-500`} />
          <SiExpress className={`${iconSize} text-black`} />
          <FaFigma className={`${iconSize} text-purple-500`} />
          <SiFirebase className={`${iconSize} text-orange-600`} />
          <FaGit className={`${iconSize} text-red-600`} />
          <FaHtml5 className={`${iconSize} text-orange-500`} />
          <FaJsSquare className={`${iconSize} text-yellow-500`} />
          <SiMongodb className={`${iconSize} text-green-400`} />
          <FaDatabase className={`${iconSize} text-gray-600`} />
          <FaMicrosoft className={`${iconSize} text-blue-600`} />
          <SiMysql className={`${iconSize} text-blue-400`} />
          <SiNativescript className={`${iconSize} text-green-500`} />
          <SiNextdotjs className={`${iconSize} text-black`} />
          <FaNodeJs className={`${iconSize} text-green-400`} />
          <SiOracle className={`${iconSize} text-red-600`} />
          <FaPhp className={`${iconSize} text-indigo-600`} />
          <FaPython className={`${iconSize} text-yellow-500`} />
          <FaReact className={`${iconSize} text-blue-400`} />
          <FaDatabase className={`${iconSize} text-gray-600`} />
          <SiTailwindcss className={`${iconSize} text-blue-500`} />
          <SiTypescript className={`${iconSize} text-blue-600`} />
          <FaUnity className={`${iconSize} text-orange-600`} />
        </div>
        <div className="ml-15 mt-8 mb-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shahmeer-portfolio.appspot.com/o/Best%20AR%20Automation%20Solutions-hero%20image.gif?alt=media&token=3c7a265f-87d1-4175-8412-94b458aed0cd"
            alt="AR Automation Solutions"
            className="max-w-[300px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
