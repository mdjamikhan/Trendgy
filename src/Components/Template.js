import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Template({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLogedin,
  accountLoged,
}) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-0">
      <div className="w-11/12 max-w[450px]">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{desc1}</span>
          <br />
          <span className=" text-blue-100 italic">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLogedin={setIsLogedin} />
        ) : (
          <LoginForm setIsLogedin={setIsLogedin} accountLoged={accountLoged} />
        )}
        <div className="flex w-full  items-center flex-row">
          <div className=" w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">
            OR
          </p>
          <div className=" w-full h-[1px] bg-richblack-700"></div>
        </div>
        <div className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google Sign-Up Success:", credentialResponse);
              toast.success("Signed up with Google!");
              setIsLogedin(true);
              navigate("/Dashboard");
            }}
            onError={() => {
              console.log("Google Sign-Up Failed");
              toast.error("Google Sign-Up Failed");
            }}
          />
        </div>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={frameImage}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="students"
          width={558}
          height={490}
          loading="lazy"
          className=" absolute -top-4 right-4"
        />
      </div>
    </div>
  );
}
export default Template;
