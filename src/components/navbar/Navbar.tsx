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
      name: "Portfolio",
      slug: "/portfolio",
    },
  ];
  return (
    <header className="text-orange-500 bg-orange-950 body-font w-full fixed z-10 flex justify-center items-center">
      <div className="container flex flex-wrap items-center w-full p-5 flex-col md:flex-row ">
        <Link
          href={"/"}
          className="flex flex-col sm:flex-row md:ml-8 title-font font-medium items-center text-white gap-2 text-xl mb-4 md:mb-0"
        >
          <Image src={Logo} alt={""} className="w-14 h-14 rounded-[50%] " />
          <span>Muzzi</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center md:mr-12">
          {navItems.map((item) => (
            <NavLink slug={item.slug} key={item.id}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
