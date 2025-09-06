import Shop_Container from "@/Components/Shop/Shop_Container";
import ProductsCategories from "../../Components/ProductsCategories/ProductsCategories"
import ProductsSwipe from '../../Components/ProductsSwipe/ProductsSwipe'

import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from '../../client';

export default function Shop() {

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  
    
      const handleCategoryChange = (category) => {
        setSelectedCategories((prev) =>
          prev.includes(category)
            ? prev.filter((c) => c !== category) // لو موجود شيله
            : [...prev, category] // لو مش موجود ضيفه
        );
      };

      const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const handleStockChange = (availabilityStatus) => {
        setSelectedStocks((prev) =>
          prev.includes(availabilityStatus)
            ? prev.filter((s) => s !== availabilityStatus) // لو موجود شيله
            : [...prev, availabilityStatus] // لو مش موجود ضيفه
        );
      };


      
 



  return <>
 

    <div className="lg:flex w-[90%] justify-center mx-auto mt-6">
      <ProductsCategories selectedCategories={selectedCategories} 
        handleCategoryChange={handleCategoryChange}
        selectedBrands={selectedBrands}
          handleBrandChange={handleBrandChange}
          selectedStocks={selectedStocks}
          handleStockChange={handleStockChange}
          priceRange={priceRange}
  setPriceRange={setPriceRange}

        />



    <ProductsSwipe selectedCategories={selectedCategories}
    selectedBrands={selectedBrands}
    selectedStocks={selectedStocks}
    priceRange={priceRange}
    setPriceRange={setPriceRange}/>
    
    </div>
    
  

  </>
}
