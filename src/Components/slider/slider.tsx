import React, { useState } from "react";
import style from "./Slider.module.css";
import Slider from "react-slick";

import img1 from "../../../public/assets/Images/slider 1.png";
import img2 from "../../../public/assets/Images/slider 2.png";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`${style.arrow} ${style.next}`}
      onClick={onClick}
      style={{ zIndex: 20 }}
    >
      <i className="fa-solid fa-chevron-right text-white text-2xl"></i>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`${style.arrow} ${style.prev}`}
      onClick={onClick}
      style={{ zIndex: 20 }}
    >
      <i className="fa-solid fa-chevron-left text-white text-2xl"></i>
    </div>
  );
}

export default function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [counter, setCounter] = useState(0);

  return (
    <div className="w-full relative mb-10">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
            src={img1}
            alt=""
          />
          <div className="absolute inset-0 flex items-center bg-black/10">
            <div className="flex flex-col gap-2 text-left ms-10 sm:ms-10 md:ms-20 text-white z-10">
              <div className="flex flex-wrap gap-2">
                <span className="font-medium text-[12px] leading-[18px] tracking-[1px] uppercase flex items-center">
                  EXCLUSIVE OFFERS
                </span>
                <span className="font-semibold text-[14px] leading-[21px] tracking-[1px] uppercase flex items-center bg-[#00b853] rounded-lg px-2">
                  20% Off
                </span>
              </div>
              <h1 className="font-bold text-[48px] leading-[57.6px] tracking-[-0.7px] flex items-center my-3">
                Specialist in the <br /> Grocery Store
              </h1>
              <div className="flex flex-col items-start ps-4 sm:ps-10 md:ps-10">
                <p className="font-normal text-[16px] leading-[24px] mb-4 tracking-[-0.1px] flex items-center">
                  Only this week. Don’t miss...
                </p>
                <p className="text-base sm:text-lg md:text-xl my-2">
                  From{" "}
                  <span className="font-semibold !text-[30px] tracking-[-0.1px] text-[#d51243]">
                    $799
                  </span>
                </p>
                <button className="bg-[#35afa0] hover:bg-[#55c5be] text-white font-semibold px-3 sm:px-4 py-1 sm:py-2 w-fit !rounded-2xl text-sm sm:text-base">
                  Shop Now <i className="fa-solid fa-arrow-right text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
            src={img2}
            alt=""
          />
          <div className="absolute inset-0 flex items-center bg-black/10">
            <div className="flex flex-col gap-2 text-left ms-10 sm:ms-10 md:ms-20 text-white z-10">
              <div className="flex flex-wrap gap-2">
                <span className="font-medium text-[12px] leading-[18px] tracking-[1px] uppercase flex items-center">
                  EXCLUSIVE OFFERS
                </span>
                <span className="font-semibold text-[14px] leading-[21px] tracking-[1px] uppercase flex items-center bg-[#00b853] rounded-lg px-2">
                  20% Off
                </span>
              </div>
              <h1 className="font-bold text-[48px] leading-[57.6px] tracking-[-0.7px] flex items-center my-3">
                Specialist in the <br /> Grocery Store
              </h1>
              <div className="flex flex-col items-start ps-4 sm:ps-10 md:ps-10">
                <p className="font-normal text-[16px] leading-[24px] mb-4 tracking-[-0.1px] flex items-center">
                  Only this week. Don’t miss...
                </p>
                <p className="text-base sm:text-lg md:text-xl my-2">
                  From{" "}
                  <span className="font-semibold !text-[30px] tracking-[-0.1px] text-[#d51243]">
                    $799
                  </span>
                </p>
                <button className="bg-[#35afa0] hover:bg-[#55c5be] text-white font-semibold px-3 sm:px-4 py-1 sm:py-2 w-fit !rounded-2xl text-sm sm:text-base">
                  Shop Now <i className="fa-solid fa-arrow-right text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
