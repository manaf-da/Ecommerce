import React, { useState } from "react";
import CustomInputs from "./CustomInputs";
import { BiSearch } from "react-icons/bi";
import { AiFillBell } from "react-icons/ai";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header aria-label="Page Header">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <div className="relative hidden sm:block">
            <label className="sr-only" htmlFor="search">
              Search
            </label>

            <CustomInputs
              type="text"
              id="search"
              className="w-full  border-gray-100 pe-4 text-sm shadow-sm sm:w-56"
              placeholder="Search..."
            />

            <button
              type="button"
              className="absolute end-0 top-1/2 -translate-y-1/2  bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <BiSearch className="text-xl" />
            </button>
          </div>

          <div className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
            <div className="flex gap-4">
              <span className="block relative shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                <span className="sr-only">Notifications</span>

                <AiFillBell className="text-xl relative" />
                <div className="flex absolute -top-2 -right-1 justify-center items-center w-6 h-6 text-sm font-bold text-white bg-[#ffbd00] rounded-full ">
                  1
                </div>
              </span>
            </div>

            <div className="group flex items-center relative">
              <button
                type="button"
                className="group flex items-center rounded-lg transition focus:outline-none"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Menu</span>
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="h-10 w-10 rounded-full object-cover"
                />

                <p className="ms-2 hidden text-left text-sm sm:block">
                  <strong className="block font-medium">Adam</strong>
                  <span className="text-gray-500"> adam@gmail.com</span>
                </p>
              </button>
              {dropdownOpen && (
                <div className="absolute -right-5 mt-[200px] w-48 bg-white rounded-md shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Inbox
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <hr />
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign 0ut
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
