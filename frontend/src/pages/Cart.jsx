import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../assets/images/watch.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Meta title={" Cart"} />
      <BreadCrumb title="Cart" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-2 lg:px-6 bg-white drop-shadow-lg">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Your Cart
                </h1>
              </header>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <img
                      src={watch}
                      alt="product"
                      className="h-[100px] w-[200px] rounded object-cover object-center"
                    />

                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Basic Tee 6-Pack
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[15px] text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">S</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          defaultValue="1"
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-base text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </form>

                      <button className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <img
                      src={watch}
                      alt="product"
                      className="h-[100px] w-[200px] rounded object-cover object-center"
                    />

                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Basic Tee 6-Pack
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[15px] text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">S</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          defaultValue="1"
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-base text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </form>

                      <button className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <img
                      src={watch}
                      alt="product"
                      className="h-[100px] w-[200px] rounded object-cover object-center"
                    />

                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        Basic Tee 6-Pack
                      </h3>

                      <dl className="mt-0.5 space-y-px text-[15px] text-gray-600">
                        <div>
                          <dt className="inline">Size:</dt>
                          <dd className="inline">S</dd>
                        </div>

                        <div>
                          <dt className="inline">Color:</dt>
                          <dd className="inline">White</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="flex flex-1 items-center justify-end gap-2">
                      <form>
                        <input
                          type="number"
                          min="1"
                          defaultValue="1"
                          id="Line1Qty"
                          className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-base text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </form>

                      <button className="text-gray-600 transition hover:text-red-600">
                        <span className="sr-only">Remove item</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
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
                        <dt className="font-semibold">VAT</dt>
                        <dd className="font-bold">$5</dd>
                      </div>

                      <div className="flex justify-between">
                        <dt className="font-semibold">Discount</dt>
                        <dd className="font-bold">-$20</dd>
                      </div>

                      <div className="flex justify-between !text-base font-medium">
                        <dt className="font-semibold">Total</dt>
                        <dd className="font-bold">$46</dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="-ml-1 mr-1.5 h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                          />
                        </svg>

                        <p className="whitespace-nowrap text-xs">
                          2 Discounts Applied
                        </p>
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <Link to="/products">
                        <button className="rounded bg-gray-700 px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/checkout">
                        <button className=" rounded bg-[#E94B3CFF] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                          Checkout
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cart;
