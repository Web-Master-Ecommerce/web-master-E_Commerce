import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from '../../client';
import img1 from '../../../public/assets/Images/food1.png'


export default function ProductsSwipe({ selectedCategories , selectedBrands,selectedStocks,priceRange}) {

  

  // const [selectedCategories, setSelectedCategories] = useState([]);

  // const handleCategoryChange = (category) => {
  //   setSelectedCategories((prev) =>
  //     prev.includes(category)
  //       ? prev.filter((c) => c !== category) // لو موجود شيله
  //       : [...prev, category] // لو مش موجود ضيفه
  //   );
  // };
 


  const [products1,setProducts1]=useState([]);
    useEffect(()=>{
  
      const fetshProducts = async()=>{
        const {data,error}=await supabase.from("products").select("*");
        if(error){
          console.log("Error fetshing data " , error);
        }else{
          setProducts1(data);
          console.log(data);
          
        }
      }
      fetshProducts();
  
    },[]);
    

     const filteredProducts = products1.filter((p) => {
  const matchCategory =
    selectedCategories.length === 0 || selectedCategories.includes(p.category);

  const matchBrand =
    selectedBrands.length === 0 || selectedBrands.includes(p.brand);

  const matchStock =
    selectedStocks.length === 0 || selectedStocks.includes(p.availabilityStatus);

  const matchPrice =
    (!priceRange.min || p.price >= parseFloat(priceRange.min)) &&
    (!priceRange.max || p.price <= parseFloat(priceRange.max));

  return matchCategory && matchBrand && matchStock && matchPrice;
});

  const sliderRef = useRef(null);
const [currentPage, setCurrentPage] = useState(1);
const [count, setCount] = useState(0);

// الصفوف والأعمدة اللي عايزها
const rows = 4;
const colsPerRow = 4;
const slidesPerPage = rows * colsPerRow; // 16 (4 صفوف × 4 أعمدة)

const totalSlides = filteredProducts.length; // عدد المنتجات بعد الفلترة
const totalPages = Math.max(1, Math.ceil(totalSlides / slidesPerPage));

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  rows: 1,         // نخلي react-slick يتعامل مع كل صفحة كـ slide واحد لأننا بنقسم يدويًا
  slidesPerRow: 1, // نفس السبب
  beforeChange: (_, newIndex) => {
    setCurrentPage(newIndex + 1);
  },
};

useEffect(() => {
  // لو بعد الفلترة عدد الصفحات قلّ وكان currentPage أكبر من الجديد نصفره للصفحة الأولى
  if (currentPage > totalPages) {
    setCurrentPage(1);
    if (sliderRef.current) sliderRef.current.slickGoTo(0);
  }
}, [totalPages, currentPage, filteredProducts]);

const goToPage = (page) => {
  const index = Math.min(Math.max(page - 1, 0), totalPages - 1);
  if (sliderRef.current) sliderRef.current.slickGoTo(index);
  setCurrentPage(index + 1);
};
const startIndex = (currentPage - 1) * slidesPerPage;
const endIndex = startIndex + slidesPerPage;
const currentProducts = filteredProducts.slice(startIndex, endIndex);
 
  return <>


    

  <div className="lg:w-[75%] ">

    <div className='rounded-[7px]  md:w-full h-[240px]  bg-cover bg-center text-center justify-center flex items-center mb-3    ' style={{ backgroundImage: `url("${img1}")` }}>
          <div className='text-left'>
            <p className='text-[20px] md:text-[24px]  leading-[28px] text-[#202435]  font-extralight font-inter '>Organic Meals Prepared</p>
            <h1 className='text-[25px] md:text-[30px] leading-9 text-[#202435] font-semibold font-inter pb-2'>Delivered to 
              <span className='text-[#00B853]'> your Home</span></h1>
            <p className="font-inter text-[10px] md:text-[12px] leading-[18px] text-[#9B9BB4]" >Fully prepared & delivered nationwide.</p>

           </div>
    </div>

    <div className="flex justify-between items-center h-[56px] bg-[#F7F8FD] rounded-[7px] mb-2">
      <p className="ml-3 text-[12px] font-inter leading-[18px] text-[#9B9BB4]">{currentProducts.length} products</p>
      <p className="mr-3 font-medium text-[12px] leading-[18px] font-inter">sort by: 
        <span className="text-[13px] leading-[16px] font-medium ">Alphabetically, A-Z</span></p>
    </div>

