import {
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";
const Sidebar = () => {
  return (
    <div
      className="w-[90px] border-r-[1px] bg-red-500
    h-screen fixed flex flex-col justify-around items-center mt-[90px]"
    >
      <h2 className="-rotate-90 tracking-widest text-white">@Shahmeer07</h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px]">
        <IoLogoGithub className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoLinkedin className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoFacebook className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
        <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-all ease-in-out" />
      </div>
    </div>
  );
};

export default Sidebar;
