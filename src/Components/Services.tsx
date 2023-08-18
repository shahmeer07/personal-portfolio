import Strings from "../Components/Strings";
import { IoArrowForwardOutline } from "react-icons/io5";

function Services() {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTED,
      desc: Strings.FRONTED_DESC,
      logo: "https://www.mobinius.com/wp-content/uploads/2020/02/reactjs-2.png",
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DESC,
      logo: "https://static.javatpoint.com/python/images/django-vs-node-js.png",
    },
    {
      id: 3,
      title: Strings.MOBILE,
      desc: Strings.MOBILE_DESC,
      logo: "https://www.cubix.co/storage/app/uploads/public/5fc/e5d/f07/5fce5df073e88909725860.jpg",
    },
  ];

  return (
    <div className="px-12 mt-12">
      <div className="flex items-center">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className="text-[24px] font-bold text-white">{Strings.SERVICES}</h2>
        <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
      </div>
      <div className="flex justify-around mt-16">
        {servicesList.map((item) => (
          <div className="text-center flex flex-col justify-center items-center gap-6">
            <div className=" rounded-full w-[110px] h-[82px] p-1">
              <img
                src={item.logo}
                className="w-[80px] h-[80px] p-1 hover:scale-110 transition-all cursor-pointer"
              />
            </div>
            <h2 className="mt-5 font-bold text-white">{item.title}</h2>
            <h2 className="text-white">{item.desc}</h2>
            <IoArrowForwardOutline className="bg-green-500 text-[35px] p-2 text-white rounded-full cursor-pointer hover:scale-110 transition-all" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
