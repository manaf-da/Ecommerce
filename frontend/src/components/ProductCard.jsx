import React from "react";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiGitCompare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../features/products/productsSlice";

const ProductCard = (props) => {
  const { grid, data } = props;
  let location = useLocation();
  const cardClass = location.pathname === "/product" ? `gr-${grid}` : "col-3";
  const getGridClass = () => {
    if (grid === 4) {
      return "lg:w-3/12";
    } else if (grid === 3) {
      return "lg:w-4/12";
    } else if (grid === 2) {
      return "lg:w-6/12";
    } else if (grid === 1) {
      return "lg:w-full";
    }
  };
  const dispatch = useDispatch();

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data &&
        data.map((item, index) => {
          return (
            <section
              key={index}
              className={`relative block overflow-hidden h-90 w-full drop-shadow-2xl group bg-white ${cardClass} ${getGridClass()}`}
            >
              <button
                className="absolute right-4 top-5 z-10  text-2xl "
                onClick={(e) => {
                  addToWish(item?._id);
                }}
              >
                <AiOutlineHeart />
              </button>
              <img
                src={item?.images[0].url}
                alt="watch"
                className="mx-auto object-center block object-contain w-full h-40 transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className=" p-4 flex flex-col gap-2 items-start ">
                <span className="whitespace-nowrap  text-red-600 text-xs font-medium">
                  {item?.brand}
                </span>
                <p className="text-sm font-semibold text-gray-900">
                  {item?.title}
                </p>
                <p
                  className={`text-xs font-medium text-gray-600 ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>

                <ReactStars
                  count={5}
                  size={24}
                  value={item?.totalrating.toString()}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="text-base font-bold text-gray-900">
                  {item.price}
                </p>
              </div>

              <div className="absolute text-2xl -right-7 top-12 flex flex-col gap-2 z-60 rounded-full text-black  transition duration-75  group-hover:right-4">
                <button>
                  <BiGitCompare />
                </button>
                <button>
                  <AiOutlineEye />
                </button>
                <button>
                  <AiOutlineShoppingCart />
                </button>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default ProductCard;
