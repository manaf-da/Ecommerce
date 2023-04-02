import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg ">
        <div className="relative w-80 block overflow-hidden group">
          <button className="absolute right-4 top-4 z-10 border-b border-2 bg-transparent p-1.5 text-gray-900  ">
            <span className="sr-only">close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <img
            src="/src/assets/images/watch.jpg"
            alt=""
            className="object-cover w-full h-30 transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative p-2 bg-white  flex flex-col gap-3 flex-start  items-center border-t ">
            <h3 className=" text-xl font-medium text-gray-900">
              Havells Watch
            </h3>
            <span className=" text-lg text-gray-700">$40.00</span>
            <div>
              <span className="  py-1  font-semibold text-gray-700 mr-2">
                Brand:{" "}
              </span>
              <span className="  font-normal  ">Havells</span>
            </div>
            <div>
              <span className="  py-1  font-semibold text-gray-700 mr-2">
                Type:{" "}
              </span>
              <span className=" font-normal ">Watch</span>
            </div>
            <div>
              <span className="  py-1  font-semibold text-gray-700 mr-2">
                Availability:
              </span>
              <span className=" font-light">In stock</span>
            </div>

            <div className=" flex  flex-wrap gap-3 items-center ">
              <legend className="mb-1  py-2 text-sm font-semibold">
                Color:
              </legend>

              <div>
                <input
                  type="radio"
                  name="ColorOption"
                  value="ColorBlack"
                  id="ColorBlack"
                  className="peer hidden"
                  defaultChecked
                />

                <label
                  htmlFor="ColorBlack"
                  className="block h-6 w-6 cursor-pointer rounded-full bg-black shadow-sm peer-checked:ring-2 peer-checked:ring-black peer-checked:ring-offset-2"
                >
                  <span className="sr-only"> Texas Tea </span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="ColorOption"
                  value="ColorRed"
                  id="ColorRed"
                  className="peer hidden"
                />

                <label
                  htmlFor="ColorRed"
                  className="block h-6 w-6 cursor-pointer rounded-full bg-red-500 shadow-sm peer-checked:ring-2 peer-checked:ring-red-500 peer-checked:ring-offset-2"
                >
                  <span className="sr-only">Fiesta Red</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="ColorOption"
                  value="ColorBlue"
                  id="ColorBlue"
                  className="peer hidden"
                />

                <label
                  htmlFor="ColorBlue"
                  className="block h-6 w-6 cursor-pointer rounded-full bg-blue-500 shadow-sm peer-checked:ring-2 peer-checked:ring-blue-500 peer-checked:ring-offset-2"
                >
                  <span className="sr-only">Cobalt Blue</span>
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="ColorOption"
                  value="ColorGold"
                  id="ColorGold"
                  className="peer hidden"
                />

                <label
                  htmlFor="ColorGold"
                  className="block h-6 w-6 cursor-pointer rounded-full bg-amber-500 shadow-sm peer-checked:ring-2 peer-checked:ring-amber-500 peer-checked:ring-offset-2"
                >
                  <span className="sr-only">Goldtop</span>
                </label>
              </div>
            </div>
            <div>
              <span className="  py-1  font-semibold text-gray-700">
                Size:{" "}
              </span>
              <span className=" font-light ">S </span>
              <span className=" font-light  ">M </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProducts;
