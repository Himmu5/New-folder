import React, { useState } from 'react'
import Contant from './Contant'

export default function AllContant({ products }) {

    const [query, setQuery] = useState('');
    const [SelectFilter,setSelectFilter]=useState('Default Sorting');
   
     let data = products.filter(function (item) {
        return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    })

   
    if(SelectFilter==="pricelowtohigh"){
        data.sort(function (x,y){
            return x.price-y.price;
        });
    }
    else if(SelectFilter==="pricehightolow"){
        data.sort(function (x,y){
            return y.price-x.price;
        });
    }
    else if(SelectFilter==="Title"){
        data.sort(function (x,y){
            return x.title<y.title ? -1 : 1;
        });
    }

    console.log('Sorted Data',data);
    function HandleOnChange(e) {
        setQuery(e.target.value); 
    }
    function HandleSelectFilter(e){
        setSelectFilter(e.target.value);
    }
    return (

        <div className="m-2 sm:m-6 sm:p-8 md:ml-20 md:mr-20 md:mb-16 md:mt-16 mt-8  bg-white">
            <div className="p-5  space-y-4">
                <h1 className="text-red-500 font-bold text-4xl ">Shop</h1>
                <div className="sm:flex sm:justify-between">
                    <p className="text-gray-500">Showing 1-9 of 11 results</p>
                    <div className='space-x-3'>
                        <input type="text" className='border border-gray-400 pl-4 pr-4 pt-2 pb-2 rounded-lg' placeholder='Search Product' value={query} onChange={HandleOnChange} />


                        <select className="p-2 text-gray-500 border-2 border-gray-200 bg-white" onChange={HandleSelectFilter} value={SelectFilter}>
                            <option value='default'>Default sorting</option>
                            {/* <option value='popularity'>Sort by popularity</option> */}
                            <option value='Title'> Sort by Title</option>
                            {/* <option value='latest'>Sort by latest</option> */}
                            <option value='pricelowtohigh'>Sort by price: low to high</option>
                            <option value="pricehightolow">Sort by price: high to low</option>
                        </select>


                    </div>
                </div>
            </div>
            <div className="sm:flex  sm:flex-wrap sm:justify-center">
                {
                    data.map(function (item, index) {
                        return <Contant key={index} photo={item.photo} title={item.title} product={item.product} price={item.price} />
                    })
                }
            </div>


            <div className="flex gap-3 pt-10 pl-5 pb-10 ">
                <button className="pl-3 pr-3 pt-1 pb-1 text-white bg-red-500">1</button>
                <button className="pl-3 pr-3 pt-1 pb-1 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white">2</button>
                <button className="pl-3 pr-3 pt-1 pb-1 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white ">...</button>
            </div>
        </div>

    )
}


// let text="Hello Himanshu Chhauhan "

//  text.filter(function (){
//     return
// })



// let arr=[5,4,9,2,8,4,6]
// let b= arr.sort(function (x , y){
//     return y-x;
// });
// console.log(b);