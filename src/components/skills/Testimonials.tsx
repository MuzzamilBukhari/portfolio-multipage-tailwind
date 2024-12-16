import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

const TestimonialsBanner = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Ali Raza",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium iure aperiam dolorem nostrum harum velit ipsa! Id accusantium ea eos dicta labore!",
      image: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Umer Kamal",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium iure aperiam dolorem nostrum harum velit ipsa! Id accusantium ea eos dicta labore!",
      image: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Usman Qadir",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium iure aperiam dolorem nostrum harum velit ipsa! Id accusantium ea eos dicta labore!",
      image: "https://picsum.photos/103/103",
    },
  ];

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
      <div className="w-full p-4">
        <Slider {...settings}>
          {testimonialsData?.map((testimonial) => (
            <div key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsBanner;
