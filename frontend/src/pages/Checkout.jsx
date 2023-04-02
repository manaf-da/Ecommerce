import React from "react";
import watch from "../assets/images/watch.jpg";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg ">
        <h1 className="text-xl text-center font-bold text-gray-900 sm:text-3xl">
          Your Cart
        </h1>
        <div>
          <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
            <div className="bg-white py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <div className="mb-4">
                  <div aria-label="Breadcrumb">
                    <ol
                      role="list"
                      className="flex items-center gap-1 text-base text-gray-500"
                    >
                      <li>
                        <span className="block transition hover:text-gray-700">
                          <Link to="/cart">Cart</Link>
                        </span>
                      </li>

                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </li>

                      <li>
                        <span className="block transition hover:text-gray-700">
                          Details
                        </span>
                      </li>

                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="block transition hover:text-gray-700"
                        >
                          Shipping{" "}
                        </a>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block transition hover:text-gray-700"
                        >
                          Payment
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <h1 className="text-xl font-semibold ">
                    Contact Information
                  </h1>
                  <p className="text-sm">Manaf Adam(mana1601@outlook.com)</p>
                </div>
                <form className="flex flex-wrap gap-4 ">
                  <div>
                    <select
                      name="country"
                      className="w-[450px] text-sm p-1 border  border-grey-400"
                    >
                      <option defaultValue selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex gap-2 ">
                    <input
                      type="text"
                      name="firstName"
                      className="w-full border-gray-200 p-2 pr-12 text-sm shadow-md"
                      placeholder=" First name"
                    />
                    <input
                      type="text"
                      name="last name"
                      className="w-full border-gray-200 p-2 pr-12 text-sm shadow-md"
                      placeholder=" Last name"
                    />
                  </div>
                  <div className="flex flex-col w-[470px] gap-4">
                    <input
                      type="password"
                      name="address"
                      className=" border-gray-200 p-2  text-sm shadow-md"
                      placeholder=" Address"
                    />
                    <input
                      type="text"
                      name="apartment"
                      className="  border-gray-200 p-2  text-sm shadow-md"
                      placeholder="Apartment, suite, etc."
                    />
                  </div>
                  <div className="flex gap-2 mb-4">
                    <input
                      type="password"
                      name="password"
                      className="  border-gray-200 p-2 grow text-sm shadow-md"
                      placeholder="City"
                    />

                    <select
                      name="state"
                      className="w-[170px]  border border-grey-400 text-sm"
                    >
                      <option defaultValue selected disabled>
                        State
                      </option>
                    </select>

                    <input
                      type="password"
                      name="password"
                      className="w-full  border-gray-200 p-2 grow text-sm shadow-md"
                      placeholder="Zip Code"
                    />
                  </div>
                </form>
                <div className="flex justify-between align-middle py-4 mt-4 ">
                  <Link to="/cart">
                    <button className=" flex gap-2 items-center transition hover:scale-110  hover:shadow-lg  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                      <span className="text-base">Return to cart</span>
                    </button>
                  </Link>
                  <Link to="/products">
                    <button className="rounded bg-gray-700 px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                <a href="#" className="flex items-center grow ">
                  <h1 className=" text-4xl font-bold mb-4 ">M.Shop</h1>
                </a>

                <div>
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-500 bg-white drop-shadow-lg">
                      <li className="flex  relative items-center gap-4 py-2">
                        <img
                          src={watch}
                          alt=""
                          className="h-[100px] w-[100px] rounded object-cover object-center"
                        />
                        <div className="flex text-white absolute -top-5 right-0 justify-center items-center w-6 h-6 text-sm font-bold text-whites bg-[#E94B3CFF] rounded-full ">
                          1
                        </div>

                        <div>
                          <h3 className="text-sm text-gray-900">
                            Basic Tee 6-Pack
                          </h3>

                          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                            <div>
                              <dt className="inline">Size:</dt>
                              <dd className="inline">XS</dd>
                            </div>

                            <div>
                              <dt className="inline">Color:</dt>
                              <dd className="inline">White</dd>
                            </div>
                          </dl>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                      <div className="w-screen max-w-2xl space-y-4">
                        <dl className="space-y-0.5 text-base text-gray-700 ">
                          <div className="flex justify-between">
                            <dt className="font-semibold">Subtotal</dt>
                            <dd className="font-bold">$40</dd>
                          </div>

                          <div className="flex justify-between">
                            <dt className="font-semibold">Shipping</dt>
                            <dd className="font-bold">$6</dd>
                          </div>

                          <div className="flex justify-between !text-base font-medium">
                            <dt className="font-semibold">Total</dt>
                            <dd className="font-bold">$46</dd>
                          </div>
                        </dl>

                        <div className="flex justify-between">
                          <button className=" rounded bg-[#E94B3CFF] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
