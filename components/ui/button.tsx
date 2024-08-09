import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  buttonClasses,
}: {
  title?: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
  buttonClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex justify-center items-center w-full h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none border border-white hover:border-transparent hover:text-black hover:bg-white ${buttonClasses} `}
    >
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-transparent px-4 py-1 text-sm font-light font-poppins gap-2 text-center ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
