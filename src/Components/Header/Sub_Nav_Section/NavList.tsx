import { Link } from "react-router-dom";


export default function NavList() {

  return (
    <ul className="w-[90%] md:w-fit flex justify-between items-center gap-2">
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl">
            <Link to='/about' className="cursor-pointer hover:text-fontcolor">About Us</Link>
        </li>
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl">
            <Link to='/compare' className="cursor-pointer hover:text-fontcolor">Compare</Link>
        </li>
        <li className="hover:bg-[#F0FAFF] hover:text-[#35AFA0] p-2 rounded-4xl relative">
            <Link to='/wishlist' className="cursor-pointer hover:text-fontcolor">Wishlist</Link>
            <span className=" absolute top-0 right-0 bg-orange-500 rounded-full p-1 text-white w-4 h-4 flex justify-center items-center">{0}</span>
        </li>
    </ul>
  )
}
