import React from "react";

const Contact = () => {
  return (
    <section className="text-white bg-bg1 opacity-[0.99] body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-7xl text-6xl font-bold title-font mb-4 ">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto text-primary leading-relaxed text-base">
            Ham aapke liye hamesha haazir hain lekin Koi kaam ka sawal ho to
            message karen shukriya.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="email" className="leading-7 text-sm ">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-orange-100 bg-opacity-50 rounded border border-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                  className="w-full bg-orange-100 bg-opacity-50 rounded border border-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-orange-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-secondary border-0 py-2 px-8 focus:outline-none hover:scale-105 duration-300 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
