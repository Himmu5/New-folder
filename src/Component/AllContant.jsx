import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Contant from "./Contant";

export default function AllContant({ products }) {

  const [Query,setQuery]=useState('');
  const [SelectOption,setSelectOption]=useState('Default Sort');
  const param=useParams();
  console.log(param);

  products=products.filter(function (item){
    return (item.title.toLowerCase().indexOf(Query.toLowerCase())!==-1)
  });

  if(SelectOption==='Name'){
    products.sort(function (x,y){
      return(x.product<y.product)?-1:1;
    })
  }
  else if(SelectOption==='LowToHigh'){
    products.sort(function (x,y){
      return (x.price-y.price);
    })
  }
  else if(SelectOption==='HighToLow'){
    products.sort(function (x,y){
      return (y.price-x.price);
    })
  }

  function HandleOnChange(e){
    setQuery(e.target.value);
  }

  function HandleOnChangeSelect(e){
    setSelectOption(e.target.value);
  }

  return (
    <div className="m-2 mb-8 sm:m-6 sm:p-8 md:ml-20 md:mr-20 md:mb-16 md:mt-16 mt-8  bg-white">
      <div className="p-5  space-y-4">
        <h1 className="text-red-500 font-bold text-4xl ">Shop</h1>
        <div className="sm:flex sm:justify-between space-y-3">
          <p className="text-gray-500">Showing 1-9 of 11 results</p>
          <div className="space-x-4 ">
            <input className="border-2  rounded-lg pt-2 pb-2 " placeholder="Search Product" value={Query} onChange={HandleOnChange} type="text" />
            <select className="p-2 text-gray-500 border-2 border-gray-200 bg-white" value={SelectOption} onChange={HandleOnChangeSelect} >
              <option value="Default">Default sorting</option>
              <option value="Name"> Sort by product Name</option>
              <option value="LowToHigh">Sort by price: low to high</option>
              <option value="HighToLow">Sort by price: high to low</option>
            </select>
          </div>
        </div>
      </div>

      {
        products.length==0&&<><div className="bg-indigo-600 text-2xl text-white p-10 m-2">
            0 result found !!!!!
          </div></>
      }
      {
        products.length<=1&&<><div className="bg-indigo-600 text-2xl text-white m-2 p-10">
            Try another keywords to see More Result!!!!
          </div></>
      }

      <div className="sm:flex  sm:flex-wrap sm:justify-center">
        {products.map(function (item) {
          return <Contant {...item} />;
        })}
      </div>
      <div className="flex gap-3 pt-10 pl-5 pb-10 ">
        <button className="pl-3 pr-3 pt-1 pb-1 text-white bg-red-500">1</button>
        <button className="pl-3 pr-3 pt-1 pb-1 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white">
          2
        </button>
        <button className="pl-3 pr-3 pt-1 pb-1 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white ">
          ...
        </button>
      </div>
    </div>
  );
}
