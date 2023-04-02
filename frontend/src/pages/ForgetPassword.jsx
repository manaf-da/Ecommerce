import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const forgetPassword = () => {
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrumb title="Forget Password" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 drop-shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[#333333] sm:text-3xl">
              Forgot Password
            </h1>

            <form action="" className="mt-3 mb-0 space-y-4  p-8 shadow-2xl ">
              <p class="m-5 text-gray-500 text-center ">
                We will send you to reset your password in your email
              </p>
              <div>
                <div className="relative mt-3">
                  <input
                    type="email"
                    name="email"
                    className="w-full  border-gray-200 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center gap-10">
                <button
                  type="submit"
                  className=" rounded bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
                >
                  Submit
                </button>
                <Link to="/login">
                  <button className=" rounded bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default forgetPassword;
