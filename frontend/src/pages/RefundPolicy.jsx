import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <div className="max-w-screen-2xl px-4 mb-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg bg-white">
        <div>
          <h1 className=" text-4xl mb-2 font-medium">Standard Policy</h1>
          <p className="text-base font-normal line-clamp-4">
            <div className="max-w-screen-2xl px-4 mb-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 drop-shadow-lg bg-white">
              <div>
                <h1 className=" text-4xl mb-2 font-medium">Refund Policy</h1>
                <p className="text-base font-normal line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                  perspiciatis ipsa labore voluptatem cupiditate rerum!
                  Dignissimos est consequuntur repudiandae, molestiae minus
                  magnam tempora maiores ex deserunt, incidunt a iusto natus.
                </p>
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default RefundPolicy;
