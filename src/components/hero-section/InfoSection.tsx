import React from "react";
import Button from "../Button";
import bgImg from "../../../public/images/hero.webp";

const InfoSection = () => {
  return (
    <>
      <section className="relative bg-cover bg-center h-screen bg-bg1 text-white body-font pt-[200px] md:pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImg})`,
            opacity: 0.25,
            zIndex: -1,
          }}
        />
        <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col-reverse lg:flex-row items-center justify-center">
          <div className="lg:flex-grow lg:w-[40%] flex flex-col lg:items-start lg:text-left mb-12 lg:mb-0 items-center text-center lg:ml-20">
            <h1 className="title-font text-4xl sm:text-5xl lg:text-6xl mb-4 font-bold">
              Hey, I&apos;m <br className="mt-2" />
              Muzzamil Bukhari
            </h1>
            <h2 className="title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-medium text-primary">
              Aspiring Web Developer
            </h2>
            <p className="mb-8 leading-relaxed w-full max-w-lg">
              I am a software developer skilled in building web applications
              using modern technologies like React, Next.js, and Appwrite. I
              enjoy learning new tools and applying them to create dynamic,
              user-friendly websites.
            </p>
            <Button type="button">Hire me</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
