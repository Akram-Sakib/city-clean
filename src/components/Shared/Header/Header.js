import React from "react";
import "./Header.css";
import logo from "../Register/images/LogoMakr-1O38lS.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="">
      <div className="logo">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>
      </div>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <ul className="lg:flex items-center">
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/browseServices">Book Services</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {user?.email && (
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>
        )}
        {user?.email ? (
          <li className="bg-pink-500 rounded-md py-2 px-5 login">
            <button onClick={logOut} className="text-white">
              LogOut
            </button>
          </li>
        ) : (
          <li className="bg-pink-500 rounded-md py-2 px-2 login">
            <Link className="text-white" to="/login">
              LogIn
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
