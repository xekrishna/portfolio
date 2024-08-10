import { projects } from "@/data";
import React from "react";
import { div } from "three/webgpu";
import { PinContainer } from "./ui/3d-pin";
import MagicButton from "./ui/button";
import { BiArrowToRight } from "react-icons/bi";
import { CgArrowRight } from "react-icons/cg";

const RecentProjects = () => {
  return (
    <div
      className="py-20 px-16 md:px-10 lg:px-0 bg-black flex items-center justify-center flex-col gap-5"
      id="projects"
    >
      <span className="text-3xl md:text-5xl md:px-8 lg:px-0 lg:text-6xl font-instrument font-semibold">
        Take a look at my {""}
        <span className="bg-gradient-to-l from-purple-500 to-white text-transparent bg-clip-text">
          Recent Projects
        </span>
      </span>
      <div className="flex flex-wrap md:flex-shrink-0 justify-center items-center p-4 gap-4 lg:max-h-[28rem] overflow-hidden ">
        {projects.map(({ id, title, des, img, iconLists, link, popup }) => (
          <div
            key={id}
            className="h-[25rem] w-[20rem] flex items-center justify-center "
          >
            <PinContainer title={popup} href={link}>
              <div className="flex basis-full flex-col gap-2 pt-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[15rem] h-[20rem]">
                <span className="font-poppins font-semibold text-white text-xl">
                  {title}
                </span>
                <span className="font-inter text-balance">{des}</span>
                <div className="max-h-14 w-full  flex items-center justify-start gap-2 bg-neutral-900 p-1 rounded-md hover:scale-95 duration-500">
                  {iconLists.map((icon) => (
                    <img
                      src={icon}
                      className="w-9 h-9 object-contain rounded-md"
                    />
                  ))}
                </div>
                <div>
                  <img
                    src={img}
                    alt={title}
                    className="object-contain rounded-md"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      <div>
        <MagicButton
          title="View More"
          icon={<CgArrowRight />}
          position="right"
          otherClasses="text-lg font-medium font-montserrat leading "
        />
      </div>
    </div>
  );
};

export default RecentProjects;
