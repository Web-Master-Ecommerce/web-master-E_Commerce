import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../../client'
import image from "../../../../public/assets/Images/top.webp"



export default function Products() {
    const [products, setProducts] = useState([])

    async function getProducts() {
        const { data, error } = await supabase
            .from('products')
            .select('*')

        if (error) {
            console.error("Error:", error)
        } else {
            console.log("Data:", data)
            setProducts(data)
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div className="container mx-auto p-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-4 ">

                    {/* Sidebar */}
                    <div className="lg:col-span-1 bg-white p-4 border-2 border-pink-200 rounded-xl hover:scale-95 transition-all duration-200 px-5">
                        <h3 className="font-semibold text-3xl">Deals of the</h3>
                        <h2 className="font-bold text-3xl">Week!</h2>
                        <div className="flex justify-between text-white font-bold mt-4">
                            <div className="px-4 py-2 bg-pink-600 rounded-xl">00</div>
                            <div className="px-4 py-2 bg-pink-600 rounded-xl">00</div>
                            <div className="px-4 py-2 bg-pink-600 rounded-xl">00</div>
                            <div className="px-4 py-2 bg-pink-600 rounded-xl">00</div>
                        </div>
                        <p className="text-gray-400 mt-2 px-3 text-sm">Remains until the end of the offer</p>
                        <picture className="block my-7">
                            <img src={image} alt="" />
                        </picture>
                        <h3 className="font-bold mb-3">Wooden Bathroom Sink With Mirror</h3>
                        <span className="text-pink-600 font-bold text-lg mr-3">700</span>
                        <span className="text-gray-500 text-sm line-through">799</span>
                        <h3 className="uppercase text-green-400  font-semibold p-3 text-lg">low stock</h3>
                        <div className="flex items-center space-x-1">

                            <span className="text-yellow-400 text-xl">★</span>
                            <span className="text-yellow-400 text-xl">★</span>
                            <span className="text-yellow-400 text-xl">★</span>
                            <span className="text-yellow-400 text-xl">★</span>
                            <span className="text-gray-300 text-xl">★</span>

                            <span className="text-gray-600 text-sm ml-2">(3.59)</span>
                        </div>
                        <p className="text-gray-500 font-semibold p-3 text-end">Avilable: 7</p>
                        <span className="block w-full h-2  mt-3 mb-10 bg-gray-200 rounded ">
                            <span className="block w-3/4 h-2 bg-gradient-to-r from-red-500 to-yellow-500 rounded"></span>
                        </span>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 ">
                        <div className="grid grid-cols-2  md:grid-cols-3 ">
                            {products?.length > 0 ? (
                                products.slice(6, 12).map(prod => (
                                    <div key={prod.id} className="bg-white p-4 shadow hover:scale-95 transition-all duration-200 relative border-1 border-gray-100 rounded-lg">

                                        <picture className="block p-10">
                                            <img src={prod.thumbnail} alt="" />
                                        </picture>

                                        <div className="discount absolute top-0 left-0 py-1 px-2 m-2 text-white bg-red-500 rounded-full whitespace-nowrap text-xs">
                                            {prod.discountPercentage}%
                                        </div>
                                        <h5 className="text-sm font-semibold mb-4">{prod.title}</h5>
                                        <h3 className="uppercase text-green-400 font-semibold">{prod.availabilityStatus}</h3>
                                        <div className="flex items-center space-x-1">
                                            {[0, 1, 2, 3, 4].map((i) => (
                                                <span
                                                    key={i}
                                                    className={`text-xl ${i < Math.round(prod.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                >
                                                    ★
                                                </span>
                                            ))}
                                            <span className="text-gray-600 text-sm ml-1">({prod.rating})</span>
                                        </div>
                                        <span className="font-bold text-pink-700 mr-2 text-lg">
                                            ${(prod.price - (prod.price * prod.discountPercentage / 100)).toFixed(2)}
                                        </span>

                                        <span className="font-bold line-through text-gray-400 text-lg ">${prod.price}</span>
                                    </div>
                                ))
                            ) : null}



                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
