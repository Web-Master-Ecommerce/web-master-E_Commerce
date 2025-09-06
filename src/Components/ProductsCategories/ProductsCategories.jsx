import { useState } from "react";
import { Menu } from "lucide-react"; // أيقونة منيو
import img1 from '../../../public/assets/Images/happy.png'

export default function Categories({ selectedCategories, handleCategoryChange , selectedBrands, handleBrandChange,selectedStocks,handleStockChange,priceRange,
  setPriceRange,}) {
  const [open, setOpen] = useState(false);

  const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home decoration",
  "kitchen accessories",
  "laptops",
  "men",
];

  const brands = ["Essence", "Glamour Beauty", "Velvet Touch", "Chic Cosmetics","Nail Couture","Calvin Klein","Chanel","Dior"];
  const stock = ["In Stock" , "Low Stock" , "Out of Stock"];
  
  
  return (
 
      <>
  {/* 🖥️ Desktop */}
  <div className="hidden lg:block p-4 rounded-lg w-[25%]">
    {/* Categories */}
    <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mb-3">
      Product Categories
    </h2>
    <div className="flex flex-col gap-2 mb-6">
      {categories.map((category, idx) => (
        <label key={idx} className="flex items-center gap-2 cursor-pointer">
          <input
            checked={selectedCategories.includes(category)}
            onChange={() => handleCategoryChange(category)}
            type="checkbox"
            className="w-4 h-4 accent-[#35AFA0] cursor-pointer"
          />
          <span className="text-[#71778E] font-inter text-[14px] leading-[21px] capitalize">
            {category}
          </span>
        </label>
      ))}
    </div>

    {/* Brands */}
    <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mb-3">
      Brands
    </h2>
    <div className="flex flex-col gap-2">
      {brands.map((brand, idx) => (
        <label key={idx} className="flex items-center gap-2 cursor-pointer">
          <input
            checked={selectedBrands.includes(brand)}
            onChange={() => handleBrandChange(brand)}
            type="checkbox"
            className="w-4 h-4 accent-[#35AFA0] cursor-pointer"
          />
          <span className="text-[#71778E] font-inter text-[14px] leading-[21px] ">
            {brand}
          </span>
        </label>
      ))}
    </div>
     {/* Price */}
    <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mt-5 mb-3">
      Price
    </h2>
    <div className="flex price-range items-center ">
      <div className="item-center mr-3  text-center ">
      <p className="text-[13px] text-left font-inter text-[#71778E] leading-[19px]">From</p>
      <input type="number" value={priceRange.min} onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })} className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] pl-4 w-[116px] h-[40px] rounded-[4px] bg-[#F3F4F7]" placeholder="0"/>
      </div>
      <p>-</p>
      <div className="item-center ml-3  text-center">
      <p className="text-[13px]  text-left font-inter text-[#71778E] leading-[19px]">To</p>
      <input type="number"   value={priceRange.max} onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })} className="appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] pl-4 w-[116px] h-[40px] rounded-[4px] bg-[#F3F4F7]" placeholder="65.00"/>
      </div>
    </div>

    {/* Stock */}

    <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mt-6 mb-3">
      Availability
    </h2>
    <div className="flex flex-col gap-2">
      {stock.map((stock, idx) => (
        <label key={idx} className="flex items-center gap-2 cursor-pointer">
          <input
            checked={selectedStocks.includes(stock)}
            onChange={() => handleStockChange(stock)}
            type="checkbox"
            className="w-4 h-4 accent-[#35AFA0] cursor-pointer"
          />
          <span className="text-[#71778E] font-inter text-[14px] leading-[21px] ">
            {stock} 
          </span>
        </label>
      ))}
    </div>

    <div className="mt-12">
      <img src={img1} className="h-[368px]" alt="" />
    </div>
  </div>

  {/* 📱 Mobile */}
  <div className="lg:hidden py-4">
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-2 bg-[#35AFA0] w-full text-white px-4 py-2 rounded-lg"
    >
      <Menu size={20} />
     <div className="flex items-center cursor-pointer"><p className="font-inter pr-2">Filters</p>  <i class="fa-solid fa-angle-down"></i></div>
    </button>

    {open && (
      <div className="mt-3 bg-white rounded-lg shadow-lg p-4">
        {/* Categories */}
        <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mb-3">
          Product Categories
        </h2>
        <div className="flex flex-col gap-2 mb-6">
          {categories.map((category, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                type="checkbox"
                className="w-4 h-4 accent-[#35AFA0] cursor-pointer"
              />
              <span className="text-[#71778E] font-inter text-[14px] leading-[21px] ">
                {category}
              </span>
            </label>
          ))}
        </div>

        {/* Brands */}
        <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mb-3">
          Brands
        </h2>
        <div className="flex flex-col gap-2">
          {brands.map((brand, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                type="checkbox"
                className="w-4 h-4 accent-[#35AFA0] cursor-pointer"
              />
              <span className="text-[#71778E] font-inter text-[14px] leading-[21px] ">
                {brand}
              </span>
            </label>
          ))}
        </div>
        <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mt-5 mb-3">
          Price
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex price-range items-center ">
      <div className="item-center mr-2 text-center ">
      <p className="text-[13px] text-left font-inter text-[#71778E] leading-[19px]">From</p>
      <input type="number" className=" appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] pl-4 w-[116px] h-[40px] rounded-[4px] bg-[#F3F4F7]" placeholder="0"/>
      </div>
      <p>-</p>
      <div className="item-center ml-2 text-center">
      <p className="text-[13px]  text-left font-inter text-[#71778E] leading-[19px]">To</p>
      <input type="number" className=" appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield] pl-4 w-[116px] h-[40px] rounded-[4px] bg-[#F3F4F7]" placeholder="65.00"/>
      </div>
    </div>
        </div>
        {/* Stock */}
        <h2 className="text-[15px] leading-[18px] font-dosis text-[#202435] uppercase font-semibold text-left mt-5 mb-3">
          Availability
        </h2>
        <div className="flex flex-col gap-2">
          {stock.map((stock, idx) => (
            <label key={idx} className="flex items-center gap-2 cursor-pointer">
              <input
                checked={selectedBrands.includes(stock)}
                onChange={() => handleBrandChange(stock)}
                type="checkbox"
                className="w-4 h-4 accent-[#35AFA0] cursor-pointer"
              />
              <span className="text-[#71778E] font-inter text-[14px] leading-[21px] ">
                {stock}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-12">
      <img src={img1} className="h-[368px]" alt="" />
    </div>
      </div>
    )}
  </div>
</>


  
  );
}

