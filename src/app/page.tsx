import Contact from "@/components/Contact";
import Education from "@/components/Education";
import InfoSection from "@/components/InfoSection";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="">
      <InfoSection />
      <Education />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
