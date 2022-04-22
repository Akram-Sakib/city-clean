import React from "react";

const ManageAllServices = ({ manageService, handleDeleteUser }) => {
  const { name, price, img, description, _id } = manageService;
  return (
    <div className="bg-pink-200 flex justify-center text-center px-4 shadow hover:shadow-lg rounded-lg py-2  m-2">
      <div>
        <div className="flex justify-center my-4">
          <img className="w-16" src={img} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-pink-600 font-semibold">${price}</p>
        </div>
        <p className="text-gray-600 text-left mt-2 text-sm">{description}</p>

        <button
          onClick={() => handleDeleteUser(_id)}
          className=" py-2 bg-red-500 text-white px-4 rounded-lg mt-4"
        >
          Delete Service
        </button>
      </div>
    </div>
  );
};

export default ManageAllServices;
