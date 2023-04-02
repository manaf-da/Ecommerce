import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="max-w-screen-2xl px-4 py-4 mx-auto sm:px-6 sm:py-4 lg:px-8 drop-shadow-lg flex items-center justify-center flex-col ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1849.1028899035039!2d17.255387916251145!3d62.38969536900206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46645d9387414ec1%3A0xf95e8b129274634c!2sNackstav%C3%A4gen%2018B%2C%20853%2052%20Sundsvall!5e0!3m2!1sen!2sse!4v1673812848144!5m2!1sen!2sse"
          width="1540"
          height="400"
          className="rounded"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="max-w-screen-2xl px-4 py-2 mx-auto sm:px-4 sm:py-2 lg:px-4 drop-shadow-lg bg-white mb-4 flex  ">
        <div className="w-full px-4 py-10 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-12 ">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Contact</h1>
          </div>

          <form action="" className="mx-auto mt-8 mb-0 max-w-md space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <div className="relative">
                <input
                  type="name"
                  className="w-full p-2 
                  pr-12 text-sm 
                  shadow-sm 
                  text-gray-700
                   bg-white 
                   bg-clip-padding
                    border border-solid
                     border-gray-300 focus:text-gray-700 focus:bg-white focus:outline-none"
                  placeholder="Enter Name"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-2 
                  pr-12 text-sm 
                  shadow-sm 
                  text-gray-700
                   bg-white 
                   bg-clip-padding
                    border border-solid
                     border-gray-300 focus:text-gray-700 focus:bg-white focus:outline-none"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full p-2 
                  pr-12 text-sm 
                  shadow-sm 
                  text-gray-700
                   bg-white 
                   bg-clip-padding
                    border border-solid
                     border-gray-300 focus:text-gray-700 focus:bg-white focus:outline-none"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-2 
                  pr-12 text-sm 
                  shadow-sm 
                  text-gray-700
                   bg-white 
                   bg-clip-padding
                    border border-solid
                     border-gray-300 focus:text-gray-700 focus:bg-white focus:outline-none"
                placeholder="Message"
                rows="8"
                id="message"
              ></textarea>
            </div>
            <button
              className="inline-block rounded bg-[#333333] px-6 font-semibold py-2 text-sm  text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]"
              href="/download"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="mt-10 font-semibold text-3xl space-y-8 p-2">
          <h3>Get in Touch With Us</h3>
          <div className=" flex flex-col gap-4">
            <span className="flex gap-4 text-sm text-gray-500 font-normal">
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <address className="text-sm capitalize tracking-wide">
                Nackstavägen 18B 85352 sundsvall
              </address>
            </span>
            <span className="flex gap-4 text-sm text-gray-500 font-normal">
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <a href="tel:+465858585858" className="tracking-wide text-sm">
                +465858585858
              </a>
            </span>
            <span className="flex gap-4 text-sm text-gray-500 font-normal">
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <a
                href="mailto:M.shop@gmail.com"
                className="text-sm capitalize tracking-wide"
              >
                M.shop@gmail.com
              </a>
            </span>
            <span className="flex gap-4 text-sm text-gray-500 font-normal">
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
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>

              <span className="text-sm capitalize tracking-wide">
                Monday - Friday 10AM - 8PM
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
