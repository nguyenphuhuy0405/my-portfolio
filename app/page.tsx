import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <SpeedInsights />
    </>
  );
}