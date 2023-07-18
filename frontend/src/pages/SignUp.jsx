import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import CustomInputs from "../Components/CustomInputs";
import Meta from "../components/Meta";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { createUser } from "./../features/user/userSlice";

const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  mobile: yup.string().required("Mobile is required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastname: "",
      mobile: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      dispatch(createUser(values));
    },
  });

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 drop-shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[#333333] sm:text-3xl">
              Create Account
            </h1>
            <form
              onSubmit={formik.handleSubmit}
              className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
            >
              <div className="relative mt-1">
                <CustomInputs
                  type="text"
                  name="firstName"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter First Name..."
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-600 text-xs mt-2">
                    {formik.errors.firstName}
                  </div>
                )}
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="text"
                  name="lastname"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Last Name..."
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <div className="text-red-600 text-xs mt-2">
                    {formik.errors.lastname}
                  </div>
                )}
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="tel"
                  name="mobile"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Mobile Number..."
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                />
                {formik.touched.mobile && formik.errors.mobile && (
                  <div className="text-red-600 text-xs mt-2">
                    {formik.errors.mobile}
                  </div>
                )}
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="email"
                  name="email"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Email..."
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-600 text-xs mt-2">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="password"
                  name="password"
                  className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                  placeholder="Enter Password..."
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-600 text-xs mt-2">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded bg-[#333333] px-6 font-semibold py-2 text-sm text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
                >
                  Register
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
