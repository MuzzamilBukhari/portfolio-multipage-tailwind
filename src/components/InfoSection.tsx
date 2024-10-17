import React from "react";

const InfoSection = () => {
  return (
    <>
      <section className="text-white bg-orange-950 body-font pt-28">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ml-12">
            <h1 className="title-font sm:text-6xl text-5xl mb-4 font-bold ">
              Muzzamil Bukhari
            </h1>
            <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-orange-600">
              Aspiring Web Developer
            </h2>
            <p className="mb-8 leading-relaxed w-[700px]">
              I am a software developer skilled in building web applications
              using modern technologies like React, Next.js, and Appwrite. I
              enjoy learning new tools and applying them to create dynamic,
              user-friendly websites.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-orange-600 font-semibold bg-white border-0 py-2 px-6 focus:outline-none rounded text-lg hover:scale-105 duration-300">
                Hire me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
