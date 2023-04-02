import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="max-w-screen-2xl px-4 mb-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg bg-white">
        <div class="flex flex-col h-screen bg-white">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt=""
            class="object-cover w-full h-64"
          />

          <div class="flex items-center justify-center flex-1">
            <div class="max-w-xl px-4 py-8 mx-auto text-center">
              <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We can't find that page.
              </h1>

              <p class="mt-4 text-gray-500">
                Try searching again, or return home to start from the beginning.
              </p>

              <Link to="/">
                <button className="rounded mt-4 bg-gray-700 px-6 font-semibold py-2 text-sm   text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
                  Go Back Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
