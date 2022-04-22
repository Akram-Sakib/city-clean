import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";

const ServicesModal = ({ open, setOpen, setBookingSuccess, allService }) => {
  const { name, price, img, description } = allService;
  const { user, token } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // collect data
    data.info = {
      serviceName: name,
      price: price,
      img: img,
      description: description,
    };

    // send to the server
    fetch(`http://localhost:5000/servicesOrder`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          setOpen(false);
        }
      });
    reset();
  };

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all lg:my-24 md:my-24 sm:align-middle lg:w-7/12 sm:w-10/12 w-full my-2 md:w-10/12 py-4">
                <h2 className="text-center py-4 text-2xl font-bold text-pink-500">
                  You are about to Book this service
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
                  <div className="flex justify-center p-4">
                    <div className="flex flex-col items-center">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <div className="h-6 w-6 " aria-hidden="true">
                          <img src={img} alt="" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-bold mt-1">{name}</p>
                      </div>
                      <div>
                        <p className="text-pink-500 text-bold">${price}</p>
                      </div>
                      <div className="text-center">
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full">
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-full mx-4 lg:mx-12"
                    >
                      <input
                        {...register("name")}
                        type="text"
                        defaultValue={user.displayName}
                        placeholder="name"
                        className="border p-2 focus:outline-none focus:border-pink-400 w-full"
                      />
                      <br />
                      <input
                        {...register("email")}
                        type="email"
                        defaultValue={user.email}
                        placeholder="Email"
                        className="border mt-2 p-2 focus:outline-none focus:border-pink-400 w-full"
                      />
                      <br />
                      <input
                        {...register("phone")}
                        type="text"
                        placeholder="Phone"
                        className="border mt-2 p-2 focus:outline-none focus:border-pink-400 w-full"
                      />
                      <br />
                      <textarea
                        {...register("address")}
                        type="text"
                        placeholder="Address"
                        className="border  mt-2 justify-start px-2 h-20 focus:outline-none focus:border-pink-400 w-full"
                      />
                      <div className="flex justify-end my-1 lg:my-4">
                        <button
                          type="submit"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:mt-0   sm:w-auto sm:text-sm mr-2"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <input
                          type="submit"
                          value="Book Now"
                          className="cursor-pointer w-full mt-3 lg:mt-0 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-pink-500 text-base font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500  sm:w-auto sm:text-sm"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default ServicesModal;
