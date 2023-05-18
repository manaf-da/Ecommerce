import CustomInputs from "../components/CustomInputs";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 drop-shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <form action="" className="mt-10 mb-0 space-y-4  p-8 shadow-2xl">
              <h1 className="text-left text-2xl font-semibold text-[#333333] sm:text-3xl">
                Sign In
              </h1>

              <p className="mx-auto mt-4 max-w-md text-left text-gray-500">
                Login with your account to continue
              </p>
              <div className="relative mt-1">
                <label
                  htmlFor="email"
                  className="block text-sm mb-3 font-medium text-gray-700"
                >
                  Email
                </label>
                <CustomInputs
                  type="email"
                  name="email"
                  className="w-full  border-gray-100 p-2 text-sm shadow-md"
                  placeholder="Enter email"
                />
              </div>

              <div className="relative mt-1">
                <label
                  htmlFor="email"
                  className="block text-sm mb-3 font-medium text-gray-700"
                >
                  Password
                </label>
                <CustomInputs
                  type="password"
                  name="password"
                  className="w-full  border-gray-100 p-2  text-sm shadow-md"
                  placeholder=" Password"
                />
              </div>
              <div className="mb-3 text-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#425FED] underline font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="flex justify-center">
                <Link
                  to="/admin"
                  className=" w-full bg-[#333333] px-6 font-semibold py-2 text-sm text-center   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
