import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const SignUpform = ({ SetloggedIn }) => {
  const [showPass1, SetshowPass1] = useState(false);
  const [showPass2, SetshowPass2] = useState(false);
  const [accountType, SetaccountType] = useState("Student");

  const [formData, SetformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    SetformData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    if (formData.Password != formData.confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      navigate("/login");
      toast.success("Account Created!");
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex text-richblack-5 bg-richblack-800 p-1 gap-x-1 my-6 rounded-full justify-evenly w-full sm:w-[70%]">
        <button
          onClick={() => {
            SetaccountType("Student");
          }}
          className={`${accountType==="Student" ? "bg-richblack-900 text-white" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          onClick={() => {
            SetaccountType("Instructor");
          }}
          className={`${accountType==="Instructor" ? "bg-richblack-900 text-white" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-2 sm:gap-4">
        <div className="flex w-full gap-x-3 flex-col sm:flex-row">
          <label className="text-[0.875rem] text-richblack-5 leading-[1.375rem] sm:w-1/2">
            <p className="mb-1 ml-2">
              First Name <sup className="text-pink-400">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter your First Name"
              name="firstName"
              onChange={changeHandler}
              value={FormData.firstName}
              className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 p-[12px] w-full mb-1 sm:md-0"
            />
          </label>

          <label className="text-[0.875rem] text-richblack-5 leading-[1.375rem] sm:w-1/2">
            <p className="mb-1 ml-2">
              Last Name <sup className="text-pink-400">*</sup>
            </p>
            <input
              type="text"
              placeholder="Enter your Last Name"
              name="lastName"
              onChange={changeHandler}
              value={FormData.lastName}
              className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 p-[12px] w-full"
            />
          </label>
        </div>

        <div>
          <label className="text-[0.875rem] text-richblack-5 leading-[1.375rem] ">
            <p className="mb-1 ml-2">
              Email <sup className="text-pink-400">*</sup>
            </p>
            <input
              type="email"
              placeholder="Enter email Address"
              required
              value={formData.email}
              onChange={changeHandler}
              name="email"
              className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 p-[12px] w-full"
            />
          </label>
        </div>

        <div className="flex flex-col gap-x-3 w-full gap-2 sm:flex-row">
          <label className="text-[0.875rem] text-richblack-5 leading-[1.375rem] relative sm:w-1/2">
            <p className="mb-1 ml-2 text-nowrap">
              Create Password <sup className="text-pink-400">*</sup>
            </p>
            <input
              type={showPass1 ? "text" : "password"}
              placeholder="Enter password"
              required
              value={formData.Password}
              onChange={changeHandler}
              name="Password"
              className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 p-[12px] w-full"
            />
            <span
              className="absolute right-3 top-[37px] hover:cursor-pointer"
              onClick={() => {
                SetshowPass1((prev) => !prev);
              }}
            >
              {showPass1 ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiFillEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="text-[0.875rem] text-richblack-5 leading-[1.375rem] relative sm:w-1/2">
            <p className="mb-1 ml-2 text-nowrap">
              Confirm Password <sup className="text-pink-400">*</sup>
            </p>
            <input
              type={showPass2 ? "text" : "password"}
              placeholder="Enter password"
              required
              value={formData.confirmPassword}
              onChange={changeHandler}
              name="confirmPassword"
              className="rounded-[0.5rem] bg-richblack-800 text-richblack-5 p-[12px] w-full"
            />
            <span
              className="absolute right-3 top-[37px] hover:cursor-pointer"
              onClick={() => {
                SetshowPass2((prev) => !prev);
              }}
            >
              {showPass2 ? (
                <AiFillEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiFillEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <div className="mt-3">
          <button className="text-richblack-900 bg-yellow-50 rounded-[8px] font-medium w-full px-[12px] py-[8px]">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpform;
