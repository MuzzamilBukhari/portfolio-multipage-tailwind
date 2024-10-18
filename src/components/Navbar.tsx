import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/public/images/pic.jpg";

const Navbar = () => {
  return (
    <header className="text-orange-500 bg-orange-950 body-font fixed w-full z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Image src={Logo} alt={""} className="w-14 h-14 rounded-[50%] mx-4" />
        <a className="flex title-font font-medium items-center text-white text-xl mb-4 md:mb-0">
          Muzzi
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="#info"
            className="mr-5 hover:shadow-md hover:bg-orange-800 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Home
          </Link>
          <Link
            href="#contact"
            className="mr-5 hover:shadow-md hover:bg-orange-800 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Contact
          </Link>
          <Link
            href="#skills"
            className="mr-5 hover:shadow-md hover:bg-orange-800 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Skills
          </Link>
          <Link
            href="#education"
            className="mr-5 hover:shadow-md hover:bg-orange-800 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Education
          </Link>
          <Link
            href="#portfolio"
            className="mr-5 hover:shadow-md hover:bg-orange-800 rounded-xl hover:text-white px-4 py-2 duration-200 "
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
