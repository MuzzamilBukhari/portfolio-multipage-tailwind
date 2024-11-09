import { Contact, InfoSection, Skills } from "@/components/";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "QR Code Generator",
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png",
      link: "https://qr-code-generator-lake.vercel.app/",
    },
    {
      id: 2,
      name: "Age Calculator",
      imageSrc:
        "https://jharkhand.studyinfo.org.in/wp-content/uploads/2024/05/age-calculator-76.png",
      link: "https://age-calculator-green-sigma.vercel.app/",
    },
    {
      id: 3,
      name: "Book Store Website",
      imageSrc:
        "https://s26162.pcdn.co/wp-content/uploads/sites/3/2023/02/used-books.jpg",
      link: "https://bookstore-mb-nu.vercel.app/",
    },
  ];
  return (
    <div className="bg-black">
      <InfoSection />
      <div className="mt-12 flex flex-col justify-center items-center ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold title-font text-white mb-4">
          My <span className="text-primary">Projects</span>
        </h1>
        <div className="mt-20 flex justify-center items-center gap-16">
          {projects.map((project) => (
            <ProjectCard
              name={project.name}
              image={project.imageSrc}
              link={project.link}
              alt={"project"}
              key={project.id}
            />
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <Link
            href="/projects"
            className="text-white font-semibold text-2xl animate-pulse transform hover:scale-110 transition-all duration-300 hover:bg-primary py-3 px-6 rounded-full border-2 border-primary"
          >
            See More Projects
          </Link>
        </div>
      </div>
      <Skills />
      <Contact />
    </div>
  );
}
