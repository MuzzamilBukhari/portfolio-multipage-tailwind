import React from "react";
import { IconType } from "react-icons";

const SocialLink = ({
  link,
  icon: Icon,
  size = 26,
}: {
  link: string;
  icon: IconType;
  size?: number;
}) => {
  return (
    <a
      className="ml-3 text-gray-800 dark:text-gray-600 hover:text-light_secondary dark:hover:text-dark_secondary duration-300"
      href={link}
      target="_blank"
    >
      <Icon size={size} />
    </a>
  );
};

export default SocialLink;
