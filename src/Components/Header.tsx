const Header = () => {
  return (
    <div
      className="flex items-center fixed
    w-full justify-between border-b-[1px] bg-black"
    >
      <div className="w-[90px] h-[90px] bg-black ">
        <img
          src="https://i.pinimg.com/originals/de/bd/74/debd74816aebc2c4f493068b64012798.jpg"
          className="p-1"
        />
        <h6 className="text-white pl-1">Shahmeer</h6>
      </div>
      <div className="text-white text-center whitespace-nowrap transition-opacity hover:opacity-75">
        <p className="text-lg font-semibold">
          Aspiring Software Engineer, Crafting Digital Solutions with Passion!
        </p>
      </div>
      <div
        className="w-[90px] h-[90px]
        bg-red-500 flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
