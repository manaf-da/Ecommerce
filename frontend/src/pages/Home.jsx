import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { services } from "../utility/Data";
import { slides } from "../utility/Data";

const Home = () => {
  const [currentPicture, setCurrentPicture] = useState(0);

  const prev = () => {
    setCurrentPicture((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentPicture((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const dotSlides = (index) => {
    setCurrentPicture(index);
  };

  return (
    <>
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg ">
        <div className="max-w-[1800px] h-[780px] m-auto py-16 px-4 relative group">
          <div
            style={{ backgroundImage: `url(${slides[currentPicture].url})` }}
            className="w-full h-full rounded bg-center bg-cover duration-600"
          ></div>
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer"
            onClick={prev}
          >
            <BsChevronLeft size={30} />
          </div>
          <div
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-4 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer"
            onClick={next}
          >
            <BsChevronRight size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, index) => (
              <div
                key={index}
                onClick={() => dotSlides(index)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled className="text-black/30" />
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white flex p-4 mb-4 justify-between drop-shadow-lg">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={service.image} alt="services" />
              <div>
                <h6 className="font-semibold text-base">{service.title}</h6>
                <span className="mb-0 text-sm">{service.description}</span>
              </div>
            </div>
          ))}
        </section>

        <section className=" p-4  bg-white drop-shadow-lg flex flex-wrap justify-center   mb-4 item-center ">
          <div className="flex  items-center  w-1/5  border-b border-r">
            <img
              src="/src/assets/images/camera.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Camera</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center  w-1/5  border-b border-r  ">
            <img
              src="/src/assets/images/game.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Console</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center    w-1/5 border-b border-r">
            <img
              src="/src/assets/images/smartwatch.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Watch</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center    w-1/5 border-b border-r">
            <img
              src="/src/assets/images/laptop.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Laptop</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center    w-1/5  border-b ">
            <img
              src="/src/assets/images/headphone.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Headphone</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center w-1/5  border-r">
            <img
              src="/src/assets/images/acc.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Earpiece</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center  w-1/5  border-r">
            <img
              src="/src/assets/images/phone.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Phone</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center   w-1/5  border-r">
            <img
              src="/src/assets/images/Homeapp.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Toaster</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
          <div className="flex  items-center   w-1/5  border-r">
            <img
              src="/src/assets/images/powerbank.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Powerbank</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>

          <div className="flex  items-center   w-1/5">
            <img
              src="/src/assets/images/tv.jpg"
              alt="categories"
              className="w-30 h-30 object-fit object-center"
            />
            <div>
              <h6 className="text-base font-semibold capitalize">Television</h6>
              <span className="capitalize text-sm">10 items</span>
            </div>
          </div>
        </section>
        <section className="p-4  bg-white drop-shadow-lg flex  mb-4">
          <div className=" flex flex-col m-auto ">
            <h3 className=" capitalize text-4xl items-start font-semibold p-3">
              Products Collection
            </h3>
            <div className="flex gap-4 ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className="p-4  bg-white drop-shadow-lg flex mb-4">
          <div className="flex mx-auto gap-4  items-center">
            <div className=" bg-black w-80 p-4 text-start ">
              <div>
                <h5 className="text-sm font-medium text-gray-500">
                  Big Screen
                </h5>
                <h5 className="capitalized text-white text-2xl">
                  Smart watch series
                </h5>
                <span className="text-gray-500 text-sm  "> From $399</span>
              </div>
              <img src="/src/assets/images/popular-1.jpg" alt="Popular" />
            </div>
            <div className=" bg-white w-80 p-4 text-start  drop-shadow-lg">
              <div>
                <h5 className="text-sm font-medium text-gray-500">
                  Bright display
                </h5>
                <h5 className="capitalized text-gray-500 text-2xl">Phone</h5>
                <span className="text-gray-500 text-sm  "> From $499</span>
              </div>
              <img src="/src/assets/images/phone1.jpg" alt="Popular" />
            </div>
            <div className=" bg-white w-80 p-4 text-start  drop-shadow-lg">
              <div>
                <h5 className="text-sm font-medium text-gray-500">
                  Fine sound
                </h5>
                <h5 className="capitalized text-gray-500  text-2xl">
                  Wireless Speaker
                </h5>
                <span className="text-gray-500 text-sm  "> From $599</span>
              </div>
              <img src="/src/assets/images/speaker1.jpg" alt="Popular" />
            </div>
            <div className=" bg-white w-80 p-4 text-start   drop-shadow-lg">
              <div>
                <h5 className="text-sm font-medium text-gray-500">
                  Latest Processor
                </h5>
                <h5 className="capitalized text-gray-500 text-2xl">Laptop</h5>
                <span className="text-gray-500 text-sm  "> From $699</span>
              </div>
              <img src="/src/assets/images/laptop1.jpg" alt="Popular" />
            </div>
          </div>
        </section>
        <section className="p-4 bg-white drop-shadow-lg flex  mb-4">
          <div className=" flex flex-col m-auto ">
            <h3 className=" capitalize text-4xl items-start font-semibold p-3">
              Special Products
            </h3>
            <div className="flex gap-4   ">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </section>
        <section className="p-4  bg-white drop-shadow-lg flex  mb-4">
          <div className=" flex flex-col m-auto ">
            <h3 className=" capitalize text-4xl items-start font-semibold p-3">
              Popular Productions
            </h3>
            <div className="flex gap-4 ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
        <section className=" p-4 bg-white drop-shadow-lg flex overflow-x-hidden whitespace-nowrap  mb-4">
          <div className="relative">
            <ul className="flex animate-marquee">
              <li className="m-4">
                <img src="/src/assets/images/brand-01.png" alt="brand" />
              </li>
              <li className="m-4">
                <img src="/src/assets/images/brand-02.png" alt="brand" />
              </li>
              <li className="m-4">
                <img src="/src/assets/images/brand-03.png" alt="brand" />
              </li>
              <li className="m-4">
                <img src="/src/assets/images/brand-04.png" alt="brand" />
              </li>
              <li className="m-4">
                <img src="/src/assets/images/brand-05.png" alt="brand" />
              </li>
              <li className="m-4">
                <img src="/src/assets/images/brand-06.png" alt="brand" />
              </li>
              <li className="m-4">
                <img src="/src/assets/images/brand-07.png" alt="brand" />
              </li>
              <li className="m-4">
                <img src="/src/assets/images/brand-08.png" alt="brand" />
              </li>
            </ul>
          </div>
        </section>
        <section className=" p-4 bg-white drop-shadow-lg flex ">
          <div className=" flex flex-col m-auto ">
            <h3 className=" capitalize text-4xl items-start font-semibold p-3">
              Latest Blogs
            </h3>
            <div className="flex gap-4   ">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
