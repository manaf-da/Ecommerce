import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const PrivatePolicy = () => {
  return (
    <>
      <Meta title={"Private Policy"} />
      <BreadCrumb title="Private Policy" />
      <div className="max-w-screen-2xl px-4 mb-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg bg-white">
        <div>
          <h1 className=" text-4xl mb-2 font-medium">Standard Policy</h1>
          <p className="text-base font-normal line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            ut eum minima aut vel excepturi repellat aspernatur aperiam, ducimus
            totam vitae, libero dicta numquam architecto recusandae quo, alias
            ipsam nostrum.It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English.Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivatePolicy;
