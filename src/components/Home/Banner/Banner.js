import React from "react";

const Banner = () => {
  return (
    <div className="bg-pink-50 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 px-8 py-20">
      <div className="pt-4 lg:pt-12 md:pt-6 px-4">
        <h4 className="uppercase text-blue-400 my-2">We are puresh</h4>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-gray-700 my-3">
          Professional Cleaning
        </h2>
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-gray-700 ">
          For Your Home Services
        </h2>
        <p className="py-4">
          Over 30 Years Experience Serving the DMV Metro Area. Office |
          Hotel|Retail | Restaurant. Eco Friendly Products. Make Your Floors
          Look Like New With The Experts At Eco Interior. Free Floor
          Demonstrations.!
        </p>
        <div className="mt-4">
          <a
            href="#services"
            className="bg-pink-600 rounded-lg py-3 px-6 text-white"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {/* https://image.freepik.com/free-photo/smiling-slavic-cleaner-man-with-rubber-gloves-holding-bucket-sponge_141793-125574.jpg 

        import also banner

https://image.freepik.com/free-photo/cheerful-dark-skinned-husband-wears-panama-head-poses-from-inside-washing-maching-feels-positive-does-laundry-has-busy-day-overloaded-with-multicolored-dirty-clothes_273609-51763.jpg
        
        */}
        <img
          className="rounded-lg -mb-8 mt-12 lg:mt-0 "
          src="https://image.freepik.com/free-photo/smiling-slavic-cleaner-man-with-rubber-gloves-holding-bucket-sponge_141793-125574.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
