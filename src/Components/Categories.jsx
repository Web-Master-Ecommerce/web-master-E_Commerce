import React, { useEffect, useState } from 'react'
import { supabase } from '../Libs/supabaseClient'

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    supabase.from('Categories').select('*').then(({ data, error }) => {
      if (!error) setCategories(data)
    })
  }, [])

  const firstCategory = categories[0]
  const restCategories = categories.slice(1, 9)
  const gridPositions = [
    'row-start-1 col-start-2', 'row-start-2 col-start-2',
    'row-start-1 col-start-3', 'row-start-2 col-start-3',
    'row-start-1 col-start-4', 'row-start-2 col-start-4',
    'row-start-1 col-start-5', 'row-start-2 col-start-5'
  ]

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen">
      <div
        className="
          grid grid-cols-5 grid-rows-2 gap-[1px] bg-gray-200 p-[1px]
          w-[470px] sm:w-[600px] md:w-[900px] lg:w-[1100px]
          transition-all duration-300
        "
      >
        {/* الكارت الكبير */}
        {firstCategory && (
          <div className="bg-white border border-[#E4E5EE] flex flex-col items-center justify-center text-center cursor-pointer row-span-2 col-span-1 hover:shadow-lg transition-shadow duration-300">
            <img
              src={firstCategory.img}
              alt={firstCategory.titile}
              className="w-24 h-24 object-contain mb-2"
            />
            <h2 className="text-base font-semibold text-gray-800">{firstCategory.titile}</h2>
            <p className="text-sm text-gray-500">{firstCategory.amount}</p>
          </div>
        )}

        {/* باقي الكروت */}
        {restCategories.map((cat, i) => (
          <div
            key={cat.id}
            className={`bg-white border border-[#E4E5EE] flex flex-col items-center justify-center text-center cursor-pointer w-full h-full hover:shadow-lg transition-shadow duration-300 ${gridPositions[i]}`}
          >
            <img
              src={cat.img}
              alt={cat.titile}
              className="w-20 h-20 object-contain mb-2"
            />
            <h2 className="text-base font-semibold text-gray-800">{cat.titile}</h2>
            <p className="text-sm text-gray-500">{cat.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories



