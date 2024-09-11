import React from "react";
import LogInform from "./LogInform";
import SignUpform from "./SignUpform";
import frame from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formtype, SetLoggedIn }) => {
  return (
    <div className="w-11/12 max-w-[1160px] flex flex-col mx-auto gap-x-12 py-4 sm:py-12 gap-y-20 sm:gap-y-0 justify-center items-center sm:flex-row">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] text-center sm:text-left">
          {title}
        </h1>
        <div className="flex flex-col">
          <span className="text-[1.125rem] leading-[1.625rem] mt-4 text-richblack-5">
          <p className="text-center sm:text-left">{desc1}</p> 
          </span>
          <span className="text-blue-100 italic ">
          <p className="text-center sm:text-left">
          {desc2}
          </p></span>
        </div>

        {formtype === "signup" ? (
          <SignUpform SetLoggedIn={SetLoggedIn} />
        ) : (
          <LogInform SetLoggedIn={SetLoggedIn} />
        )}

        <div className="flex flex-row w-full items-center my-4 gap-x-2">
          <div className="h-[1px] bg-richblack-700  w-full"></div>
          <p className="text-richblack-700 font-medium leading-[1.175rem]">OR</p>
          <div className="h-[1px] bg-richblack-700 w-full"></div>
        </div>

        <button className="flex items-center w-full rounded-[8px] font-medium text-slate-100
         border-slate-100 border px-[12px] py-[8px] gap-x-2 mt-6 justify-center  hover:bg-richblack-5 hover:text-richblack-900 transition-all duratiom-200">
          <FcGoogle />
          Sign up with google
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px] mx-auto ">
        <img
          src={frame}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        <img
          src={image}
          alt="students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
