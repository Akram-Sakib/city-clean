import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import logo from "../Shared/Register/images/LogoMakr-1O38lS.png";
import menuicon from "../Shared/Register/images/menu (2).png";
import useAuth from "../../hooks/useAuth";

import { Outlet } from "react-router-dom";

const Dashboard = () => {
  // let { path, url } = useRouteMatch();
  const { logOut, admin } = useAuth();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  return (
    <>
      <div className="bg-pink-300 h-full">
        <div>
          {/* Mobile */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 flex z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="ml-auto relative max-w-xs w-full h-full bg-pink-200 shadow-xl  pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 flex items-center justify-between">
                    <Link to="/">
                      {" "}
                      <img src={logo} className="w-32 m-6 ml-6" alt="" />
                    </Link>
                    <button
                      type="button"
                      className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4 ">
                    {/* mobile */}
                    <ul className="space-y-4  font-medium text-gray-900 px-2 py-3">
                      <li>
                        {" "}
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/myorders`}
                        >
                          My orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/addreview`}
                        >
                          Add Review
                        </Link>
                      </li>
                      {
                        <li>
                          <Link
                            className="text-gray-700 text-base hover:text-gray-900"
                            to={`/dashboard/addservices`}
                          >
                            Add Services
                          </Link>
                        </li>
                      }
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/manageorders`}
                        >
                          Manage Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-gray-700 text-base hover:text-gray-900"
                          to={`/dashboard/manageservices`}
                        >
                          Manage Services
                        </Link>
                      </li>

                      <button
                        onClick={logOut}
                        className="text-gray-800 absolute bottom-6 left-8 "
                      >
                        Logout
                      </button>
                    </ul>
                  </form>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>

          <main className="max-w-7xl  mx-6 lg:mx-0   ">
            <div className="relative z-10 flex items-baseline justify-end pt-8 lg:pt-0 ">
              <div className="flex items-center">
                <button
                  type="button"
                  className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Mobile Menu</span>
                  <img
                    src={menuicon}
                    alt="menu"
                    className="w-7 h-7"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <section
              aria-labelledby="products-heading"
              className="pt-6 lg:pt-0  "
            >
              <div className="grid grid-cols-1 lg:grid-cols-4  gap-y-10">
                {/* Filters */}
                <form className="hidden w-72 min-h-screen lg:block bg-pink-400 pt-6 ">
                  {/* large device */}
                  <Link to="/">
                    {" "}
                    <img src={logo} className="w-32 m-6 mt-2 ml-6" alt="" />
                  </Link>

                  <ul className=" space-y-4  pb-6 ml-4 ">
                    <li>
                      {" "}
                      <Link
                        className="text-gray-100 text-base hover:text-white"
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </li>
                    {!admin && (
                      <div className="space-y-4">
                        <li>
                          <Link
                            className="text-gray-100 text-base hover:text-white"
                            to={`/dashboard/myorders`}
                          >
                            My orders
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="text-gray-100 text-base hover:text-white"
                            to={`/dashboard/addreview`}
                          >
                            Add Review
                          </Link>
                        </li>
                      </div>
                    )}

                    {admin && (
                      <div className="space-y-4">
                        <li>
                          <Link
                            className="text-gray-100 text-base hover:text-white"
                            to={`/dashboard/manageorders`}
                          >
                            Manage Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-gray-100 text-base hover:text-white"
                            to={`/dashboard/makeAdmin`}
                          >
                            Make an Admin
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-gray-100 text-base hover:text-white"
                            to={`/dashboard/addservices`}
                          >
                            Add Services
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="text-gray-100 text-base hover:text-white"
                            to={`/dashboard/manageservices`}
                          >
                            Manage Services
                          </Link>
                        </li>
                      </div>
                    )}
                    <button onClick={logOut} className="ml-5 text-white">
                      Logout
                    </button>
                  </ul>
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3  lg:rounded-none rounded-xl  bg-pink-300">
                  {/* Replace with your content */}
                  <Outlet></Outlet>

                  {/* /End replace */}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
