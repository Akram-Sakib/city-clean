import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashBoardHome = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen  lg:min-h-screen ">
      <div className="pt-8 text-4xl text-center font-bold text-pink-600 ">
        <h2 className="pb-2">Welcome to DashBoard</h2>
        <button className="text-pink-600 bg-pink-200 rounded-md py-2 px-4 font-normal text-base">
          Your Profile
        </button>
        <div className="mt-4 bg-pink-100 rounded-md py-6  w-80 mx-auto text-pink-500 text-base font-normal">
          <p>Name:{user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
        <div className=" flex h-10/12 justify-center">
          <img
            className="h-full rounded-lg w-full lg:w-7/12 lg:-mt-20 -mt-8"
            src="https://i.ibb.co/T09r0Zd/site-stats-concept-illustration-114360-1509-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
