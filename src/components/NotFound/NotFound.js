import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className=" w-full lg:w-screen lg:h-screen h-screen images">
        <Link to="/">
          <button className="flex w-36 mt-8 mx-auto py-3 px-6 bg-pink-500 text-white rounded justify-center">
            Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
