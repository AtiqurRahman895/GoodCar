

import { AiFillHome, AiFillProduct } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { MdMiscellaneousServices } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { RiCalendarScheduleFill } from "react-icons/ri";

const NavMenus = () => {

  return (
    <>
      <li className="w-fit">
        <NavLink to={"/"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><AiFillHome /> Home</NavLink>
      </li>

      <li className="w-fit">
        <NavLink to={"/aboutUs"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><BiSolidMessageAltDetail />About Us</NavLink>
      </li>
      
      <li className="w-fit">
        <NavLink to={"/services"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><MdMiscellaneousServices />Services</NavLink>
      </li>

      <li className="w-fit">
        <NavLink to={"/products"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><AiFillProduct className="text-[16px]" />Products</NavLink>
      </li>

      {/* <li className="w-fit">
        <NavLink to={"/wishlist"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><FaHeart />My Wishlist</NavLink>
      </li> */}

      <li className="w-fit">
        <NavLink to={"/appoinments"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><RiCalendarScheduleFill />Appoinments</NavLink>
      </li>

      <li className="w-fit">
        <NavLink to={"/blogs"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><IoNewspaper />Blogs</NavLink>
      </li>      

    </>
  );
};

export default NavMenus;
