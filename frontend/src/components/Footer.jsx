import React from "react";
import { Link } from "react-router-dom";
import {
  GrFacebook,
  GrLinkedin,
  GrYoutube,
  GrInstagram,
  GrTwitter,
} from "react-icons/Gr";

const Footer = () => {
  return (
    <div className="bg-[#252422] p-1 divide-y divide-white/50 text-white">
      <div className="flex gap-10 items-center justify-evenly p-6">
        <h3 className="mb-0 text-2xl font-semibold tracking-normal capitalize">
          Sign up for newsLetter
        </h3>
        <form className="w-1/2 bg-white">
          <label htmlFor="UserEmail" className="sr-only">
            Email
          </label>

          <div className=" border border-gray-100 focus-within:ring sm:flex sm:items-center sm:gap-4">
            <input
              type="email"
              id="email"
              placeholder="Email..."
              className="w-full h-7  border-none p-1  focus:border-transparent focus:ring-transparent sm:text-sm"
            />
            <button className=" items-center h-10 w-20 bg-[#E94B3CFF]  px-5 uppercase font-semibold  text-sm  text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="py-4 text-white flex items-center justify-around">
        <div>
          <h3 className="mb-4 capitalize font-bold text-xl tracking-wide">
            Contact Us
          </h3>
          <div className="flex flex-col capitalize font-normal">
            <address className="p-2">
              Nackstavagen 18B 20 <br /> 85352 Sundsvall
            </address>
            <a href="tel:+9109345678" className="mt-1 block mb-1">
              +46 093456785
            </a>
            <a href="mailto:manafadam@gmail.com" className="mt-2 block mb-1">
              manafadam@gmail.com
            </a>
            <div className="flex items-center space-x-6 font-bold mt-4 text-2xl ">
              <a href="#" className="hover:text-[#3c5a99]">
                <GrFacebook />
              </a>
              <a href="#" className="hover:text-[#0A66C2]">
                <GrLinkedin />
              </a>
              <a href="#" className="hover:text-[#FF0000]">
                <GrYoutube />
              </a>
              <a href="#" className="hover:text-[#C13584]">
                <GrInstagram />
              </a>
              <a href="#" className="hover:text-[#1DA1F2]">
                <GrTwitter />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-6 mb-2 capitalize font-bold text-xl tracking-wide">
            Information
          </h3>
          <div className="flex flex-col capitalize font-normal">
            <Link to="/privatePolicy" className="py-2 mb-1">
              Private Policy
            </Link>
            <Link to="/refundPolicy" className="py-2 mb-1">
              Refund Policy
            </Link>
            <Link to="/shippingPolicy" className="py-2 mb-1">
              Shipping Policy
            </Link>
            <Link to="/Termsandconditons" className="py-2 mb-1">
              Terms & Conditions
            </Link>
            <Link to="/blogs" className="py-2 mb-1">
              Blogs
            </Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 capitalize font-bold text-xl tracking-wide">
            Account
          </h3>
          <div className="flex flex-col capitalize font-normal">
            <Link className="py-2 mb-1">Search </Link>
            <Link className="py-2 mb-1">About Us </Link>
            <Link className="py-2 mb-1">Faq</Link>
            <Link className="py-2 mb-1">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 capitalize font-bold text-xl tracking-wide">
            Links
          </h3>
          <div className="flex flex-col capitalize font-normal">
            <Link className="py-2 mb-1">Laptops</Link>
            <Link className="py-2 mb-1">Headphones</Link>
            <Link className="py-2 mb-1">Tablets</Link>
            <Link className="py-2 mb-1">Smart Watches</Link>
          </div>
        </div>
        <div className="-mt-20 ">
          <h3 className="mb-4 mt-1 capitalize font-bold text-xl tracking-wide">
            Payments
          </h3>
          <div>
            <span className="capitalize  "> optional payment methods</span>
            <img
              src="https://i.ibb.co/Qfvn4z6/payment.png"
              className="mt-10 h-30 w-96"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center text-xs p-2">
        <span>&copy;CopyRight {new Date().getFullYear()}.</span>
        <span>All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
