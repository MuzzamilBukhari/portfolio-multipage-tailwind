"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Logo from "../../../public/images/pic.jpg";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Button } from "..";
import DarkMode from "./DarkMode";

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

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-light_primary dark:text-dark_primary body-font bg-light_bg1 dark:bg-dark_bg1 backdrop-blur-md flex md:hidden w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-dark_bg2 dark:text-light_bg1 gap-2 text-xl"
          onClick={toggleNavbar}
        >
          <div className="border-2 border-light_primary dark:border-dark_primary rounded-[50%]">
            <Image
              src={Logo}
              alt={""}
              className="w-8 h-8 rounded-[50%] object-cover object-top "
            />
          </div>
          <span>
            Muzzamil
            <span className="text-light_primary dark:text-dark_primary">
              Bukhari
            </span>
          </span>
        </Link>
      </div>
      <div className="flex justify-center items-center mr-16 mt-3">
        <DarkMode className="w-16" />
        <button
          className="text-light_secondary dark:text-dark_secondary focus:outline-none absolute top-7 right-5 z-20"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <RiCloseLine className="w-7 h-7" />
          ) : (
            <RiMenu3Line className="w-7 h-7" />
          )}
        </button>
      </div>

      <nav
        className={`fixed top-0 right-0 bg-light_bg1/95 dark:bg-dark_bg1/95 backdrop-blur-md p-6 w-3/4 h-screen transform duration-300 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 justify-center h-full">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id} onclick={toggleNavbar}>
              {item.name}
            </NavLink>
          ))}
          <a href="/resume.pdf" download>
            <Button type="button" onclick={toggleNavbar}>
              Download Resume
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MobNavbar;
