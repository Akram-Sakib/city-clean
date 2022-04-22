import React from "react";
import "./contact.css";

const Contact = () => {
  const formSubmit = (e) => {
    e.preventDefault();
    alert("message successfully sent!");
  };
  return (
    <div
      id="contact"
      className="py-12 bg-pink-50 text-center text-2xl font-bold"
    >
      <h2 className="text-gray-700">
        Contact us for your,
        <br /> project <span className="text-pink-600">personally</span>
      </h2>
      <form onSubmit={formSubmit} className=" flex justify-center ">
        <div className="w-10/12 lg:w-6/12 md:8/12">
          <div className="mt-8  flex">
            <input
              required
              className="border w-3/6  m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
              type="text"
              name="firstName"
              placeholder="FirstName"
            />
            <input
              required
              className="border w-3/6 m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
              type="text"
              name="lastName"
              placeholder="LastName"
            />
          </div>
          <div className="flex ">
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className=" w-3/6  border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none "
            />
            <input
              required
              type="text"
              name="Number"
              placeholder="Phone"
              className=" w-3/6  border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <textarea
            name="message"
            required
            rows="10"
            placeholder="Message"
            className="border w-full  m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none flex justify-start"
          ></textarea>
          <input
            type="submit"
            value="Send Message"
            className="border w-full md:w-auto lg:w-auto cursor-pointer bg-pink-500 hover:bg-pink-600 py-2 mt-4 text-gray-50 px-6 rounded-lg text-base"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
