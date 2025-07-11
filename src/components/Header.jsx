import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-[80px]">
      <div className="flex">
        <button className="flex justify-between items-center rounded-full w-[223px] bg-[#46AE3D] px-[20px] py-[12px]">
          <span>
            <BiCategory />
          </span>
          All Categories{" "}
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </button>
      </div>
      <div>
        <nav className="nav  flex justify-center items-center gap-7">
          <a to="/">Home</a>
          <a to="/products">Products</a>
          <a to="/contact">Contact Us</a>
        </nav>
      </div>
      <button className="flex justify-between items-center w-[159px] rounded-full border border-[#E0E0E0] px-[20px] py-[12px]">
        <span>
          <TbTruckDelivery />
        </span>
        Track Order
      </button>
    </div>
  );
};

export default Header;
