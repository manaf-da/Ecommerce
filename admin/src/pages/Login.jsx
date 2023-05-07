import React from "react";
import CustomInputs from "../components/CustomInputs";

const Login = () => {
  return (
    <div className="bg-[#EEC643] py-5   ">
      <div className=" bg-white ">
        <form action="">
          <CustomInputs
            type="email"
            id="email"
            className=" w- 30 border-gray-100 p-2 text-sm shadow-md"
            placeholder="Enter email"
          />
          <CustomInputs
            type="password"
            id="email"
            className="  border-gray-100 p-2 text-sm shadow-md"
            placeholder="Enter Password"
          />
          <button className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            Download
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
