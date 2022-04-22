import React from "react";

const SingleHomeService = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div>
      <div className="flex justify-center text-center px-2 shadow-sm hover:shadow-lg rounded-lg py-4 mx-2">
        <div>
          <div className="flex justify-center my-4">
            <img className="w-16" src={img} alt="" />
          </div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-pink-600 font-semibold">${price}</p>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleHomeService;
