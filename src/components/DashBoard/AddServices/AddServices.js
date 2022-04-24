import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import useAuth from "../../../hooks/useAuth";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    // send to the server
    fetch(`https://city-clean.herokuapp.com/services`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
        }
      });
    reset();
  };
  return (
    <div className="h-screen my-auto">
      <h2 className="text-xl font-bold ml-8 mt-6">Add Your Services</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex justify-center  lg:justify-start px-0 lg:px-8 md:px-4"
      >
        <div className="w-10/12 lg:w-6/12 md:8/12">
          <div className="mt-8  flex">
            <input
              className="border w-3/6  m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
              type="text"
              {...register("name")}
              placeholder="Name"
            />
            <input
              className="border w-3/6 m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
              type="number"
              {...register("price")}
              placeholder="Enter Price"
            />
          </div>

          <input
            type="text"
            {...register("img")}
            placeholder="Img url"
            className="w-full border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none "
          />
          <textarea
            rows="10"
            {...register("description")}
            placeholder="Description"
            className="border w-full  m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none flex justify-start"
          ></textarea>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Add Service"
              className=" w-full md:w-auto lg:w-auto cursor-pointer bg-pink-500 hover:bg-pink-600 py-2 mt-4 text-gray-50 px-6 rounded-lg text-base"
            />
          </div>
          {success && (
            <div>
              <p className="text-green-600 text-center mt-4">
                Your Service was added successfully!
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddServices;
