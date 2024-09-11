import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navbar = ({ loggedIn, SetLoggedIn }) => {
  return (
    <div className="flex flex-col gap-5 sm:gap-0 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto sm:flex-row">
      <Link to="/">
        <img src={Logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <div className="text-richblack-5 hidden sm:flex">
        <ul className="flex gap-x-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 text-richblack-5 items-center">
        {!loggedIn && (
          <Link to="/login">
            <button className="py-[8px] bg-richblack-800 px-[12px] rounded-[8px] border border-[#343435] hover:text-richblack-900 hover:bg-slate-100 transition-all duration-200">
              Log In
            </button>
          </Link>
        )}
        {!loggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-[#343435]  hover:text-richblack-900 hover:bg-slate-100 transition-all duration-200">
              Sign Up
            </button>
          </Link>
        )}
        {loggedIn && (
          <Link to="/">
            <button
              onClick={() => {
                SetLoggedIn(false);
                toast.success("Logged Out!");
              }}
              className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-[#343435]  hover:text-slate-900 hover:bg-slate-100 transition-all duration-200"
            >
              Log Out
            </button>
          </Link>
        )}
        {loggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-[#343435]  hover:text-slate-900 hover:bg-slate-100 transition-all duration-200">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
