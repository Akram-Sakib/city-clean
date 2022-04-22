import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testomonials.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

import SingleTestomonial from "./SingleTestomonial/SingleTestomonial";

// install Swiper modules
SwiperCore.use([Pagination]);

const Testomonials = () => {
  const [testomonials, setTestomonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestomonials(data));
  }, []);

  return (
    <div className="pt-8 pb-24 sm:mx-16 mx-12 lg:mx-24 ">
      <h2 className="text-center pb-8 text-4xl font-bold text-gray-700">
        Testomonials
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {testomonials.map((testomonial) => (
          <SwiperSlide key={testomonial._id} className="shadow-md  my-2 py-4">
            <SingleTestomonial testomonial={testomonial}></SingleTestomonial>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testomonials;
