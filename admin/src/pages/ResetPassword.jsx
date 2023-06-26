import CustomInputs from "../components/CustomInputs";

const ResetPassword = () => {
  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 drop-shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md">
            <form action="" className="mt-10 mb-0 space-y-4  p-8 shadow-2xl">
              <h1 className="text-left text-2xl font-semibold text-[#333333] sm:text-3xl">
                Reset Password
              </h1>

              <p className="mx-auto mt-4 max-w-md text-left text-gray-500">
                Enter your new password
              </p>
              <div className="relative mt-1">
                <CustomInputs
                  type="password"
                  id="id"
                  className="w-full  border-gray-100 p-3 text-sm shadow-md"
                  placeholder="Enter email"
                />
              </div>

              <div className="relative mt-1">
                <CustomInputs
                  type="password"
                  id="id"
                  className="w-full  border-gray-100 p-3  text-sm shadow-md"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex justify-center">
                <button className=" w-full bg-[#333333] px-6 font-semibold py-3 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                  Reset Password
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
