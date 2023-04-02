import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Meta title={" Single Blog"} />
      <BreadCrumb title="Single Blog" />
      <section>
        <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-2 lg:px-6 bg-white drop-shadow-lg">
          <div className="mt-1 lg:mt-4 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-2 lg:block ">
              <div>
                <div className="mt-1 space-y-4">
                  <div className="overflow-hidden rounded border border-gray-300 ">
                    <div className="flex items-center justify-between gap-2 p-4 text-gray-900 cursor-pointer">
                      <span className="text-md font-semibold"> Shop Menu</span>
                    </div>
                    <div className="bg-white border-t border-gray-200 cursor-pointer">
                      <ul className="p-4 space-y-1 border-t border-gray-200 flex flex-col">
                        <Link to="/">
                          <span className="text-sm font-medium text-gray-700">
                            Home
                          </span>
                        </Link>
                        <Link to="/products">
                          <span className="text-sm font-medium text-gray-700">
                            Products
                          </span>
                        </Link>
                        <Link to="/blogs">
                          <span className="text-sm font-medium text-gray-700">
                            Blogs
                          </span>
                        </Link>
                        <Link to="/contact">
                          <span className="text-sm font-medium text-gray-700">
                            Contact
                          </span>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="max-w-screen-2xl  mx-auto drop-shadow-lg sm:px-2 sm:py-2 lg:px-2 ">
                <div className="overflow-hidden  w-[1100px] drop-shadow-lg ">
                  <img
                    alt="Office"
                    src="/src/assets/images/blog-1.jpg"
                    className=" h-[500px] w-full object-cover object-center"
                  />

                  <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
                    <time
                      dateTime="2022-10-10"
                      className="block text-xs text-gray-500 dark:text-gray-400"
                    >
                      10th Oct 2022
                    </time>

                    <a href="#">
                      <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                        New Tech
                      </h3>
                    </a>
                    <p className="mt-2 text-sm text-justify leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae dolores, possimus pariatur animi temporibus
                      nesciunt praesentium dolore sed nulla ipsum eveniet
                      corporis quidem, mollitia itaque
                    </p>
                  </div>

                  <div className="max-w-screen-2xl  mx-auto drop-shadow-lg sm:px-2 sm:py-2 lg:px-2 ">
                    <div className=" bg-white p-2 shadow-lg lg:col-span-3 lg:p-10">
                      <h5 className="mb-3 text-2xl font-medium capitalize">
                        Message
                      </h5>
                      <form action="" className="space-y-2">
                        <div>
                          <label className="sr-only" htmlFor="name">
                            Name
                          </label>
                          <input
                            className="w-full  border-gray-200 p-2 text-sm"
                            placeholder="Name"
                            type="text"
                            id="name"
                          />
                        </div>
                        <div>
                          <div>
                            <label className="sr-only" htmlFor="email">
                              Email
                            </label>
                            <input
                              className="w-full  border-gray-200 p-2 text-sm"
                              placeholder="Email address"
                              type="email"
                              id="email"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="sr-only" htmlFor="message">
                            Message
                          </label>
                          <textarea
                            className="w-full  border-gray-200 p-3 text-sm"
                            placeholder="Message"
                            rows="4"
                            id="message"
                          ></textarea>
                        </div>
                        <div className="flex justify-center items-center gap-10">
                          <button
                            type="submit"
                            className=" rounded bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
                          >
                            Submit
                          </button>
                          <Link to="/blogs">
                            <button className=" rounded bg-[#333333] px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                              Back
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
