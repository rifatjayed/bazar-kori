// import React from "react";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { TbTruckDelivery } from "react-icons/tb";
// import { BiCategory } from "react-icons/bi";

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center px-[80px] py-2">
//       <div className="flex">
//         <button className="flex justify-between items-center rounded-full w-[223px] bg-[#46AE3D] px-[20px] py-[10px]">
//           <span>
//             <BiCategory />
//           </span>
//           All Categories{" "}
//           <span>
//             <MdOutlineKeyboardArrowDown />
//           </span>
//         </button>
//       </div>
//       <div>
//         <nav className="nav  flex justify-center items-center gap-7">
//           <Link to="/">Home</Link>
//           <Link to="/shop">Products</Link>
//           <Link to="/contact">Contact Us</Link>
//         </nav>
//       </div>
//       <button className="flex justify-between items-center w-[159px] rounded-full border border-[#E0E0E0] px-[20px] py-[10px]">
//         <span>
//           <TbTruckDelivery />
//         </span>
//         Track Order
//       </button>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown, MdClose, MdMenu } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 md:py-4">
        {/* Categories Button - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:flex">
          <button
            className="flex justify-between items-center rounded-full w-[180px] lg:w-[223px] bg-[#46AE3D] px-4 lg:px-5 py-2 text-white text-sm lg:text-base"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            <span>
              <BiCategory className="text-lg" />
            </span>
            All Categories{" "}
            <span>
              <MdOutlineKeyboardArrowDown className="text-lg" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdClose className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </button>

        {/* Logo for mobile - Center aligned */}
        <Link to="/" className="md:hidden text-xl font-bold text-green-700">
          Grocerius
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-5 lg:gap-7">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium"
                : "text-gray-700 hover:text-green-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium"
                : "text-gray-700 hover:text-green-600"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium"
                : "text-gray-700 hover:text-green-600"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Track Order Button - Hidden on mobile, visible on larger screens */}
        <button className="hidden md:flex justify-between items-center w-[140px] lg:w-[159px] rounded-full border border-[#E0E0E0] px-4 lg:px-5 py-2 text-sm lg:text-base">
          <span>
            <TbTruckDelivery className="text-lg" />
          </span>
          Track Order
        </button>

        {/* Mobile Track Order Button */}
        <button className="md:hidden flex justify-center items-center w-10 h-10 rounded-full border border-[#E0E0E0]">
          <TbTruckDelivery className="text-lg" />
        </button>
      </div>

      {/* Mobile Menu - Appears when menu button is clicked */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          {/* Mobile Categories Button */}
          <button
            className="flex justify-between items-center w-full rounded-full bg-[#46AE3D] px-5 py-3 text-white mb-4"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            <span className="flex items-center gap-2">
              <BiCategory className="text-lg" />
              All Categories
            </span>
            <span>
              <MdOutlineKeyboardArrowDown className="text-lg" />
            </span>
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-medium py-2"
                  : "text-gray-700 hover:text-green-600 py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-medium py-2"
                  : "text-gray-700 hover:text-green-600 py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-green-600 font-medium py-2"
                  : "text-gray-700 hover:text-green-600 py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Track Order Button Full Text */}
          <button className="flex justify-center items-center gap-2 w-full rounded-full border border-[#E0E0E0] px-5 py-3 mt-4">
            <TbTruckDelivery className="text-lg" />
            Track Order
          </button>
        </div>
      )}

      {/* Categories Dropdown - For both mobile and desktop */}
      {isCategoriesOpen && (
        <div className="bg-white border-t border-gray-200 shadow-md p-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Example category items */}
            {[
              "Fruits & Vegetables",
              "Dairy & Eggs",
              "Meat & Seafood",
              "Bakery",
              "Beverages",
            ].map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 hover:text-green-600 p-2"
                onClick={() => {
                  setIsCategoriesOpen(false);
                  setIsMenuOpen(false);
                }}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
