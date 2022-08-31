import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="pl-5 pr-10 pt-4 pb-4 h-20 sm:pl-16 sm:pr-16 sm:pt-5 sm:pb-5 sm:h-24 pr-5 flex bg-white ">
      <img
        src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
        alt=""
      />
      <div className="flex grow">

      </div>
      <div className="hidden sm:block sm:flex gap-10 font-bold text-xl items-center">
        <Link to='/' className="hover:text-red-400">Home</Link>
        <Link to='/Component/Card' className="hover:text-red-400">All Product</Link>
        <Link to='/Component/About' className="hover:text-red-400">About</Link>
        <Link to="/Component/Contact" className="hover:text-red-400">Contact</Link>
       
      </div>
      <div className="block pl-5 ">
        <img
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
            className=" h-10 "
            alt=""
          />
        </div>  
      
    </div>
  );
}
