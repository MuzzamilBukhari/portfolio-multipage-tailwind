import React from "react";
import Button from "../Button";
import Link from "next/link";

const InfoSection = () => {
  return (
    <>
      <section
        className="relative bg-cover bg-center h-screen bg-light_bg1 dark:bg-dark_bg1 text-dark_bg2  dark:text-light_bg1 body-font pt-[200px] md:pt-[90px]"
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
             Crafting Clean, Fast & Modern Web Experiences
            </h2>
            <p
              className="mb-8 leading-relaxed w-full max-w-lg"
              data-aos="slide-up"
              data-aos-duration="500"
              data-aos-delay="100"
            >
            I&apos;m a full-stack web developer who loves turning ideas into smooth, fast and interactive digital experiences. Using React, Next.js, Express.js, and PostgreSQL, I build products that feel clean, intuitive, and performance-focused. Always learning, always shipping.
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
