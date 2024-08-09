import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { BiHome } from "react-icons/bi";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <BiHome /> }]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
