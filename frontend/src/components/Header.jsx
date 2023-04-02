import React from "react";
import { NavLink, Link } from "react-router-dom";
import CustomInput from "./CustomInputs";

const Header = () => {
  return (
    <>
      <nav className="text-white bg-[#252422]  ">
        <div className="flex items-center justify-around p-2  border-b-[1px] border-white/80 text-sm">
          <div>
            <span>Free Shipping Over $100 Free Returns</span>
          </div>
          <div>
            <span>
              Hotline:
              <a>+46 00000000</a>
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center p-3  ">
          <a href="#" className="flex items-center grow ">
            <h1 className=" text-4xl font-bold ">M.Shop</h1>
          </a>
          <div className="flex items-center grow">
            <div className="relative w-[500px]">
              <CustomInput
                type="search"
                id="search"
                className="block p-2.5 w-full z-20 text-sm rounded-r-lg  placeholder-gray-600 text-gray-600"
                placeholder="Search ..."
                autoComplete="off"
              />

              <button
                type="submit"
                className="absolute top-0 h-[41px] right-0 p-2.5 text-sm font-medium text-white bg-[#E94B3CFF] border border-[#E94B3CFF] hover:bg-bg-[#E94B3CFF]"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
          <div className=" flex grow  items-center justify-end  space-x-20 text-base ">
            <Link to="/compareProducts" className="flex">
              <button className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </button>
              <span className=" mt-1">
                Compare <br />
                Products
              </span>
            </Link>
            <Link to="/wishlist" className="flex">
              <button className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
              <span className=" mt-1">
                Favorites <br />
                Wishlists
              </span>
            </Link>
            <Link to="/login" className="flex">
              <button className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </button>
              <span>
                Log In <br /> Account
              </span>
            </Link>
            <Link to="/cart" className="flex">
              <button className="flex relative items-center p-1 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <span className="sr-only">Notifications</span>
                <div className="flex absolute -top-1 -right-1 justify-center items-center w-6 h-6 text-sm font-bold text-whites bg-[#E94B3CFF] rounded-full ">
                  1
                </div>
              </button>
              <span className=" mt-1">
                Shopping <br /> Cart
              </span>
            </Link>
          </div>
        </div>
        <div className="text-white text-sm bg-[#333333] flex items-center  font-medium  tracking-normal  uppercase">
          <div className="border-r-[1px] border-white/50 mx-20 flex hover:bg-[#252525] ">
            <button>
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
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </button>
            <button
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="text-white bg-transparent  gap-10 font-medium text-sm px-4 py-2 text-center inline-flex items-center hover:bg-[#2c2a2a]"
              type="button"
            >
              <span className="uppercase ">Categories</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div
              id="dropdownDivider"
              className="hidden  z-10 w-44 text-white bg-[#333333]   "
            >
              <ul
                className="py-1 text-sm divide-y-[1px] divide-white  "
                aria-labelledby="dropdownDividerButton"
              >
                <li>
                  <Link
                    to="#"
                    className="block py-2.5 px-4 hover:bg-[#2c2a2a] "
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="#" className="block py-2.5 px-4 hover:bg-[#2c2a2a]">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block py-2.5 px-4 hover:bg-[#2c2a2a] "
                  >
                    Earnings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex  gap-20 ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
