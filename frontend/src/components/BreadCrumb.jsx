import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title }) => {
  return (
    <section
      aria-label="Breadcrumb"
      className="flex justify-center items-center max-w-screen-2xl   mx-auto sm:px-6 sm:py-8 lg:px-8 drop-shadow-lg bg-white mb-4 h-10"
    >
      <ol
        role="list"
        className="flex overflow-hidden  border border-gray-200 text-gray-600"
      >
        <li className="flex items-center">
          <Link
            to="/"
            className="flex h-10 items-center bg-gray-100 px-4 transition hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>

            <span className="ml-1.5 text-xs font-medium"> Home </span>
          </Link>
        </li>

        <li className="relative flex items-center">
          <span className="absolute inset-y-0 -left-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)]"></span>

          <p className="flex h-10 items-center bg-white pl-8 pr-4 text-xs font-medium transition hover:text-gray-900">
            {title}
          </p>
        </li>
      </ol>
    </section>
  );
};

export default BreadCrumb;
