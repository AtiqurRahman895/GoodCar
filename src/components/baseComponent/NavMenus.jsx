

import { AiFillHome } from "react-icons/ai";
import { IoNewspaper } from "react-icons/io5";
import { MdMiscellaneousServices, MdRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { TransferLists } from "../../Contexts/TransferLists";

const NavMenus = () => {
  const {user}=useContext(AuthContext)
  const {role}=useContext(TransferLists)


  return (
    <>
      <li className="w-fit">
        <NavLink to={"/"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><AiFillHome /> Home</NavLink>
      </li>

      {/* <li className="w-fit">
        <NavLink to={"/aboutUs"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><BiSolidMessageAltDetail />About Us</NavLink>
      </li> */}

      {
        (user && role && role==="admin")?
        <>
        <li className="w-fit">
          <NavLink to={"/add_blog"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><MdRateReview />Add Blog</NavLink>
        </li>
        </>:
        <>
        <li className="w-fit">
          <NavLink to={"/services"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><MdMiscellaneousServices />Services</NavLink>
        </li>
        </>
      }
      
      {
        (user && role && role==="admin")?
        <>
        <li className="w-fit">
          <NavLink to={"/allAppoinments"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><RiCalendarScheduleFill />All Appoinments</NavLink>
        </li>
        </>:
        <>
        <li className="w-fit">
          <NavLink to={"/myAppoinments"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><RiCalendarScheduleFill />My Appoinments</NavLink>
        </li>
        </>
      }



      {/* <li className="w-fit">
        <NavLink to={"/products"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><AiFillProduct className="text-[16px]" />Products</NavLink>
      </li> */}

      {/* <li className="w-fit">
        <NavLink to={"/wishlist"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><FaHeart />My Wishlist</NavLink>
      </li> */}

      

      <li className="w-fit">
        <NavLink to={"/blogs"} className="hover:bg-transparent flex items-center gap-1 pb-1 mb-1"><IoNewspaper />Blogs</NavLink>
      </li>      

    </>
  );
};

export default NavMenus;
