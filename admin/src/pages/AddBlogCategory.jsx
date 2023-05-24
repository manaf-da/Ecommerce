import React from "react";
import CustomInputs from "../components/CustomInputs";

const AddBlogCategory = () => {
  return (
    <div>
      <h2 className=" font-semibold text-4xl text-center mb-10 ">
        Add Blog Category
      </h2>
      <div>
        <form action="" className="mt-4 mb-0 space-y-4  p-8 shadow-2xl">
          <div className="relative mt-1">
            <CustomInputs
              type="email"
              name="email"
              className="w-full  border-gray-100 p-4 text-sm shadow-md"
              placeholder="Enter Blog Category"
            />
          </div>

          <button
            type="submit"
            className=" rounded-sm my-5  bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
          >
            Add Blog Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlogCategory;
