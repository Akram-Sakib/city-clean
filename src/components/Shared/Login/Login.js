import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../Register/images/LogoMakr-1O38lS.png";
import loader from "../Register/images/loader.svg";
import google from "../Register/images/google.png";

const Login = () => {
  const { user, signInWithGoogle, authError, loginUser, loading } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogInData = { ...loginData };
    newLogInData[field] = value;
    setLoginData(newLogInData);
  };
  const loginForm = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, navigate);
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
      <div className=" mx-auto rounded-lg">
        <div className="flex justify-center   rounded-md">
          <div className="w-full rounded-md h-auto  xl:w-3/4 lg:w-full flex">
            <div className="w-full h-full hidden lg:block lg:w-8/12 bg-cover rounded-l-lg">
              <img
                className="h-full w-full rounded-l-md"
                src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5267.jpg"
                alt=""
              />
            </div>
            <div className="w-full my-auto lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center font-mono">
                Log in Here!
              </h3>
              {!loading && (
                <form
                  onSubmit={loginForm}
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                >
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      onBlur={handleOnBlur}
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Password
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                      onBlur={handleOnBlur}
                      type="password"
                      placeholder="Your Password"
                    />
                  </div>
                  {user?.email && (
                    <div className="flex justify-center">
                      <p className=" px-4 py-3 rounded text-green-600">
                        Successfully Logged in!
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
                      Login
                    </button>
                  </div>
                  <hr className="mb-2 border-t" />

                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-pink-500 align-baseline hover:text-pink-600"
                      to="/register"
                    >
                      New Here? Create an Account!
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

export default Login;
