"use client";
import React, { useState } from "react";
import { Input } from "..";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
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
      .then((response) => setMessage("Email sent successfully..."))
      .catch((err) => setMessage("Email not send!"));
  };

  return (
    <section className="text-white bg-bg1 opacity-[0.99] body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-7xl text-6xl font-bold title-font mb-4 ">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="lg:w-2/3 mx-auto text-primary leading-relaxed text-base">
            Ham aapke liye hamesha haazir hain lekin Koi kaam ka sawal ho to
            message karen shukriya.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <Input
                  label="Name"
                  type={"text"}
                  placeholder={"Enter your full name"}
                  htmlFor={"name"}
                  value={formData.name}
                  onchange={handleChange}
                />
              </div>
              <div className="relative">
                <Input
                  label="Name"
                  type={"text"}
                  placeholder={"Enter your full name"}
                  htmlFor={"name"}
                  value={formData.name}
                  onchange={handleChange}
                />
              </div>
            </div>
            <div className="p-2 w-full">
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
                  className="w-full bg-purple-50 bg-opacity-50 rounded border border-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <p>{message}</p>
              <button
                type="submit"
                className="flex mx-auto text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:scale-105 duration-300 rounded text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
