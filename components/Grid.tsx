import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about" className="bg-black h-max p-10">
      <BentoGrid>
        <BentoGridItem
          id={1}
          className="md:col-span-1 col-span-2 row-span-1 bg-[#080808] hover:bg-[#101010] duration-500 "
          title="12+"
          description="Projects"
        />
        <BentoGridItem
          id={2}
          className="md:col-span-1 col-span-2 row-span-1 bg-[#080808] hover:bg-[#101010] duration-500"
          title="5+"
          description="Happy Clients"
        />
        <BentoGridItem
          id={3}
          className="md:col-span-1 col-span-4 row-span-1 bg-[#080808] hover:bg-[#101010] duration-500"
          title="01+"
          description="Year Expertise"
        />
        <BentoGridItem
          id={4}
          className="md:flex hidden col-span-2  md:row-span-2 row-span-1 max-h-[200px] md:max-h-[330px]"
          title="Flexible with time zone communications"
        />
        <BentoGridItem
          id={5}
          className="col-span-4 md:col-span-1 row-span-2 h-[350px] md:max-h-[330px]"
          title="Workflow Highlights"
          description=""
        />
        <BentoGridItem
          id={6}
          className="col-span-4 md:col-span-3 row-span-2 min-h-[300px] md:row-span-5 md:min-h-[450px] max-h-[450px] "
          title="."
          description="Goals & Objectives, "
        />
        <BentoGridItem
          id={7}
          className="col-span-4 md:col-span-3 row-span-4 max-h-[280px]  "
        />
      </BentoGrid>
    </section>
  );
};

export default Grid;
