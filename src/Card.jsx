import React from "react";
import { useState } from "react";
export default function Card({tablenum}) {

    const [num , updateNum]=useState(1);
    function Next(){
        updateNum(num+1); 
        console.log(num);
    }

  return (
    <div className="m-10 space-y-4 pl-20 pr-20 pt-10 pb-10 rounded-lg text-white  text-2xl bg-violet-700 hover:scale-110 "> 
      {
        num>20&&`
        You are Great you learned ${num} table`
      }
    <h1 className="mt-5">Table {tablenum}</h1>
      <h2> {num} x 1 = {num*1}</h2>
      <h2>{num} x 2 = {num*2}</h2>
      <h2>{num} x 3 = {num*3}</h2>
      <h2> {num} x 4 = {num*4}</h2>
      <button onClick={Next} className="pl-4 pr-4 pt-2 pb-2 bg-orange-500 rounded-xl text-white hover:bg-orange-400">
        Next Table
      </button>
    </div>
  );
}
