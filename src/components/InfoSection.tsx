import Link from "next/link";
import React from "react";

const InfoSection = () => {
  return (
    <>
      <section
        id="info"
        className="text-white bg-orange-950 body-font pt-[220px] md:pt-28"
      >
        <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col-reverse lg:flex-row items-center justify-center">
          <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left mb-12 lg:mb-0 items-center text-center lg:ml-12">
            <h1 className="title-font text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold">
              Muzzamil Bukhari
            </h1>
            <h2 className="title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-medium text-orange-600">
              Aspiring Web Developer
            </h2>
            <p className="mb-8 leading-relaxed w-full max-w-lg">
              I am a software developer skilled in building web applications
              using modern technologies like React, Next.js, and Appwrite. I
              enjoy learning new tools and applying them to create dynamic,
              user-friendly websites.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="https://www.linkedin.com/in/muzzamilbukhari/"
                target="_blank"
                className="text-orange-600 font-semibold bg-white py-2 px-6 rounded-lg text-lg hover:scale-105 duration-300"
              >
                Hire me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
