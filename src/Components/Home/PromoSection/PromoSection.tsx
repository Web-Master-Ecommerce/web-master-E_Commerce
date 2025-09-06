import React from "react";

function PromoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex mb-[50px] m-auto gap-[20px] flex-wrap ">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative rounded-x1 overflow-hidden"
          >
           
            <div className="relative rounded-2xl overflow-hidden md:flex-1/3  lg:flex-1/4 lg:max-w-[400px]">
             <img src={`/public/assets/Images/promo/promo${item}.png`} className="w-full h-60 object-cover" alt="Promo 1" />
            </div>

           
            <div className="absolute top-[20px] lg:top-[28px] left-0  p-[20px] ">
              <p className="text-[#00B853] md:font-[500] md:text-[14px] ">
                Weekend Discount 40%
              </p>
              <h3 className="text-[#3E445A] font-[600] text-[24px]">Natural Eggs</h3>
              <p className="text-[#9B9BB4] font-[400] text-[12px]">Eat one every day</p>
              <button className="rounded-2xl my-[10px] bg-[#C2C2D3] px-[15px] py-[10px] text-white cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-[20px] flex-wrap mb-[100px]">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative rounded-2xl overflow-hidden md:flex-1/3  lg:flex-1/4 lg:max-w-[400px] "
          >
            <div className="mb-[10px] rounded-b-2xl overflow-hidden">
              <img
                src={`/public/assets/Images/promo/product${item}.png`}
                alt={`Product ${item}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <p className="text-[#9B9BB4] text-[13px] font-[300] uppercase my-[10px]">Grocery</p>
              <h3 className="text-base font-semibold text-gray-800">
                But I must explain to you how all this mistaken idea
              </h3>
              <p className="text-[#71778E] font-[500] text-[14px] mt-[6px]">Jan 13 2025</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoSection;
