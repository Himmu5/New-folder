import React from 'react'
import Contant from './Contant'

export default function AllContant() {
    return (
        
            <div class="m-2 sm:m-6 sm:p-8 md:ml-20 md:mr-20 md:mb-16 md:mt-16 mt-8  bg-white">
                <div class="p-5  space-y-4">
                    <h1 class="text-red-500 font-bold text-4xl ">Shop</h1>
                    <div class="sm:flex sm:justify-between">
                        <p class="text-gray-500">Showing 1-9 of 11 results</p>
                        <select class="p-2 text-gray-500 border-2 border-gray-200 bg-white">
                            <option >Default sorting</option>
                            <option >Sort by popularity</option>
                            <option > Sort by average rating</option>
                            <option >Sort by latest</option>
                            <option >Sort by price: low to high</option>
                            <option >Sort by price: high to low</option>
                        </select>
                    </div>
                </div>
                <div class="sm:flex  sm:flex-wrap sm:justify-center">
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4.jpg"  title="CUP"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/tshirt4-4.jpg" title="tshirt"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/mug-yellow-4.jpg"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/tshirt6-4.jpg"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/tshirt2-4.jpg"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/tshirt5-4.jpg"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/tshirt7-4.jpg"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/tshirt3-4.jpg"/>
                    <Contant photo="https://trycasuals.com/wp-content/uploads/2018/06/mug-blue-4.jpg"/>
                </div>


                <div class="flex gap-3 pt-10 pl-5 pb-10 ">
                    <button class="pl-3 pr-3 pt-1 pb-1 text-white bg-red-500">1</button>
                    <button class="pl-3 pr-3 pt-1 pb-1 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white">2</button>
                    <button class="pl-3 pr-3 pt-1 pb-1 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white ">-></button>
                </div>
            </div>
      
    )
}
