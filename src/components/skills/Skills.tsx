"use client";
import React from "react";
import { FaHtml5, FaJava, FaPython, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { CgVercel } from "react-icons/cg";
import Slider from "react-slick";

export default function Skills() {
  const languages = [
    {
      id: 1,
      name: "HTML",
      icon: FaHtml5,
    },
    {
      id: 2,
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      id: 3,
      name: "Javascript",
      icon: DiJavascript,
    },
    {
      id: 4,
      name: "Typescript",
      icon: SiTypescript,
    },
    {
      id: 5,
      name: "Python",
      icon: FaPython,
    },
    {
      id: 6,
      name: "Java",
      icon: FaJava,
    },
    {
      id: 7,
      name: "C++",
      icon: TbBrandCpp,
    },
  ];

  // const platform = [
  //   {
  //     id: 1,
  //     name: "Github",
  //     icon: FaGithub,
  //   },
  //   {
  //     id: 2,
  //     name: "Vercel",
  //     icon: CgVercel,
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
  return (
    <section className="flex justify-center items-center flex-col gap-16 px-6 py-10 sm:px-12 bg-white text-black dark:bg-gray-900 dark:text-white ">
      <div className="block mx-auto">
        <h1>Hello</h1>
      </div>
      <div className="w-full p-4">
        <Slider {...settings}>
          {languages?.map((testimonial) => (
            <div key={testimonial.id}></div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
