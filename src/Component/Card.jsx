import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./Data";
import { BiArrowBack } from "react-icons/bi";

export default function Card() {
  const Pdata = useParams();
  const pid = Pdata.id;
  console.log(pid);

  let product;

  for (let i = 0; i < data.length; i++) {
    const fetchId = data[i].id;
    if (pid == fetchId) {
      product = data[i];
    }
  }

  return (
    <>
      <div className="bg-white flex flex-col items-start m-4 sm:m-10">
      <Link to="/" className="pl-3 pt-3 sm:p-0 sm:ml-10 sm:mt-4">
          <BiArrowBack className="text-4xl pl-2 pr-2 pt-1 pb-1 rounded-lg text-white bg-blue-400 hover:scale-110 hover:bg-red-300" />
        </Link>
        <div className="pl-4 pr-4 pt-3 pb-5 mt-5 mb-5 space-y-4 sm:space-y-0 sm:flex sm:gap-10 sm:p-10 sm:mt-0 bg-white">
          
          <div className="flex sm:w-1/2 object-cover">
            <img className="h-full w-full " src={product.photo} alt="" />
          </div>
          <div className="sm:w-1/2 space-y-5 ">
            <p className="text-md text-gray-600">
              Home / {product.title} / {product.product}
            </p>
            <h1 className="text-3xl">{product.product}</h1>
            <p className="font-bold text-xl">${product.price}.00</p>
            <p>{product.description}</p>
            <div className="flex gap-4">
              <input
                type="number"
                className="border-2 w-1/5 rounded-xl"
                min="1"
              />
              <button className="pl-5 pr-5 pt-1 pb-1 rounded-xl bg-red-500 text-white focus:bg-blue-500">
                ADD TO CART
              </button>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="text-base">
                Category:<span className="text-red-500">{product.title}</span>
              </p>
              <Link
                to="/"
                className="pl-3 pr-3 pt-1 pb-1 bg-blue-400 text-white rounded-lg focus:bg-red-300"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
