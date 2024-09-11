import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LogInform = ({ SetLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, SetformData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    SetformData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    SetLoggedIn((prev) => !prev);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  const [showPass, SetshowPass] = useState(false);
  return (
    <div className="flex flex-col gap-y-4 w-full mt-6">
      <form onSubmit={submitHandler}>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-1"
          >
            Email Address <sup className="text-pink-400">*</sup>
          </label>
          <br />
          <input
            type="email"
            placeholder="Enter Email Address"
            required
            value={formData.email}
            onChange={changeHandler}
            name="email"
            className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 p-[12px] w-full"
          />
        </div>

        <div className="space-y-2 mt-2 relative w-full">
          <label
            htmlFor="password"
            className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] ml-1"
          >
            Password <sup className="text-pink-400">*</sup>
          </label>
          <br />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter password"
            required
            value={formData.password}
            onChange={changeHandler}
            name="password"
            className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 p-[12px] w-full"
          />
          <span
            className="absolute right-3 top-[37px] hover:cursor-pointer"
            onClick={() => {
              SetshowPass((prev) => !prev);
            }}
          >
            {showPass ? (
              <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiFillEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="#">
            <p className="text-xs mt-1 text-blue-100 absolute right-0">Forgot Password</p>
          </Link>
        </div>

        <div>
          <button className="text-richblack-900 bg-yellow-50 rounded-[8px] font-medium w-full px-[12px] py-[8px] mt-12">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default LogInform;
