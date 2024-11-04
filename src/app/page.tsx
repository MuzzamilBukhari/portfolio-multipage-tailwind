import Contact from "@/components/contact/Contact";
import Education from "@/components/about/About";
import InfoSection from "@/components/hero-section/InfoSection";
import Portfolio from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="">
      <InfoSection />
      <Skills />
      <Contact />
    </div>
  );
}
