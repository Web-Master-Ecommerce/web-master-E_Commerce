import { CategoryInterface } from '@/Interfaces/Category_Interface';
import {supabase} from '@/Libs/supabaseClient';
import { useEffect, useState } from 'react';

export default function Landing_Aside() {
    const [categories, setCategories] = useState<CategoryInterface[]>([])
        
    useEffect(() => {
        supabase.from('Categories').select('*').then(({ data, error }) => {
        if (!error) setCategories(data)
        })
    }, [])
  return (
    <aside className="w-[20%] flex flex-col justify-between items-start">
        {/*Categories List*/}
        <ul className='flex flex-col justify-start items-start gap-2'>
             {
            categories && categories?.map((category)=>
             <li key={category?.id} value={category?.id} className="cursor-pointer group flex justify-start items-center gap-2 rounded">
              <img className=' grayscale-100 group-hover:grayscale-0' src={category?.img} alt={category?.titile} width={25} height={50}/>
              {category?.titile}
              </li>
          )
        }
        </ul>
    </aside>
  )
}
