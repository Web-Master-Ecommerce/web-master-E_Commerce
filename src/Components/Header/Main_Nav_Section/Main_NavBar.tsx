import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from '@/Libs/supabaseClient'
import { CategoryInterface } from "@/Interfaces/Category_Interface";

export default function Main_NavBar() {
const [categories, setCategories] = useState<CategoryInterface[]>([])
  
    useEffect(() => {
      supabase.from('Categories').select('*').then(({ data, error }) => {
        if (!error) setCategories(data)
      })
    }, [])
    return (
        <div className="shadow md:shadow-none mt-4 flex w-full  justify-center md:justify-end ">
            <ul className="flex w-full justify-between md:justify-end items-center gap-4">
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" to="/">Home</Link>
                </li>
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" to="/shop">Shop</Link>
                </li>
                {
                    categories?.slice(0, 3)?.map((category) =>
                        <li key={category?.id} className="hidden sm:flex group justify-center  items-center gap-2 hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full text-center">
                            {/*Icon*/}
                            <img src={category?.img as string || ''} alt={category?.titile as string} width={20} height={20} className="hidden md:block grayscale-100 group-hover:grayscale-0 duration-200" />
                            <Link className=" capitalize line-clamp-1 md:line-clamp-2" to={`/products/categories/${category?.id}`}>{category?.titile}</Link>
                        </li>
                    )
                }
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" to="/blog">Blog</Link>
                </li>
                <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-full">
                    <Link className=" capitalize" to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
