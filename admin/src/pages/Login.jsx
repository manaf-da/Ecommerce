import React from "react";

const Login = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form
          action=""
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          {" "}
          <h1 className="text-center text-2xl font-bold   text-[#141414] sm:text-3xl">
            Get started today
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Login with your account to continue
          </p>
          <div>
            <label for="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full  border-gray-200 p-2 pe-12 text-sm   "
                placeholder="Enter email"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full  border-gray-200 p-2 pe-12 text-sm shadow-sm "
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="flex "></div>
          <button
            type="submit"
            className="block w-full   bg-[#141414] p-2 text-sm font-medium text-white"
          >
            Sign in
          </button>
          <p className="text-center text-sm text-gray-500">
            No account?
            <a className="underline" href="">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
