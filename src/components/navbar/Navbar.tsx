"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import Logo from "../../../public/images/pic.jpg";
import { Button } from "../";
import DarkMode from "./DarkMode";

const Navbar = () => {
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
  return (
    <header className="bg-light_bg1 text-light_primary dark:text-dark_primary dark:bg-dark_bg1 body-font w-full fixed z-10 hidden md:block">
      <div className="flex justify-between items-center md:px-3 lg:px-12 py-4">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-dark_bg2 dark:text-light_bg1 gap-2 text-xl"
        >
          <div className="border-2 border-light_primary dark:border-dark_primary rounded-[50%]">
            <Image
              src={Logo}
              alt={""}
              className="w-9 h-9 rounded-[50%] object-cover object-top "
            />
          </div>
          <span>
            Muzzamil
            <span className="text-light_primary dark:text-dark_primary">
              Bukhari
            </span>
          </span>
        </Link>
        <div className="flex justify-center items-center gap-2 lg:gap-12">
          <DarkMode />
          <nav className=" flex items-center gap-3 lg:gap-8 text-base justify-center ">
            {navItems.map((item) => (
              <NavLink slug={item.slug} key={item.id}>
                {item.name}
              </NavLink>
            ))}
          </nav>
          <a href="/resume.pdf" download>
            <Button type="button">Download Resume</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
