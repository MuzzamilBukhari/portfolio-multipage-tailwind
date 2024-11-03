import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-orange-950 opacity-[0.98] py-28 body-font"
    >
      <div className="container mx-auto text-center">
        <h1 className="sm:text-7xl text-6xl text-white font-bold">Portfolio</h1>
        <h2 className="text-lg font-normal text-orange-600 mb-5">
          Check out my latest projects
        </h2>
        <p className="mb-8 text-white px-4">
          These are some of the projects I&apos;ve been working on, showcasing
          my expertise in web development, React, and Data Structures &
          Algorithms (DSA). From building functional calculators to complex quiz
          systems, each project highlights my skills in TypeScript, Next.js, and
          operating systems. Feel free to explore the code on GitHub!
        </p>
        <div className=" container flex flex-wrap justify-center items-center gap-10">
          <div className="bg-orange-800 w-[300px] h-[300px] p-5 rounded-lg hover:scale-105 hover:shadow-lg transition duration-300">
            <Link
              href="https://qr-code-generator-lake.vercel.app/"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/800px-QR_code_for_mobile_English_Wikipedia.svg.png"
                alt="Project 1"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">
                Project 1 - QR Code Generator
              </h3>
            </Link>
          </div>
          <div className="bg-orange-800 hover:scale-105 w-[300px] h-[300px] p-5 rounded-lg hover:shadow-lg transition duration-300">
            <Link
              href="https://age-calculator-green-sigma.vercel.app/"
              target="_blank"
            >
              <img
                src="https://jharkhand.studyinfo.org.in/wp-content/uploads/2024/05/age-calculator-76.png"
                alt="Project 2"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">
                Project 1 - Age Calculator
              </h3>
              <p className="text-gray-400 mt-2"></p>
            </Link>
          </div>
          <div className="bg-orange-800 hover:scale-105 w-[300px] h-[300px] p-5 rounded-lg hover:shadow-lg transition duration-300">
            <Link href="https://bookstore-mb-nu.vercel.app/" target="_blank">
              <img
                src="https://s26162.pcdn.co/wp-content/uploads/sites/3/2023/02/used-books.jpg"
                alt="Project 3"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">
                Project 3 - Book Store Website
              </h3>
              <p className="text-gray-400 mt-2"></p>
            </Link>
          </div>
          <div className="bg-orange-800 hover:scale-105 w-[300px] h-[300px] p-5 rounded-lg hover:shadow-lg transition duration-300">
            <Link href="https://blogger-web.vercel.app/" target="_blank">
              <img
                src="https://img.freepik.com/free-photo/online-blog_53876-123696.jpg"
                alt="Project 4"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">
                Project 4 - Blogger Website
              </h3>
              <p className="text-gray-400 mt-2"></p>
            </Link>
          </div>

          <div className="bg-orange-800 hover:scale-105 w-[300px] h-[300px] p-5 rounded-lg hover:shadow-lg transition duration-300">
            <Link
              href="https://github.com/MuzzamilBukhari/process-control-block.git"
              target="_blank"
            >
              <img
                src="https://afteracademy.com/images/process-control-block-in-operating-system-banner.png"
                alt="Project 5"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">
                Project 5 - Process Control Block
              </h3>
              <p className="text-gray-400 mt-2"></p>
            </Link>
          </div>
          <div className="bg-orange-800 hover:scale-105 w-[300px] h-[300px] p-5 rounded-lg hover:shadow-lg transition duration-300">
            <Link
              href="https://github.com/MuzzamilBukhari/DSA-Project.git"
              target="_blank"
            >
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/0*KIKnUvzdIkp5zcDJ"
                alt="Project 6"
                className="rounded-t-lg w-full object-cover h-40"
              />
              <h3 className="text-lg font-medium text-white mt-4">
                Project 6 - Social Network Graph
              </h3>
              <p className="text-gray-400 mt-2"></p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
