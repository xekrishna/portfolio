"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/carousel";

export function StackCarousel() {
  const cards = data.map((card, index) => <Card card={card} index={index} />);

  return (
    <div className="w-full h-[447px] bg-neutral-950 overflow-hidden">
      <h2 className="max-w-7xl max-h-[300px] pl-4 pt-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Stack
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const Content = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return <></>;
      })}
    </>
  );
};

const data = [
  {
    category: "Web Development",
    title: "Front End",
    src: "/frontend.jpeg",
    item: [
      { title: "HTML5", icon: "/html.png" },
      { title: "CSS", icon: "/css.png" },
      { title: "JS", icon: "/js.png" },
      { title: "React", icon: "/jsx.png" },
      { title: "NextJs", icon: "/nextjs.png" },
      { title: "Tailwind", icon: "/tailwind.png" },
      {
        title: "TypeScript",
        icon: "/ts.png",
      },
    ],
    content: <Content />,
  },
  {
    category: "Web Development",
    title: "Backend",
    src: "/backend.jpeg",
    item: [
      { title: "Node.js", icon: "/node.png" },
      { title: "Firebase", icon: "/firebase.png" },
      { title: "MongoDB", icon: "/mongodb.png" },
      { title: "Appwrite", icon: "/appwrite.png" },
    ],
    content: <Content />,
  },
  {
    category: "App Development",
    title: "Fullstack",
    src: "/appdev.jpeg",
    item: [
      { title: "React Native", icon: "/jsx.png" },
      {
        title: "Kotlin",
        icon: "/kotlin.png",
      },
      {
        title: "C++",
        icon: "/c++.png",
      },
    ],
    content: <Content />,
  },
  {
    category: "Designing",
    title: "Ui/Ux",
    src: "/design.png",
    item: [{ title: "Figma", icon: "/figma.png" }],
    content: <Content />,
  },
];
