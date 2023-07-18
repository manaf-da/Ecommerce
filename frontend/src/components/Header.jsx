import React from "react";
import { NavLink, Link } from "react-router-dom";
import CustomInput from "./CustomInputs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

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
                className="absolute top-0  h-[41px] right-0 p-2.5 text-2xl font-medium text-white bg-[#E94B3CFF] border border-[#E94B3CFF] hover:bg-bg-[#E94B3CFF]"
              >
                <AiOutlineSearch />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
          <div className=" flex grow  items-center justify-end  space-x-20 ">
            <Link to="/compareProducts" className="flex">
              <button className="mr-2 text-4xl">
                <BiGitCompare />
              </button>
              <span className=" mt-1 text-sm">
                Compare <br />
                Products
              </span>
            </Link>
            <Link to="/wishlist" className="flex">
              <button className="mr-2 text-4xl">
                <AiOutlineHeart />
              </button>
              <span className=" mt-1 text-sm">
                Favorites <br />
                Wishlists
              </span>
            </Link>
            <Link to="/login" className="flex">
              <button className="mr-2 text-4xl">
                <BsPerson />
              </button>
              <span className="text-sm">
                Log In <br /> Account
              </span>
            </Link>
            <Link to="/cart" className="flex">
              <button className="flex relative items-center p-1 mr-2 text-4xl">
                <AiOutlineShoppingCart />
                <span className="sr-only">Notifications</span>
                <div className="flex absolute -top-1 -right-1 justify-center items-center w-6 h-6 text-sm font-bold text-whites bg-[#E94B3CFF] rounded-full ">
                  1
                </div>
              </button>
              <span className=" mt-1 text-sm">
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
