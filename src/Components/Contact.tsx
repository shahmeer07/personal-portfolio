import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[24px] text-white font-bold">Contact Below</h2>

      <div className="flex flex-row items-center mt-8 gap-10">
        <a
          href="https://www.facebook.com/Shahmeerk519/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-gray-200 hover:bg-green-500 transition-colors"
        >
          <AiFillFacebook className="text-gray-600 hover:text-white text-2xl" />
        </a>
        <a
          href="https://github.com/shahmeer07"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-gray-200 hover:bg-green-500 transition-colors"
        >
          <AiFillGithub className="text-gray-600 hover:text-white text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-shahmeer-khan-a2912b223/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-gray-200 hover:bg-green-500 transition-colors"
        >
          <AiFillLinkedin className="text-gray-600 hover:text-white text-2xl" />
        </a>
      </div>
      <p className="mt-8 text-white">
        Reach out at email{" "}
        <a
          href="mailto:shahmeerk3000@gmail.com"
          className="text-green-500 hover:underline"
        >
          shahmeerk3000@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;
