import React, { useEffect, useState } from 'react'
import './LBlog.css'; 
import img3 from'/assets/blog1.png'
import img4 from'/assets/blog2.png'
export default function LBlog() {
    const [counter, setcounter] = useState(0)
    useEffect(()=>{

    },[])
  return (
    <>
<div className="container mx-auto py-10">
  <div className="grid grid-cols-12 gap-8">
    
    {/* Article 1 */}
    <div className="col-span-12 md:col-span-8">
      <div className="article">
        <div className="image">
          <img
            src={img3}
            alt="blog1"
            className="w-full h-[560px] object-cover rounded-[7px]
            transition-transform duration-500 ease-in-out
            hover:scale-102"
          />
        </div>
        <div className="caption mt-6">
        <h2 className="font-semibold text-[36px] whitespace-nowrap">
         But I must explain to you how all this mistaken idea
       </h2>

          <div className="flex items-center gap-6  text-gray-500 my-3">
            <span><i className="fa-regular fa-calendar"></i> Jan 17, 2018</span>
            <span><i className="fa-regular fa-user"></i> Dima Perk</span>
          </div>
          <p className="text-gray-600 ">
            Dorem interdum face diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies,
            ante eros tempor lorem, vitae suscipit lorem enim sit amet lectus. Quisque egestas lorem ut nulla aliquam...
          </p>
        </div>
      </div>
    </div>

    {/* Article 2 */}
    <div className="col-span-12 md:col-span-8">
      <div className="article">
        <div className="image ">
          <img
            src={img4}
            alt="blog2"
            className="w-full h-[560px] object-cover rounded-[7px]
            transition-transform duration-500 ease-in-out
            hover:scale-102"
          />
        </div>
        <div className="caption mt-6">
          <h2 className="font-semibold text-[#202435] fs-36  text-nowrap">
            The Problem With Typefaces on the Web
          </h2>
          <div className="flex items-center gap-6 text-sm text-gray-500 my-3">
            <span><i className="fa-regular fa-calendar"></i> Jan 17, 2018</span>
            <span><i className="fa-regular fa-user"></i> Dima Perk</span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Dorem interdum face diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies,
            ante eros tempor lorem, vitae suscipit lorem enim sit amet lectus. Quisque egestas lorem ut nulla aliquam...
          </p>
        </div>
      </div>
    </div>

  </div>
</div>



    </>
  )
}