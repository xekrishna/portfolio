"use client";

import React from "react";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

import {
  BiDownload,
  BiX,
  BiLogoInstagram,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";

import { socials } from "@/data";

import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FlipWords } from "./ui/flip-words";
import MagicButton from "./ui/button";

const bio =
  "Transforming your ideas into visually stunning projects. With expertise in Web & App development and UI/UX design, I deliver efficient, impactful solutions that inspire.";

const stack = ["Web Developer", "App Developer", "UI/UX Designer"];

const Hero = () => {
  return (
    <div className="w-full h-screen bg-black">
      <ShootingStars />
      <StarsBackground />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="flex justify-center  items-center h-full">
        <div className="max-w-[89vw] h-full flex justify-center gap-2 items-center flex-col  ">
          <h1 className="tracking-widest font-poppins font-medium w-[80%] md:text-center md:text-5xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 5 } }}
            >
              Hi, I'm Mayank
            </motion.span>
            <br />
            <FlipWords
              words={stack}
              className="md:text-7xl text-4xl font-semibold mt-2 "
            />
          </h1>
          <TextGenerateEffect words={bio} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 5 } }}
            className="flex justify-center md:items-center gap-5 mt-5 md:flex-row flex-col w-full md:w-auto px-7"
          >
            <a href="/">
              <MagicButton
                title="Download CV"
                icon={<BiDownload className="font-bold text-xl" />}
                position="right"
              />
            </a>
            <div className="flex justify-start md:justify-center items-center gap-2">
              {[
                socials.map((item, index) => {
                  return (
                    <a href={item.link} target="_blank" key={index}>
                      <MagicButton
                        icon={<item.icon />}
                        position="right"
                        otherClasses="md:text-xl px-3 inline-block"
                      />
                    </a>
                  );
                }),
              ]}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
