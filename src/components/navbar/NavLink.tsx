import Link from "next/link";
import React from "react";

const NavLink = ({ children, slug }: { children: string; slug: string }) => {
  return (
    <Link
      href={slug}
      className="font-semibold  hover:shadow-md hover:text-primary rounded-xl px-2 lg:px-4 py-2 duration-200 shadow-lg hover:shadow-primary "
    >
      {children}
    </Link>
  );
};

export default NavLink;
