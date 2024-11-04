import Link from "next/link";
import React from "react";

const NavLink = ({ children, slug }: { children: string; slug: string }) => {
  return (
    <Link
      href={slug}
      className="font-semibold mr-5 hover:shadow-md hover:bg-secondary rounded-xl hover:text-white px-5 py-2 duration-200 "
    >
      {children}
    </Link>
  );
};

export default NavLink;
