"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Logo from "@/public/images/pic.jpg";
import Image from "next/image";

const navItems = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "About",
    slug: "/about",
  },
  {
    id: 3,
    name: "Projects",
    slug: "/projects",
  },

  {
    id: 4,
    name: "Github",
    slug: "https://github.com/MuzzamilBukhari",
  },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="text-primary bg-bg1 body-font w-full fixed z-10 md:hidden flex justify-center items-center">
      <div className="container  flex flex-wrap items-center w-full p-5 justify-between ">
        <Link
          href={"/"}
          className="flex md:ml-8 title-font font-medium items-center text-white gap-2 text-xl mb-4 md:mb-0"
        >
          <Image src={Logo} alt={""} className="w-14 h-14 rounded-[50%] " />
          <span>
            Muzzamil<span className="text-primary">Bukhari</span>
          </span>
        </Link>

        <button
          className="text-white block focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="">
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          }  flex-col items-center gap-2 text-base justify-center absolute top-20 -right-4 bg-black rounded-md p-4`}
        >
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id}>
              {item.name}
            </NavLink>
          ))}
          <a
            href="../../public/resume.pdf"
            download
            className="font-semibold mr-2 hover:shadow-md hover:bg-secondary rounded-xl hover:text-white px-2 lg:px-5 py-2 duration-200 hover:ring-primary shadow-lg hover:shadow-secondary/60"
          >
            <button className="">Download Resume</button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default MobNavbar;
