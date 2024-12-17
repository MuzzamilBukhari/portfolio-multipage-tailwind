"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Logo from "../../../public/images/pic.jpg";
import Image from "next/image";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Button } from "..";

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
    <header className="text-primary body-font bg-bg1 backdrop-blur-md flex flex-col md:hidden w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-white gap-2 text-xl"
        >
          <div className="border-2 border-primary rounded-[50%]">
            <Image
              src={Logo}
              alt={""}
              className="w-8 h-8 rounded-[50%] object-cover object-top "
            />
          </div>
          <span>
            Muzzamil<span className="text-primary">Bukhari</span>
          </span>
        </Link>
      </div>

      <button
        className="text-secondary focus:outline-none absolute top-7 right-5 z-20"
        onClick={toggleNavbar}
      >
        {isOpen ? (
          <RiCloseLine className="w-7 h-7" />
        ) : (
          <RiMenu3Line className="w-7 h-7" />
        )}
      </button>

      <nav
        className={`fixed top-0 right-0 bg-black/95 backdrop-blur-md p-6 w-3/4 h-screen transform duration-300 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center gap-6 justify-center h-full">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id}>
              {item.name}
            </NavLink>
          ))}
          <a href="/resume.pdf" download>
            <Button type="button">Download Resume</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MobNavbar;