<div className="flex flex-col">
<Slider ref={sliderRef} {...settings}>
  {Array.from({ length: totalPages }).map((_, pageIndex) => (
    <div className="!w-full  !flex flex-wrap  justify-start" key={pageIndex}>
      {filteredProducts
        .slice(pageIndex * slidesPerPage, (pageIndex + 1) * slidesPerPage)
        .map((prod) => (
          <div
            className="w-full sm:w-1/2 md:w-1/3 px-1 py-1 lg:w-1/4 box-border"
            key={prod.id}
          >
            <div className="shadow rounded-2xl  box-border  md:pl-4 pl-8 pt-8   relative pb-3 transform transition duration-250 hover:scale-95 hover:cursor-pointer ">
              <div className="flex flex-col items-center ">
                <img
                  src={prod.thumbnail}
                  className="w-[134px] h-[144px]  xl:w-[194px] xl:h-[174px] object-cover mt-2 "
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center bg-[#35AFA0] text-white text-[12px] rounded-[4px] w-[45px] h-6 absolute top-5 left-3">
                <p className="font-dosis !text-[12px] leading-3 font-semibold">
                  {prod.discountPercentage}%
                </p>
              </div>

              <div className="h-10 mb-2">
                <h4 className="text-left text-[14px] font-normal mt-2 text-black font-inter">
                  {prod.title.split(" ").slice(0, 4).join(" ")}
                </h4>
              </div>
              <h2 className="text-left uppercase text-[11px] font-semibold leading-4 font-dosis !text-[#00B853]">
                {prod.availabilityStatus}
              </h2>
              <div className="flex mt-2">
                <p className="text-left text-[12px] h-[12px]  !text-gray-500">
                  ⭐ {prod.rating}
                </p>{" "}
                <p className="pl-3 text-[13px] font-dosis !text-[#71778E]">
                  1review
                </p>
              </div>
              <div className="flex items-center mt-2">
                <h2 className="text-left  leading-[22.95px] line-through text-[15.3px] font-medium !text-[#C2C2D3] pb-3 font-dosis">
                  ${prod.price}
                </h2>
                <h2 className="text-left capitalize text-[18px] font-semibold leading-7 !text-[#D51243] pb-3 font-dosis ml-2">
                  ${prod.price}
                </h2>
              </div>

              <div className="flex justify-center ">
                <div className="flex items-center gap-4 w-[60%]">
                  {/* زرار - */}
                  <button
                    onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                    className="w-[34px] h-[34px] flex items-center justify-center rounded-s-2xl bg-gray-100 text-gray-600 font-bold text-xl"
                  >
                    -
                  </button>

                  {/* الرقم */}
                  <span className="text-lg font-semibold w-[80%] h-[34px] text-center">
                    <p>{count}</p>
                  </span>

                  {/* زرار + */}
                  <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="w-[34px] h-[34px] flex items-center justify-center rounded-e-2xl bg-yellow-400 text-white font-bold text-xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  ))}
</Slider>

    {/* pagination */}


    {/* ====== Pagination ====== */}
    
{totalPages <= 1 ? null : (
  <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">

    <button
      onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
      className="px-3 py-1 text-black  rounded hover:bg-gray-100"
    >
      <i className="fa-solid fa-angle-left text-[10px] text-black "></i> Previous
    </button>

    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => goToPage(i + 1)}
        className={`px-3 py-1 border rounded 
          ${currentPage === i + 1
            ? "bg-yellow-400 text-white font-bold"
            : "bg-white text-gray-700"
          }`}
      >
        {i + 1}
      </button>
    ))}

    <button
      onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
      className="px-3 py-1 text-black  rounded hover:bg-gray-100"
    >
      Next <i className="fa-solid fa-angle-right text-[10px] text-black "></i>
    </button>
  </div>
)}
</div>
    

    </div>


  

  </>
}
