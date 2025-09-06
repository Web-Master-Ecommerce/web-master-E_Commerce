import React from 'react'
import img1 from '../../../../public/assets/Images/one.png'
import img2 from '../../../../public/assets/Images/two.png'
export default function Cookies() {
  return <>

  <div className=' w-[90%] md:flex justify-between'>
    
     {/* <img  src={img1}  alt="" className='rounded-3xl h-[180px] w-[49%] object-cover' /> */}
     <div className='rounded-3xl h-[160px] md:w-[49%]  bg-cover bg-center text-left flex items-center mb-4  md:mb-0  ' style={{ backgroundImage: `url("${img1}")` }}>
      <div className='pl-4'>
        <h1 className='text-[20px] text-white font-bold pb-2'>Cookies and Ice Cream</h1>
        <button className='bg-white px-4 py-2 text-black rounded-2xl hover:bg-gray-100 hover:cursor-pointer transition-all duration-75 '>Shop Now</button>
      </div>
     
     </div>
     <div className='rounded-3xl h-[160px] md:w-[49%]  bg-cover bg-center text-left  flex items-center   ' style={{ backgroundImage: `url("${img2}")` }}>
     <div className='pl-4'>
        <h1 className='text-[20px] text-white font-bold pb-2'>Cookies and Ice Cream</h1>
        <button className='bg-white px-4 py-2 text-black rounded-2xl hover:bg-gray-100 hover:cursor-pointer transition-all duration-75 '>Shop Now</button>
      </div>
     </div>
    
    
     {/* <img src={img2} alt="" className='rounded-3xl h-[180px] w-[49%] object-cover' /> */}
    
  </div>


  
  
  </>
}
