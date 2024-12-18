import React from "react";
import Slider from "react-slick";
import { FaHtml5, FaCss3Alt, FaPython, FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const languages = [
    { id: 1, name: "HTML", icon: FaHtml5 },
    { id: 2, name: "CSS", icon: FaCss3Alt },
    { id: 3, name: "JavaScript", icon: DiJavascript },
    { id: 4, name: "TypeScript", icon: SiTypescript },
    { id: 5, name: "Python", icon: FaPython },
    { id: 6, name: "Java", icon: FaJava },
    { id: 7, name: "C++", icon: TbBrandCpp },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <div className="slider-container">hello</div>;
}
