import React from "react";
// import useAuth from "../../../../hooks/useAuth";

const ManageAllOrderes = ({
  order,
  handleDeleteUser,
  handleUpdate,
  updateSuccess,
}) => {
  const { img, serviceName, price } = order.info;
  const { _id, name, email } = order;
  // const { user } = useAuth();
  return (
    /* m-6 flex justify-center text-center px-6 md:px-2 lg:px-2 shadow-lg  rounded-lg py-4 mx-6 lg:mx-2 md:mx-2 */
    <div className="px-2 rounded-md py-4 m-2 md:m-1 lg:m-2 bg-pink-200  ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {/* <div className="text-center text-sm py-6 mx-6 px-4 rounded text-pink-400 bg-pink-100">
         
        </div> */}

        <div className="flex  items-center justify-center  px-2 my-2 mr-4 md:mr-0">
          <div className="bg-pink-300 rounded-full w-24 h-24 flex justify-center items-center">
            <img className="w-16 md:w-12" src={img} alt="" />
          </div>
          <div className="ml-4">
            <h2 className="text-md font-bold">{serviceName}</h2>
            <p className="text-pink-600 font-semibold">${price}</p>
          </div>
        </div>
        <div className="flex flex-col ml-4 justify-center items-center lg:items-start md:items-start my-2 lg:my-0 md:my-0">
          <div className="bg-pink-600 text-sm  text-gray-200 py-2 px-3 rounded-full mb-2">
            <p>ordered from</p>
          </div>
          <div className="bg-pink-200 text-gray-700 text-center lg:text-left md:text-left text-sm w-full">
            {" "}
            <p>Order From: {name}</p>
            <p>User Email: {email}</p>
          </div>
        </div>

        <div className="flex flex-col justify-end mx-4 my-2">
          {!updateSuccess ? (
            <button
              onClick={() => handleUpdate(_id)}
              className="bg-pink-100 text-green-600 w-full md:w-2/4 lg:w-2/4 ml-auto rounded-md my-1 py-2 text-sm px-4"
            >
              update
            </button>
          ) : (
            <p className="bg-pink-100 text-center text-green-600 w-full md:w-2/4 lg:w-2/4 ml-auto rounded-md my-1 py-2 text-sm px-4">
              shipped
            </p>
          )}
          <button
            onClick={() => handleDeleteUser(_id)}
            className="bg-red-500 text-white my-1 w-full md:w-2/4 lg:w-2/4 ml-auto rounded-md py-2 text-sm px-4"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrderes;
