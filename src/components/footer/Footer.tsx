import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/pic.jpg";
import socialLinks from "./socialLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="body-font bg-light_bg1 dark:bg-dark_bg2">
      <div className="container px-5 py-6 mx-auto flex items-center justify-center sm:flex-row flex-col">
        <Link href={"/"} className="flex justify-center items-center gap-2">
          <Image src={Logo} alt="Logo" className="w-8 h-8 rounded-full " />
          <span className="title-font font-medium text-light_secondary dark:text-dark_secondary">
            Muzzamil Bukhari
          </span>
        </Link>
        <p className="text-sm text-dark_bg2 dark:text-light_bg1 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Muzzamil Bukhari
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {socialLinks.map((link) => (
            <SocialLink key={link.id} link={link.link} icon={link.icon} />
          ))}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
