import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    // send to the server
    fetch(`http://localhost:5000/testimonials`, {
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
    <div className="h-screen">
      <h2 className="text-xl font-bold text-center lg:text-left pl-8 pt-6">
        Adding reviews
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex justify-center lg:justify-start px-0 lg:px-8 md:px-4"
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
              type="text"
              {...register("degisnation")}
              placeholder="Naming (Ex-CEO)"
            />
          </div>
          <div className="flex ">
            <input
              type="text"
              {...register("img")}
              placeholder="Img url"
              className=" w-3/6  border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none "
            />
            <input
              type="number"
              {...register("rating", { min: 1, max: 5 })}
              placeholder="Rating (1-5)"
              className=" w-3/6  border m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
            />
          </div>
          <textarea
            rows="10"
            {...register("description")}
            placeholder="Description"
            className="border w-full  m-1 text-sm py-2 px-4 focus:ring-sky-500 focus:border-sky-500 focus:outline-none flex justify-start"
          ></textarea>
          <div className="flex justify-center">
            {success ? (
              <button
                type="submit"
                disabled
                className=" w-full md:w-auto lg:w-auto  bg-pink-400  py-2 mt-4 text-gray-50 px-6 rounded-lg text-base"
              >
                Submit Review
              </button>
            ) : (
              <input
                type="submit"
                value="Submit Review"
                className=" w-full md:w-auto lg:w-auto cursor-pointer bg-pink-500 hover:bg-pink-600 py-2 mt-4 text-gray-50 px-6 rounded-lg text-base"
              />
            )}
          </div>
          {success && (
            <div>
              <p className="text-green-600 text-center mt-4">
                Your Review was successfully updated!
              </p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddReview;
