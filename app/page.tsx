import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { BiHome } from "react-icons/bi";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Contact />
      </div>
    </main>
  );
}
