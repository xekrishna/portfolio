import { cn } from "@/lib/utils";
import {} from "./globe";
import { GlobeDemo } from "./GlobeDemo";
import { BackgroundGradientAnimation } from "./background-gradient";
import {
  BiCodeAlt,
  BiCopy,
  BiSearch,
  BiShapeSquare,
  BiSolidCopy,
} from "react-icons/bi";
import { useState } from "react";
import GradientBackground from "./GradientBackground";
import { div } from "three/webgpu";
import { MovingBorderButton } from "./BorderButton";
import { BsDiagram2, BsSliders } from "react-icons/bs";
import { WavyBackground } from "./wavy-background";
import { StackCarousel } from "./StackCarousel";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-4 md:grid-cols-6 md:grid-row-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,

  titleClassName,
  img,
  spareImg,
  imgClassName,
  icon,
}: {
  id?: number;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
  imgClassName?: string;
}) => {
  return (
    <div
      className={`row-span-1 relative min-h-40 overflow-hidden rounded-3xl border border-white/[0.1] group/bento  hover:shadow-xl transition duration-500 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 ${className}`}
    >
      {(id === 1 || id === 2 || id === 3) && (
        <div className="flex h-full w-full bg-transparent">
          <div className="flex h-full w-full ">
            <div className="flex flex-col justify-center items-center w-full ">
              <h1
                className={`
                    
                       text-5xl font-poppins font-semibold bg-gradient-to-r from-purple-400 to-white text-transparent bg-clip-text
                      
                  `}
              >
                {title}
              </h1>
              <div
                className={`
                    
                      border rounded-full border-white w-32 md:w-36 hover:bg-gradient-to-r from-purple-400 to-white hover:text-black
                      
                  `}
              >
                <p
                  className={`
                     
                         text-sm md:text-base font-poppins px-2 py-1 font-medium text-center bg-gradient-to-r from-purple-400 to-white text-transparent bg-clip-text hover:text-black
                        
                    `}
                >
                  {description}{" "}
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      )}
      {id === 4 && <GlobeDemo title={title} />}
      {id === 5 && (
        <div className="flex justify-center flex-col items-center bg-neutral-950 h-full">
          <div className="p-2 border-b-2 border-[#e979ff44]">
            <h1 className="pt-5 text-lg font-poppins font-medium">{title}</h1>
          </div>
          <div className="py-2 gap-2 flex flex-col">
            <MovingBorderButton title="Researching" icon={<BiSearch />} />
            <MovingBorderButton title="Wireframing" icon={<BiShapeSquare />} />
            <MovingBorderButton title="Development" icon={<BiCodeAlt />} />
            <MovingBorderButton title="Testing" icon={<BsSliders />} />
            <MovingBorderButton title="Deploying" icon={<BsDiagram2 />} />
          </div>
        </div>
      )}
      {id === 6 && <StackCarousel />}
      {id === 7 && <GradientBackground />}
    </div>
  );
};
