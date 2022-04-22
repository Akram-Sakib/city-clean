import React from "react";
import customerLogo from "../../Shared/Register/images/heart.png";
import projectsLogo from "../../Shared/Register/images/briefing.png";
import establishedLogo from "../../Shared/Register/images/gift-box.png";
import countryReached from "../../Shared/Register/images/delivery-truck.png";

const Featured = () => {
  /* 
  
  
  https://image.freepik.com/free-photo/young-woman-sitting-cleaning-products_273609-41426.jpg*/
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:px-16 md:px-16 px-6 py-4 lg:py-8">
      <div className="my-auto mx-2">
        <div className="grid grid-cols-2 -mt-2">
          <div className="shadow  bg-gray-100  p-8 lg:p-12 md:p-12 mx-2">
            <img className="w-12 mx-auto" src={customerLogo} alt="" />
            <h2 className="text-pink-500 mt-2 text-center text-2xl font-bold">
              300+
            </h2>
            <h2 className="text-center">Happy customer</h2>
          </div>
          <div className="shadow bg-gray-100 p-8 lg:p-12 md:p-12 mx-2">
            <img className="w-12 mx-auto" src={projectsLogo} alt="" />
            <h2 className="text-pink-500 mt-2 text-center text-2xl font-bold">
              565+
            </h2>
            <h2 className="text-center">Project Complete</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5">
          <div className="shadow bg-gray-100 p-8 lg:p-12 md:p-12 mx-2">
            <img className="w-12 mx-auto" src={establishedLogo} alt="" />
            <h2 className="text-pink-500 mt-2 text-center text-2xl font-bold">
              210+
            </h2>
            <p className="text-center">Year Established</p>
          </div>
          <div className="shadow bg-gray-100 p-8 lg:p-12 md:p-12 mx-2">
            <img className="w-12 mx-auto" src={countryReached} alt="" />
            <h2 className="text-pink-500 mt-2 text-center text-2xl font-bold">
              156+
            </h2>
            <p className="text-center  ">Country Reached</p>
          </div>
        </div>
      </div>
      <div className="flex items-center h-full">
        <img
          className="rounded mt-16 lg:mt-0  h-auto mx-auto"
          src="https://image.freepik.com/free-psd/happy-man-showing-smartphone-digital-mock-up_23-2148712478.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Featured;
