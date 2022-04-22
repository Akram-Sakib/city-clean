import React from "react";

const MyOrder = ({ order, handleDeleteUser }) => {
  const { img, serviceName, price, description } = order.info;
  const { status, _id } = order;
  return (
    <div className=" m-4 flex justify-center text-center px-6 md:px-2 lg:px-2 shadow-lg  rounded-lg py-4 mx-6 lg:mx-2 md:mx-2 bg-pink-100 bg-opacity-30">
      <div>
        <div className="flex justify-between items-center px-4 my-4">
          <div className="bg-pink-300 rounded-full w-24 h-24 flex justify-center items-center">
            <img className="w-16" src={img} alt="" />
          </div>
          <div className="flex flex-col justify-end">
            {status ? (
              <p className="bg-green-100 text-green-500 rounded-md py-2 text-sm px-4">
                {status}
              </p>
            ) : (
              <p className="bg-pink-200 text-pink-500 rounded-md py-2 text-sm px-4">
                pending
              </p>
            )}
            <button
              onClick={() => handleDeleteUser(_id)}
              className="bg-red-500 my-2 text-white rounded-md py-2 text-sm px-4"
            >
              Delete
            </button>
          </div>
        </div>
        <h2 className="text-lg font-bold">{serviceName}</h2>
        <p className="text-pink-600 font-semibold">${price}</p>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default MyOrder;
