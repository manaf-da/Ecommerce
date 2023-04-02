import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <>
      <Meta title={"Products"} />
      <BreadCrumb title="Products" />

      <section>
        <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 bg-white drop-shadow-lg">
          <div className="mt-2 lg:mt-4 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-2 lg:block">
              <div>
                <div className="mt-1 space-y-4">
                  <div className="overflow-hidden rounded border border-gray-300 ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 cursor-pointer">
                      <span className="text-md font-semibold">
                        Product Categories
                      </span>
                    </div>
                    <div className="bg-white border-t border-gray-200 cursor-pointer">
                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <span className="text-sm font-medium text-gray-700">
                            Watches
                          </span>
                        </li>

                        <li>
                          <span className="text-sm font-medium text-gray-700">
                            Phones
                          </span>
                        </li>

                        <li>
                          <span className="text-sm font-medium text-gray-700">
                            Laptops
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-medium text-gray-700">
                            Speakers
                          </span>
                        </li>
                        <li>
                          <span className="text-sm font-medium text-gray-700">
                            Headphones
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="block text-md py-1 px-4  text-black font-semibold">
                    Filters
                  </p>
                  <div className="overflow-hidden rounded border border-gray-300 ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-md font-semibold">
                        Availability
                      </span>
                    </div>

                    <div className="bg-white border-t border-gray-200">
                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterInStock"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              In Stock (5+)
                            </span>
                          </label>
                        </li>
                        <li>
                          <label
                            htmlFor="FilterOutOfStock"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOutOfStock"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Out of Stock (10+)
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded border border-gray-300 ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-md font-semibold"> Price </span>
                    </div>
                    <div className="bg-white border-t border-gray-200">
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex justify-between gap-4">
                          <label
                            htmlFor="FilterPriceFrom"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceFrom"
                              placeholder="From"
                              className="w-full border-gray-200  shadow-sm sm:text-sm"
                            />
                          </label>

                          <label
                            htmlFor="FilterPriceTo"
                            className="flex items-center gap-2"
                          >
                            <span className="text-sm text-gray-600">$</span>

                            <input
                              type="number"
                              id="FilterPriceTo"
                              placeholder="To"
                              className="w-full border-gray-200  shadow-sm sm:text-sm"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded border border-gray-300  ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-md font-semibold"> Colors </span>
                    </div>
                    <div className="bg-white border-t border-gray-200">
                      <ul className="p-4 space-y-1 border-t border-gray-200 flex flex-wrap gap-4 w-50 ">
                        <li>
                          <p className="  bg-red-600 h-6 w-6 rounded-full text-md "></p>
                        </li>
                        <li>
                          <p className="  bg-black h-6 w-6 rounded-full text-md "></p>
                        </li>
                        <li>
                          <p className="  bg-yellow-500 h-6 w-6 rounded-full text-md "></p>
                        </li>
                        <li>
                          <p className="  bg-gray-600 h-6 w-6 rounded-full text-md "></p>
                        </li>
                        <li>
                          <p className="  bg-green-600 h-6 w-6 rounded-full text-md "></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded border border-gray-300 ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-md font-semibold"> Sizes </span>
                    </div>

                    <div className="bg-white border-t border-gray-200">
                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label
                            className="inline-flex items-center gap-2"
                            htmlFor="color1"
                          >
                            <input
                              type="checkbox"
                              id="color1"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              S (2)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="color2"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="color2"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              M (2)
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="color3"
                            className="inline-flex items-center gap-2 "
                          >
                            <input
                              type="checkbox"
                              id="color3"
                              className="w-5 h-5 border-gray-300 rounded "
                            />

                            <span className="text-sm font-medium text-gray-700">
                              L (1)
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded border border-gray-300 ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-md font-semibold">
                        {" "}
                        Product Tags
                      </span>
                    </div>

                    <div className="bg-white border-t border-gray-200">
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex flex-wrap justify-between gap-4">
                          <span className="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600">
                            Headphone
                          </span>
                          <span className="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600">
                            Laptop
                          </span>
                          <span className="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600">
                            Mobile
                          </span>
                          <span className="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600">
                            Powerbank
                          </span>
                          <span className="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600">
                            Speaker
                          </span>
                          <span className="whitespace-nowrap rounded-lg bg-gray-100 px-2.5 py-0.5 text-sm text-gray-600">
                            Earpiece
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded border border-gray-300 ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                      <span className="text-md font-semibold">
                        Random products
                      </span>
                    </div>
                    <div className="bg-white border-t border-gray-200">
                      <div className="p-4 border-t border-gray-200">
                        <div className="flex ">
                          <div className=" w-50">
                            <img
                              src="/src/assets/images/watch.jpg"
                              alt="image"
                              className="max-h-28 max-w-lg"
                            />
                          </div>
                          <div className=" w-50 ">
                            <h3 className="text-sm font-semibold text-gray-900">
                              Unisex watch
                            </h3>
                            <ReactStars
                              count={5}
                              size={20}
                              value={3}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="text-sm font-semibold text-gray-700">
                              $40.00
                            </p>
                          </div>
                        </div>
                        <div className="flex border-t border-gray-200 ">
                          <div className=" w-50">
                            <img
                              src="/src/assets/images/watch.jpg"
                              alt="image"
                              className="max-h-28 max-w-lg"
                            />
                          </div>
                          <div className=" w-50 p-2 items-center">
                            <h3 className="text-sm font-semibold text-gray-900">
                              Unisex watch
                            </h3>
                            <ReactStars
                              count={5}
                              size={20}
                              value={3}
                              edit={false}
                              activeColor="#ffd700"
                            />
                            <p className="text-sm font-semibold text-gray-700">
                              $40.00
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="max-w-screen-2xl  mx-auto drop-shadow-lg sm:px-10 sm:py-1 lg:px-8 ">
                <div className="flex items-center justify-between bg-white  p-5 mb-4 ">
                  <div className="flex  rounded  items-center">
                    <button className=" border border-gray-100  divide-gray-100 inline-flex items-center justify-center w-10 h-10 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
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
                          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                        />
                      </svg>
                    </button>
                    <button className=" border border-gray-100  divide-gray-100 inline-flex items-center justify-center w-10 h-10 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
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
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </button>
                    <button className="border border-gray-100  inline-flex items-center justify-center w-10 h-10 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
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
                          d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                      </svg>
                    </button>
                    <button className="border border-gray-100  inline-flex items-center justify-center w-10 h-10 text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
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
                          d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                        />
                      </svg>
                    </button>
                    <div>
                      <span className="whitespace-nowrap bg-gray-100 px-2.5 py-0.5 text-xs text-gray-400">
                        21 Products
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <label
                      htmlFor="SortBy"
                      className="block text-sm font-medium text-gray-700 px-1"
                    >
                      Sort By:
                    </label>
                    <select
                      id="SortBy"
                      className="h-10 w-36 text-sm border-gray-300 rounded p-1"
                      defaultValue="best-selling"
                    >
                      <option value="best-selling ">Best Selling</option>
                      <option value="title-desc">Title, Z - A</option>
                      <option value="title-asc">Title, A - Z</option>
                      <option value="price-desc">Price, High - Low </option>
                      <option value="price-asc">Price, Low - High</option>
                      <option value="date-desc">Date, New - Old </option>
                      <option value="date-asc">Date, Old - New</option>
                    </select>
                  </div>
                </div>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  <ProductCard />
                </li>
                <li>
                  <ProductCard />
                </li>
                <li>
                  <ProductCard />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
