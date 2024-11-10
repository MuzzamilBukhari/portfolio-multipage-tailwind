"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/pic.jpg";
import NavLink from "./NavLink";

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
      slug: "https://github.com/huzaifanaeem1",
    },
  ];
  return (
    <header className="text-primary bg-bg1 body-font w-full fixed z-10 hidden md:flex justify-center items-center">
      <div className="container flex flex-wrap items-center w-full p-5 flex-col md:flex-row ">
        <Link
          href={"/"}
          className="flex flex-col sm:flex-row md:ml-8 title-font font-medium items-center text-white gap-2 text-xl mb-4 md:mb-0"
        >
          <Image src={Logo} alt={""} className="w-14 h-14 rounded-[50%] " />
          <span>
            Muzzamil<span className="text-primary">Bukhari</span>
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="flex justify-center lg:justify-start">
          <a
            href="/resume.pdf"
            download
            className="text-secondary text-center font-semibold bg-white py-2 px-3 rounded-xl text-md hover:scale-105 duration-300"
          >
            <button className="">Download Resume</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
