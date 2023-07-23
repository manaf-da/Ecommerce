import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "./../features/user/userSlice";
import { AiOutlineClose } from "react-icons/ai";

const WishLists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };

  const wishlistState = useSelector((state) => state.auth.wishlist);

  return (
    <>
      <Meta title={"wishLists"} />
      <BreadCrumb title="wishLists" />
      <div className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg ">
        <div className="relative w-80 block overflow-hidden group">
          <button className="absolute right-4 top-4 z-10 border-b border-2 bg-transparent p-1.5 text-gray-900  ">
            <span className="sr-only">close</span>
            <AiOutlineClose />
          </button>

          <img
            src="/src/assets/images/watch.jpg"
            alt=""
            className="object-cover w-full h-30 transition duration-500 group-hover:scale-105 sm:h-72"
          />

          <div className="relative p-4 bg-white  flex flex-col gap-3 flex-start  items-center  ">
            <h3 className=" text-xl font-medium text-gray-900">
              Havells Watch
            </h3>
            <span className=" text-lg text-gray-700">$40.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishLists;
