import React from "react";

export default function Card() {
  return (
    <div className="pl-4 pr-4 pt-3 space-y-4 sm:space-y-0 sm:flex sm:gap-10 sm:p-10 sm:m-10 bg-white">
      <div className='sm:w-1/2 object-cover'>
        <img
        className="h-full w-full"
          src="https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg"
          alt=""
        />
      </div>
      <div className='sm:w-1/2 sm:space-y-5'>
        <p className="text-md text-gray-600">
          Home / Mugs / Black Printed Coffee Mug
        </p>
        <h1 className="text-3xl">Black Printed Coffee Mug</h1>
        <p className="font-bold text-xl">$15.00</p>
        <p>
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
          numquam eius modi tempora incidunt lores ta porro ame.
        </p>
        <div className="flex gap-4">
          <input type="number" className="border-2 w-1/5 rounded-xl" min="1" />
          <button className="pl-5 pr-5 pt-1 pb-1 rounded-xl bg-red-500 text-white focus:bg-blue-500">
            ADD TO CART
          </button>
        </div>
        <hr />
        <p className="text-base">Category:<span className="text-red-500">Mug</span></p>
      </div>
    </div>
  );
}
