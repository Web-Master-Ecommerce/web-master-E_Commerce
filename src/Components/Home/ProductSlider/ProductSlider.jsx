import React, { useEffect, useState } from 'react'
import style from './CategoriesSlider.module.css'

import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";



// استيراد ملفات الـ CSS الخاصة بـ Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from '../../../client';

function NextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  flex justify-center items-center`}
      style={{ ...style, display: "flex", right: "-18px", zIndex: "10",   }}
      onClick={onClick}
    >
       <FaChevronRight className="text-3xl  text-black  " />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  flex justify-center items-center`}
      style={{ ...style, display: "flex", left: "-15px", zIndex: "10", }}
      onClick={onClick}
    >
       <FaChevronLeft className="text-3xl text-black" />
    </div>
  );
}

export default function ProductSlider() {

  const [products,setProducts]=useState([]);

  useEffect(()=>{

    const fetshProducts = async()=>{
      const {data,error}=await supabase.from("products").select("*");
      if(error){
        console.log("Error fetshing data " , error);
      }else{
        setProducts(data);
        console.log(data);
        
      }
    }
    fetshProducts();

  },[]);

  const[categories , setCategories]=useState([]);


  
  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5, // الافتراضي على الشاشات الكبيرة
    slidesToScroll: 2,

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // تابلت وأقل
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // موبايل كبير وأقل
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680, // موبايل كبير وأقل
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      
      {
        breakpoint: 480, // موبايل صغير جدًا
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

 



  return (
    <>
    <div className='w-[90%]'>
<div className='mt-2 flex justify-between'>
      <div className='text-start'>
       <h1 className=' leading-6 uppercase text-[20px] font-semibold     text-black  font-dosis'>Featured Products</h1>
       <h3 className='text-[#9B9BB4] text-[12px] font-inter leading-[18px]'>Do not miss the current offers until the end of March.</h3>
     </div>
     <div className='border-[1px] border-[#D9D9E9]  rounded-[30px] w-[112px] h-[34px] flex justify-center items-center'>
        <p className='text-[#9B9BB4] cursor-pointer  text-[12px] font-medium leading-[18px]'>View All <span className="text-1xl w-[15px] ml-1">⟶</span></p>
     </div>
    </div>
    
    

      <Slider {...settings}>
        {products.map((prod)=><div className=' px-2   py-3 transform transition duration-250 hover:scale-95 hover:cursor-pointer' key={prod._id}>
          <div className='shadow rounded-2xl px-3 pt-8  relative  '>
            <img src={prod.thumbnail} className='w-[194px] h-[174px] object-cover mt-2 ' alt="" />
            <div className='flex items-center justify-center bg-[#35AFA0] text-white text-[12px] rounded-[4px] w-[45px] h-6 absolute top-5 left-3'><p className='font-dosis !text-[12px] leading-3 font-semibold'>{prod.discountPercentage}%</p></div>
          
          <div className='h-10 '><h4 className='text-left text-[14px] font-normal mt-2 text-black font-inter'>{prod.title.split(" ").slice(0, 4).join(" ")}</h4></div>
          <h2 className='text-left uppercase text-[11px] font-semibold leading-4 font-dosis !text-[#00B853]'>{prod.availabilityStatus}</h2>
          <div className='flex mt-2'><p className='text-left text-[12px] h-[12px]  !text-gray-500'>⭐ {prod.rating}</p> <p className='pl-3 text-[13px] font-dosis text-[#71778E]'>1review</p></div>
          <div className='flex items-center mt-2'>
            <h2 className='text-left  leading-[22.95px] line-through text-[15.3px] font-medium !text-[#C2C2D3] pb-3 font-dosis'>${prod.price}</h2>
          <h2 className='text-left capitalize text-[18px] font-semibold leading-7 !text-[#D51243] pb-3 font-dosis ml-2'>${prod.price}</h2>
          </div>
          <button className='bg-[#FFCD00] mb-3 text-black w-full  h-[34px] text-[12px] lg:text-[12px] rounded-2xl hover:bg-[#ffcb22d4] transition-all font-inter font-medium cursor-pointer'>Add to Cart</button>
          </div>
          

        </div>)}
      </Slider>

    </div>
    

      
    </>
  )
}
