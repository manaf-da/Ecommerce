import React from "react";
import { Link } from "react-router-dom";
import blogPicture from "../assets/images/blog-1.jpg";

const BlogCard = () => {
  return (
    <section>
      <div className="overflow-hidden  h-96 w-full drop-shadow-lg ">
        <img
          alt="Office"
          src={blogPicture}
          className="h-40 w-full object-cover object-center"
        />

        <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
          <time
            dateTime="2022-10-10"
            className="block text-xs text-gray-500 dark:text-gray-400"
          >
            10th Oct 2022
          </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
              New Tech
            </h3>
          </a>

          <p className="mt-2 text-sm text-justify leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
          </p>
          <Link
            to="/blog/:id"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Find out more
            <span
              aria-hidden="true"
              className="block transition group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
