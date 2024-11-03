import Contact from "@/components/contact/Contact";
import Education from "@/components/about/Education";
import InfoSection from "@/components/hero-section/InfoSection";
import Portfolio from "@/components/portfolio/Portfolio";
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
