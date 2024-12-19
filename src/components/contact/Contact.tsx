"use client";
import React, { useState } from "react";
import { Button, Input } from "..";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_99t306t",
        "template_iojnbh5",
        formData,
        "73YB3ttjRcQpM-3_2"
      )
      .then(() => setMessage("Email sent successfully..."))
      .catch(() => setMessage("Email not send!"));
  };

  return (
    <section className="text-dark_bg2 dark:text-light_bg1 bg-teal-100/40 dark:bg-dark_bg1 opacity-[0.99] body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1
            className="sm:text-7xl text-6xl font-bold title-font mb-1 "
            data-aos="fade-down"
          >
            Contact{" "}
            <span className="text-light_primary dark:text-dark_primary">
              Us
            </span>
          </h1>
          <p
            className="lg:w-2/3 mx-auto text-light_primary dark:text-dark_primary leading-relaxed text-base"
            data-aos="fade-up"
          >
            Please fill this form if you have any queries or a message.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap"
            data-aos="zoom-up"
            data-aos-duration="2000"
          >
            <div className="p-2 w-full space-y-3">
              <div className="relative">
                <Input
                  label="Name"
                  type={"text"}
                  placeholder={"Enter your full name"}
                  name={"name"}
                  value={formData.name}
                  onchange={handleChange}
                />
              </div>
              <div className="relative">
                <Input
                  label="Email"
                  type={"text"}
                  placeholder={"Enter your full name"}
                  name={"email"}
                  value={formData.email}
                  onchange={handleChange}
                />
              </div>
            </div>
            <div className="p-2 w-full space-y-3">
              <div className="relative">
                <label htmlFor="message" className="leading-7 text-sm ">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-light_primary dark:bg-dark_primary bg-opacity-10 dark:bg-opacity-10 rounded border border-light_primary/60 hover:border-dark_primary/60 focus:border-light_primary dark:focus:border-dark_primary focus:bg-transparent focus:ring-2 focus:ring-light_primary/40 dark:focus:ring-dark_primary/40 text-base outline-none text-dark_bg2 dark:text-light_bg1 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full flex justify-center items-center">
              <p>{message}</p>
              <Button type="submit" className="">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
