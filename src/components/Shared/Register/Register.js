import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "../Register/images/LogoMakr-1O38lS.png";
import useAuth from "../../../hooks/useAuth";
import loader from "../Register/images/loader.svg";
import google from "../Register/images/google.png";

const Register = () => {
  const { user, signInWithGoogle, authError, registerUser, loading } =
    useAuth();
  const [registrationData, setRegistrationData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...registrationData };
    newLogInData[field] = value;
    setRegistrationData(newLogInData);
  };
  const RegisterForm = (e) => {
    e.preventDefault();
    registerUser(
      registrationData.email,
      registrationData.password,
      registrationData.name,
      location,
      navigate
    );
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };
  return (
    <div className=" pt-6 register-bg">
      <div className="flex justify-center">
        <Link to="/">
          <img className=" w-48" src={logo} alt="" />
        </Link>
      </div>
      <div className="mx-auto rounded-lg">
        <div className="flex justify-center  rounded-md">
          <div className="w-full rounded-md h-auto  xl:w-3/4 lg:w-full flex">
            <div className="w-full h-full hidden lg:block lg:w-8/12 bg-cover rounded-l-lg">
              <img
                className="rounded-l-md"
                src="https://image.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg"
                alt=""
              />
            </div>

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center font-mono">
                Create an Account!
              </h3>
              {!loading && (
                <form
                  onSubmit={RegisterForm}
                  className="px-8 pt-6 pb-2 mb-4 bg-white rounded"
                >
                  <div className="mb-4 ">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlhtmlfor="Name"
                      >
                        Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="Name"
                        required
                        name="name"
                        onBlur={handleOnBlur}
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlhtmlfor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      required
                      onBlur={handleOnBlur}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlhtmlfor="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        required
                        name="password"
                        onBlur={handleOnBlur}
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        htmlhtmlfor="c_password"
                      >
                        Confirm Password
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        required
                        name="confirmPassword"
                        onBlur={handleOnBlur}
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  {user?.email && (
                    <div className="flex justify-center">
                      <p className=" px-4 py-3 rounded text-green-600">
                        Successfully created an user!
                      </p>
                    </div>
                  )}
                  {authError && (
                    <div className="flex justify-center">
                      <p className=" px-4 py-3 rounded text-red-600">
                        {authError}
                      </p>
                    </div>
                  )}
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-pink-500 rounded-full hover:bg-pink-600 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-2 border-t" />

                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-pink-500 align-baseline hover:text-pink-600"
                      to="/login"
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                  <div>
                    <p className="text-center mt-4 text-gray-600">
                      or sign in with{" "}
                    </p>
                    <button
                      onClick={handleGoogleSignIn}
                      className="bg-gray-100 flex justify-center items-center py-2 px-6 w-full mt-2 rounded-full"
                    >
                      <img className="w-8 h-8" src={google} alt="" />
                      <h2 className="text-gray-600">Google</h2>
                    </button>
                  </div>
                </form>
              )}
              {loading && (
                <div className="w-12 mt-4 mx-auto">
                  <img src={loader} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
