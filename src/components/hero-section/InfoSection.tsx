import React from "react";
import Button from "../Button";
import bgImg from "../../../public/images/hero.webp";
import Link from "next/link";

const InfoSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen bg-light_bg1 dark:bg-dark_bg1 text-dark_bg2  dark:text-light_bg1 body-font pt-[200px] md:pt-[90px]"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col-reverse lg:flex-row items-center justify-center duration-300">
          <div className="lg:flex-grow lg:w-[40%] flex flex-col lg:items-start lg:text-left mb-12 lg:mb-0 items-center text-center lg:ml-20">
            <h1
              className="title-font text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold"
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              Hey, I&apos;m <br className="mt-2" />
              Muzzamil Bukhari
            </h1>
            <h2
              className="title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-medium text-light_primary dark:text-dark_primary"
              data-aos="zoom-out"
              data-aos-duration="500"
            >
              Aspiring Web Developer
            </h2>
            <p
              className="mb-8 leading-relaxed w-full max-w-lg"
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
              I am a software developer skilled in building web applications
              using modern technologies like React, Next.js, and Appwrite. I
              enjoy learning new tools and applying them to create dynamic,
              user-friendly websites.
            </p>
            <Link
              href={"https://www.linkedin.com/in/muzzamilbukhari/"}
              target="_blank"
            >
              <Button transition="zoom-in" type="button">
                Hire me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
