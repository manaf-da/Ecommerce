import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />

      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
            <div className="hidden space-y-4 lg:block">
              <div className="mt-1 space-y-2">
                <div className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                  <div className="flex items-center justify-between gap-2 p-4 text-gray-900 transition cursor-pointer">
                    <span className="text-md font-semibold">
                      Products Categories
                    </span>
                  </div>
                  <div className="bg-white border-t border-gray-200">
                    <ul className="p-4 space-y-1 border-t border-gray-200">
                      <li>
                        <span className="text-sm font-medium text-gray-700">
                          Watches
                        </span>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-700">
                          Televisions
                        </span>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-700">
                          Camera
                        </span>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-700">
                          Laptop
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
              </div>
            </div>

            <div className="lg:col-span-3">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <li>
                  <BlogCard />
                </li>
                <li>
                  <BlogCard />
                </li>
                <li>
                  <BlogCard />
                </li>
                <li>
                  <BlogCard />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
