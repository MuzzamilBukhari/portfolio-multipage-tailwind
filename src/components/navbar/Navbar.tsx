"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import Logo from "../../../public/images/pic.jpg";
import { Button } from "../";

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
    <header className="text-white bg-bg1 body-font w-full fixed z-10 hidden md:block">
      <div className="flex justify-between items-center md:px-6 lg:px-12 py-4">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-white gap-2 text-xl"
        >
          <div className="border-2 border-primary rounded-[50%]">
            <Image
              src={Logo}
              alt={""}
              className="w-12 h-12 rounded-[50%] object-cover object-top "
            />
          </div>
          <span>
            Muzzamil<span className="text-primary">Bukhari</span>
          </span>
        </Link>
        <div className="flex justify-center items-center gap-6 lg:gap-12">
          <nav className=" flex items-center gap-8 text-base justify-center ">
            {navItems.map((item) => (
              <NavLink slug={item.slug} key={item.id}>
                {item.name}
              </NavLink>
            ))}
          </nav>
          <a href="/resume.pdf" download>
            <Button type="button">Resume</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
