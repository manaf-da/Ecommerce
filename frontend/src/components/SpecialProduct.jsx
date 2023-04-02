import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <section className="w-[430px] bg-white p-6 rounded-md drop-shadow-2xl">
      <div className="flex justify-between ">
        <div>
          <img
            src="/src/assets/images/watch.jpg"
            alt="Special Products"
            className="object-center"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-red-600 ">Havels</h5>
          <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className=" text-base text-gray-700 font-semibold">
            <span className="text-red-600">$40.00</span> &nbsp;
            <strike>$50.00</strike>
          </p>
          <div className="flex items-center gap-3 ">
            <p className="mb-0">
              <b>5</b>days
            </p>
            <div className="flex gap-2 items-center ">
              <span className="whitespace-nowrap rounded-full text-white px-2.5 py-1 text-sm bg-red-500">
                1
              </span>
              :
              <span className="whitespace-nowrap rounded-full text-white px-2.5 py-1 text-sm bg-red-500">
                1
              </span>
              :
              <span className="whitespace-nowrap rounded-full text-white  px-2.5 py-1 text-sm bg-red-500">
                1
              </span>
            </div>
          </div>
          <div>
            <div>
              <p className="text-xs font-medium text-gray-500">Products:5</p>
              <div className="mt-4 overflow-hidden rounded-full bg-gray-200">
                <div className="h-2 w-2/12 rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
          <Link>
            <button className="inline-block rounded  bg-[#333333] px-6 font-semibold py-3 text-sm  text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#333333]">
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;
