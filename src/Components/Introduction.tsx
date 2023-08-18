const Introduction = () => {
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="h-[120px] border-r-[1px] mt-[-20px]" />
      <div className="w-[5px] h-[5px] bg-white-600 rounded-full"></div>
      <h2
        className="mt-5 text-white font-medium text-[13px]
  tracking-widest"
      >
        HELLO! MY NAME IS
      </h2>
      <h2
        className="text-[55px] font-bold text-white tracking-widest
  mt-5"
      >
        SHAHMEER <br></br> KHAN
      </h2>
      <img
        src="https://lh3.googleusercontent.com/a/AAcHTtcywt3HiT10dXuZ-AIiVCZSk-Ezc_d9fVK3Leh_tbxVOA=s360-c-no"
        className="w-[130px] h-[130xp] bg-gray-200 p-1 rounded-full"
      />
    </div>
  );
};

export default Introduction;
