"use client";

import { useState } from "react";
import { BackgroundGradientAnimation } from "./background-gradient";
import { BiCopy, BiSolidCopy } from "react-icons/bi";

const GradientBackground = () => {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    navigator.clipboard.writeText("contact.sanzu@gmail.com");
    setCopied(true);
  };
  return (
    <BackgroundGradientAnimation className="h-full w-full flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center flex-col z-40">
        <h1 className="text-xl md:text-2xl font-instrument font-semibold">
          Wish to work together?
        </h1>
        <p className="text-sm mt-2 md:text-lg tracking-widest font-poppins font-light">
          Lets build great stuff together
        </p>

        {!copied ? (
          <a
            onClick={handleCopied}
            className="border rounded-lg 
              
              border-white px-4 py-2 mt-5 flex gap-2 items-center justify-center hover:bg-white hover:text-black duration-500 hover:shadow-[#e979ff99_0px_2px_14px]"
          >
            <BiCopy />
            <p>Copy Email</p>
          </a>
        ) : (
          <a
            className="border rounded-lg 
              
              px-4 py-2 mt-5 flex gap-2 items-center justify-cente bg-white text-black"
          >
            <BiSolidCopy />
            <p>Email Copied!</p>
          </a>
        )}
      </div>
    </BackgroundGradientAnimation>
  );
};

export default GradientBackground;
