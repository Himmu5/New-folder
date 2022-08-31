import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="flex justify-center ">
      <div className="mt-10 mb-10 bg-white rounded-lg shadow-lg pt-5">
        
          <h1 className="text-center font-bold underline text-red-400 text-4xl">Feel Free To Contact Us</h1>
        
        <div className="p-4 sm:p-20">
          <form
            action="https://formspree.io/f/mqkjagbw"
            method="POST"
            className="flex flex-col space-y-4"
          >
            <input type="text" name=" Name " placeholder="Enter Your Name " className="pl-4 pr-4 pt-1 pb-1 border " />
            <input type="text" name="email" placeholder="Enter your Email"  className="pl-4 pr-4 pt-1 pb-1 border "  />
            <textarea
              id=""
              cols="50"
              className="pl-4 pr-4 pt-1 pb-1 border " 
              name="Message"
              rows="10"
              placeholder="Enter Your message"
            ></textarea>
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
}
