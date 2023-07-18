import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import CustomInputs from "../Components/CustomInputs";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signInUser } from "./../features/user/userSlice";

const signInSchema = yup.object({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signInSchema,
    onSubmit: async (values) => {
      dispatch(signInUser(values));
    },
  });

  return (
    <>
      <Meta title={"Sign In"} />
      <BreadCrumb title="Sign In" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 drop-shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-[#333333] sm:text-3xl">
              Sign In
            </h1>

            <form
              action=""
              onSubmit={formik.handleSubmit}
              className="mt-10 mb-0 space-y-4  p-8 shadow-2xl"
            >
              <div className="relative mt-1">
                <CustomInputs
                  type="email"
                  name="email"
                  className="w-full  border-gray-100 p-3 text-sm shadow-md"
                  placeholder="Enter email"
                  onChange={formik.handleChange}
                  values={formik.values.email}
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
                  className="w-full  border-gray-100 p-3  text-sm shadow-md"
                  placeholder=" Password"
                  onChange={formik.handleChange}
                  values={formik.values.password}
                />
              </div>

              <div className="flex justify-center">
                <button className=" rounded bg-[#333333] px-6 font-semibold py-3 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                  Sign In
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 hover:text-red-500">
                No account?
                <Link className="underline " to="/register">
                  Sign up
                </Link>
              </p>
              <Link to="/forgetPassword">
                <p className="underline  text-sm text-center text-gray-500 hover:text-red-500">
                  Forget Password
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
