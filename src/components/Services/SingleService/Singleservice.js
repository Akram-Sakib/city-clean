import React, { useRef, useState } from "react";
import ServicesModal from "../ServicesModal/ServicesModal";

const Singleservice = ({ allService, setBookingSuccess }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const { name, price, img, description } = allService;

  return (
    <div>
      <div className="flex justify-center text-center px-2 shadow hover:shadow-lg rounded-lg py-4 m-2">
        <div>
          <div className="flex justify-center my-4">
            <img className="w-16" src={img} alt="" />
          </div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-pink-600 font-semibold">${price}</p>
          <p className="text-gray-600">{description}</p>

          <button
            onClick={() => setOpen(true)}
            className=" py-2 bg-pink-600 text-white px-4 rounded-lg mt-4"
          >
            book now
          </button>
        </div>
      </div>
      <ServicesModal
        setBookingSuccess={setBookingSuccess}
        open={open}
        setOpen={setOpen}
        cancelButtonRef={cancelButtonRef}
        allService={allService}
      ></ServicesModal>
    </div>
  );
};

export default Singleservice;
