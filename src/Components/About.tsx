import React, { useState, useEffect } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import String from "./Strings";

function About() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const textToType = String.ABOUT_HEADING;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex >= textToType.length) {
        // Text has been fully typed, start removing characters
        setTypedText((prevText) => prevText.slice(0, -1));
        if (typedText.length === 0) {
          setCurrentIndex(0);
        }
      } else {
        // Typing in progress
        setTypedText((prevText) => prevText + textToType[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [typedText, currentIndex, textToType]);

  return (
    <div className="mt-12 px-44 text-center flex flex-col items-center bg-black">
      <h2 className="text-[35px] font-bold text-white">{typedText}</h2>
      <BiSolidQuoteAltLeft className="bg-green-500 p-3 text-[44px] rounded-full mt-6 text-white" />
      <h2 className="my-5 t text-[14px] text-white">{String.ABOUT_DESC}</h2>
      <BiSolidQuoteAltRight className="bg-green-500 p-3 text-[44px] rounded-full mt-6 text-white" />
    </div>
  );
}

export default About;
