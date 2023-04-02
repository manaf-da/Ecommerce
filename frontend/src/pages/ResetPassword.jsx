import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 drop-shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[#333333] sm:text-3xl">
              Reset Password
            </h1>

            <form action="" className="mt-6 mb-0 space-y-4  p-8 shadow-2xl">
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Password
                </label>

                <div className="relative mt-1">
                  <input
                    type="password"
                    name="password"
                    className="w-full  border-gray-200 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter Password"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-sm font-medium">
                  Confirm Password
                </label>

                <div class="relative mt-1">
                  <input
                    type="password"
                    name="password"
                    className="w-full  border-gray-200 p-2 pr-12 text-sm shadow-sm"
                    placeholder="Enter Confirm Password"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button className=" rounded bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
