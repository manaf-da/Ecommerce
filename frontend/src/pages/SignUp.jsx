import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import CustomInputs from "../Components/CustomInputs";
import Meta from "../components/Meta";

const SignUp = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 drop-shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[#333333]  sm:text-3xl">
              Create Account
            </h1>
            <form
              action=""
              className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
            >
              <div className="relative mt-1">
                <CustomInputs
                  type="text"
                  name="firstName"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter First Name"
                />
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="text"
                  name="lastName"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Last Name"
                />
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="tel"
                  name="mobile"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Mobile Number"
                />
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="email"
                  name="email"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Email"
                />
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="password"
                  name="password"
                  className="w-full  border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Password"
                />
              </div>

              <div className="flex justify-center">
                <button className=" rounded bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
