import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { FiTruck } from "react-icons/fi";
import { TfiRuler } from "react-icons/tfi";
import { RiHandHeartLine, RiFilePaper2Line } from "react-icons/ri";
import { BsShare } from "react-icons/bs";
import ProductCard from "../components/ProductCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { productSlides } from "../utility/Data";

const Product = () => {
  const [orderedProduct, SetOrderedProduct] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? productSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const lastSlide = currentIndex === productSlides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotSlides = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <Meta title={"Single Product"} />
      <BreadCrumb title="Single Product" />
      <div className="max-w-screen-2xl  py-8 mx-auto sm:px-6 sm:py-1 lg:px-8 bg-white drop-shadow-lg">
        <section>
          <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
              <div className="grid gap-2 lg:grid-cols-2 lg:items-start">
                <div className="  m-auto py-16 px-4 relative group">
                  <div
                    style={{
                      backgroundImage: `url(${productSlides[currentIndex].url})`,
                    }}
                    className="w-[600px]  h-[550px] rounded  bg-center  object-contain  duration-600"
                  ></div>
                  <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
                    <BsChevronLeft onClick={prev} size={30} />
                  </div>
                  <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
                    <BsChevronRight onClick={next} size={30} />
                  </div>
                  <div className="flex gap-2 top-2 justify-center py-2">
                    {productSlides.map((slide, slideIndex) => (
                      <div
                        key={slideIndex}
                        style={{
                          backgroundImage: `url(${slide.url})`,
                        }}
                        onClick={() => dotSlides(slideIndex)}
                        className="w-[145px]  h-[90px] rounded  bg-center bg-contain duration-600"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="sticky top-0">
                <div className="flex justify-between mt-8">
                  <div className="max-w-[35ch]">
                    <h1 className="text-2xl font-bold mb-2">
                      Watch for Unisex
                    </h1>
                    <span className="text-red-600 font-bold text-xl mt-2">
                      $40.00
                    </span>
                    <div className="mt-1 -ml-0.5 flex items-center">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <span>(reviews)</span>
                    </div>
                  </div>
                </div>

                <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="block">
                    <div>
                      <div className="prose max-w-none group-open:hidden ">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsa veniam dicta beatae eos ex error culpa
                          delectus rem tenetur, architecto quam nesciunt, dolor
                          veritatis nisi minus inventore, rerum at recusandae?
                        </p>
                      </div>

                      <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                        Read More
                      </span>
                    </div>
                  </summary>

                  <div className="pb-6 prose max-w-none">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsa veniam dicta beatae eos ex error culpa delectus rem
                      tenetur, architecto quam nesciunt, dolor veritatis nisi
                      minus inventore, rerum at recusandae?
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Placeat nam sapiente nobis ea veritatis error consequatur
                      nisi exercitationem iure laudantium culpa, animi
                      temporibus non! Maxime et quisquam amet. A, deserunt!
                    </p>
                  </div>
                </details>
                <fieldset>
                  <div className="relative p-2 flex flex-col gap-3 flex-start ">
                    <div>
                      <span className="  py-1  font-medium text-gray-700 mr-2">
                        Brand:
                      </span>
                      <span className="  font-medium text-gray-400  ">
                        Havells
                      </span>
                    </div>
                    <div>
                      <span className="  py-1  font-medium text-gray-700 mr-2">
                        Type:
                      </span>
                      <span className="  text-gray-400 ">Watch</span>
                    </div>
                    <div>
                      <span className="  py-1  font-medium text-gray-700 mr-2">
                        Categories:
                      </span>
                      <span className="   text-gray-400">Watches</span>
                      <span className="   text-gray-400 ml-2">
                        smartwatches
                      </span>
                      <span className="   text-gray-400 ml-2">smartphones</span>
                    </div>
                    <div>
                      <span className="  py-1  font-medium text-gray-700 mr-2">
                        Tags:
                      </span>
                      <span className=" font-normal text-gray-400 ">
                        watches
                      </span>
                      <span className=" font-normal ml-2 text-gray-400">
                        smartwatches
                      </span>
                      <span className=" font-normal ml-2 text-gray-400">
                        smartphones
                      </span>
                    </div>
                    <div>
                      <span className="  py-1  font-medium text-gray-700 mr-2">
                        SKU:
                      </span>
                      <span className="  text-gray-400">SKU027</span>
                    </div>
                    <div>
                      <span className="  py-1  font-medium text-gray-700 mr-2">
                        Availability:
                      </span>
                      <span className="  text-gray-400"> 20 In stocks</span>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="-m-0.5 flex flex-wrap gap-3 mt-4">
                  <legend className="mb-1 py-2 text-sm font-medium">
                    Color
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
                </fieldset>

                <form className="mt-4">
                  <fieldset className="mt-4">
                    <legend className="mb-1 text-sm font-medium">Size</legend>

                    <div className="flow-root">
                      <div className="-m-0.5 flex flex-wrap">
                        <label
                          htmlFor="size_xs"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="size"
                            id="size_xs"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border group peer-checked:bg-black peer-checked:text-white">
                            XS
                          </span>
                        </label>

                        <label
                          htmlFor="size_s"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="size"
                            id="size_s"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border  group peer-checked:bg-black peer-checked:text-white">
                            S
                          </span>
                        </label>

                        <label
                          htmlFor="size_m"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="size"
                            id="size_m"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border  group peer-checked:bg-black peer-checked:text-white">
                            M
                          </span>
                        </label>

                        <label
                          htmlFor="size_l"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="size"
                            id="size_l"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border  group peer-checked:bg-black peer-checked:text-white">
                            L
                          </span>
                        </label>

                        <label
                          htmlFor="size_xl"
                          className="cursor-pointer p-0.5"
                        >
                          <input
                            type="radio"
                            name="size"
                            id="size_xl"
                            className="sr-only peer"
                          />

                          <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border  group peer-checked:bg-black peer-checked:text-white">
                            XL
                          </span>
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <div className="flex mt-8 gap-10">
                    <div>
                      <label htmlFor="Quantity" className="sr-only">
                        Quantity
                      </label>

                      <div className="flex items-center  border border-gray-200 divide-x divide-gray-200 rounded">
                        <button
                          type="button"
                          className="w-10 h-10 leading-10 p-2 text-gray-600 transition hover:opacity-75"
                        >
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
                              d="M18 12H6"
                            />
                          </svg>
                        </button>

                        <span>
                          <input
                            type="number"
                            id="Quantity"
                            defaultValue="1"
                            className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                          />
                        </span>

                        <button
                          type="button"
                          className="w-10 h-10 p-2 leading-10 text-gray-600 transition hover:opacity-75 "
                        >
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
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <button className=" rounded bg-[#f2aa4c] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                      Add to cart
                    </button>
                    <button className=" rounded bg-[#E94B3CFF] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                      Buy Now
                    </button>
                  </div>
                  <div className="flex gap-8  mt-4 text-gray-400">
                    <div className="flex items-center gap-2">
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
                          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                      </svg>
                      <span className="text-base">Add to compare</span>
                    </div>
                    <div className="flex items-center gap-2">
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
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                      <span className="text-base"> Add to wishList</span>
                    </div>
                  </div>
                </form>

                <div className="space-y-1 mt-10">
                  <details
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex items-center justify-between   text-gray-900 transition cursor-pointer">
                      <div className="flex gap-2">
                        <FiTruck className="text-base" />

                        <h3 className="font-semibold text-sm">
                          Shipping & Returns
                        </h3>
                      </div>
                      <span className="transition group-open:-rotate-180 ml-">
                        <svg
                          className="ml-1.5 h-3 w-3 flex-shrink-0 transition duration-300 group-open:-rotate-120"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white border-t border-gray-200">
                      <p className="px-4 mt-4 text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </div>
                  </details>
                  <details
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex items-center justify-between   text-gray-900 transition cursor-pointer">
                      <div className="flex gap-2">
                        <RiFilePaper2Line className="text-base" />
                        <h3 className="font-semibold text-sm">Materials</h3>
                      </div>
                      <span className="transition group-open:-rotate-180 ml-">
                        <svg
                          className="ml-1.5 h-3 w-3 flex-shrink-0 transition duration-300 group-open:-rotate-120"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white border-t border-gray-200">
                      <p className="px-4 mt-4 text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </div>
                  </details>
                  <details
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex items-center justify-between   text-gray-900 transition cursor-pointer">
                      <div className="flex gap-2">
                        <TfiRuler className="text-base" />
                        <h3 className="font-semibold text-sm">Dimensions</h3>
                      </div>
                      <span className="transition group-open:-rotate-180 ml-">
                        <svg
                          className="ml-1.5 h-3 w-3 flex-shrink-0 transition duration-300 group-open:-rotate-120"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white border-t border-gray-200">
                      <p className="px-4 mt-4 text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </div>
                  </details>
                  <details
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex items-center justify-between   text-gray-900 transition cursor-pointer">
                      <div className="flex gap-2">
                        <RiHandHeartLine className="text-base" />
                        <h3 className="font-semibold text-sm">
                          Care & Instructions
                        </h3>
                      </div>
                      <span className="transition group-open:-rotate-180 ml-">
                        <svg
                          className="ml-1.5 h-3 w-3 flex-shrink-0 transition duration-300 group-open:-rotate-120"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white border-t border-gray-200">
                      <p className="px-4 mt-4 text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </div>
                  </details>
                  <details
                    className="group [&_summary::-webkit-details-marker]:hidden"
                    open
                  >
                    <summary className="flex items-center justify-between   text-gray-900 transition cursor-pointer">
                      <div className="flex gap-2">
                        <BsShare className="text-base" />
                        <h3 className="font-semibold text-sm">Share</h3>
                      </div>
                      <span className="transition group-open:-rotate-180 ml-">
                        <svg
                          className="ml-1.5 h-3 w-3 flex-shrink-0 transition duration-300 group-open:-rotate-120"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>

                    <div className="bg-white border-t  border-gray-200">
                      <p className="px-4 mt-4 text-sm leading-relaxed text-gray-700">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ab hic veritatis molestias culpa in, recusandae
                        laboriosam neque aliquid libero nesciunt voluptate dicta
                        quo officiis explicabo consequuntur distinctio corporis
                        earum similique!
                      </p>
                    </div>
                  </details>
                </div>
                <fieldset className="bg-white mt-6 border p-4 border-gray-200 drop-shadow-lg">
                  <div className="flex flex-col justify-center items-center">
                    <h3 className="mb-2 font-semibold"> Payments Methods</h3>
                    <img
                      alt="payments"
                      src="https://i.ibb.co/Qfvn4z6/payment.png"
                      className="  object-contain"
                    />
                  </div>
                </fieldset>
              </div>
            </div>

            <div className=" border-1 mt-8 drop-shadow-lg border-gray-100 bg-white p-4 items-center">
              <h2 className="text-2xl font-semibold mb-1">Description</h2>
              <p className="text-sm text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maxime, fugiat aperiam? Accusantium quam dignissimos nisi? Alias
                omnis itaque similique tempore earum. Nam facere tempore quo.
                Aperiam aspernatur nobis suscipit tenetur.
              </p>
            </div>
            <section className=" border-1 mt-8 drop-shadow-lg border-gray-100 bg-white p-4 items-center">
              <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold sm:text-2xl">
                  Customer Reviews
                </h2>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex">
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500 capitalize  ">
                    Based on 4 reviews
                  </p>
                </div>
                {orderedProduct && (
                  <div>
                    <p className="mt-1 text-sm text-gray-500 underline">
                      Write a review
                    </p>
                    <form
                      action=""
                      className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl"
                    >
                      <div>
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium"
                        >
                          Name
                        </label>

                        <div className="relative mt-1">
                          <input
                            type="text"
                            name="firstName"
                            className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                            placeholder="Enter First Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="title" className="text-sm font-medium">
                          Title
                        </label>

                        <div className="relative mt-1">
                          <input
                            type="text"
                            name="firstName"
                            className="w-full border-gray-200 p-2 pr-12 text-sm shadow-sm"
                            placeholder="Enter First Name"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="rating" className="text-sm font-medium">
                          Rating
                        </label>
                        <div className="relative mt-1">
                          <ReactStars
                            count={5}
                            size={20}
                            value={4}
                            edit={true}
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="comments"
                          className="text-sm font-medium"
                        >
                          Comments
                        </label>
                        <textarea
                          className="w-full border-gray-300 p-3 text-sm  relative mt-1"
                          placeholder="Comments"
                          rows="4"
                          id="comments"
                        ></textarea>
                      </div>
                      <div className="flex text-end">
                        <button className=" rounded bg-[#E94B3CFF] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-1">
                  <blockquote>
                    <header className="sm:flex sm:items-center sm:gap-4">
                      <div className="flex">
                        <ReactStars
                          count={5}
                          size={20}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>

                      <p className="mt-2 font-semibold sm:mt-0">
                        The best thing money can buy!
                      </p>
                    </header>

                    <p className="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer className="mt-4">
                      <p className="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>

                  <blockquote>
                    <header className="sm:flex sm:items-center sm:gap-4">
                      <div className="flex">
                        <ReactStars
                          count={5}
                          size={20}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>

                      <p className="mt-2 font-semibold sm:mt-0">Affordable!</p>
                    </header>

                    <p className="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer className="mt-4">
                      <p className="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>

                  <blockquote>
                    <header className="sm:flex sm:items-center sm:gap-4">
                      <div className="flex">
                        <ReactStars
                          count={5}
                          size={20}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>

                      <p className="mt-2 font-semibold sm:mt-0">
                        The Product is Great
                      </p>
                    </header>

                    <p className="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer className="mt-4">
                      <p className="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>

                  <blockquote>
                    <header className="sm:flex sm:items-center sm:gap-4">
                      <div className="flex">
                        <ReactStars
                          count={5}
                          size={20}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>

                      <p className="mt-2 font-semibold sm:mt-0">Good!</p>
                    </header>

                    <p className="mt-2 text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam possimus fuga dolor rerum dicta, ipsum laboriosam
                      est totam iusto alias incidunt cum tempore aliquid aliquam
                      error quisquam ipsam asperiores! Iste?
                    </p>

                    <footer className="mt-4">
                      <p className="text-xs text-gray-500">
                        John Doe - 12th January, 2024
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>

            <fieldset className="mt-6">
              <h1 className="text-2xl font-semibold">Our Popular Products</h1>
              <div className=" border-1 mt-2 drop-shadow-lg border-gray-100  items-center flex gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </fieldset>
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
