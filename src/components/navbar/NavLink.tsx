import Link from "next/link";
import React from "react";

const NavLink = ({ children, slug }: { children: string; slug: string }) => {
  return (
    <Link
      href={slug}
      className="font-semibold mr-2 hover:shadow-md hover:bg-secondary rounded-xl hover:text-white px-2 lg:px-5 py-2 duration-200 hover:ring-primary shadow-lg hover:shadow-secondary/60 "
    >
      {children}
    </Link>
  );
};

export default NavLink;
