// import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import logo from "../assets/Frame.png";
// import { useProducts } from "./context/ProductsProvider";
// import { Link } from "react-router-dom";

// const Topbar = () => {
//   const { cart } = useProducts();

//   const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="w-full flex items-center justify-between bg-white  px-[80px] pt-[32px] pb-[16px]">
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <img src={logo} alt="logo" className="w-8 h-8" />
//         <h1 className="text-xl font-bold text-green-700">Grocerius</h1>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center w-1/2">
//         <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden">
//           <div className="flex items-center px-3 text-gray-500">
//             <FiSearch className="text-gray-500" />
//           </div>
//           <input
//             type="text"
//             placeholder="Search Products..."
//             className="w-full px-2 py-2 outline-none"
//           />
//           <button className="bg-gray-700 text-white px-5 py-2 rounded-full font-medium">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Icons */}
//       <div className="flex items-center gap-6 text-xl text-black">
//         <div className="relative cursor-pointer">
//           <FiHeart />
//           <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//             2
//           </span>
//         </div>
//         <Link to="/cart">
//           <div className="relative cursor-pointer">
//             <FiShoppingCart />

//             {totalCartItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 p-1 rounded-full flex items-center justify-center">
//                 {totalCartItems}
//               </span>
//             )}
//           </div>
//         </Link>

//         <div className="flex items-center gap-2 cursor-pointer text-base">
//           <FaRegCircleUser className="text-xl" />

//           <span>John Doe</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;

import { FiSearch, FiHeart, FiShoppingCart, FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/Frame.png";
import { useProducts } from "./context/ProductsProvider";
import { Link } from "react-router-dom";
import { useState } from "react";

const Topbar = () => {
  const { cart } = useProducts();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* Topbar */}
      <div className="w-full flex items-center justify-between bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-6">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FiMenu className="text-xl" />
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-6 h-6 md:w-8 md:h-8" />
            <h1 className="text-lg md:text-xl font-bold text-green-700">
              Grocerius
            </h1>
          </Link>
        </div>

        {/* Search Bar - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex items-center flex-1 max-w-lg mx-4 lg:mx-8">
          <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden">
            <div className="flex items-center px-3 text-gray-500">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full px-2 py-2 outline-none"
            />
            <button className="bg-gray-700 text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-medium text-sm md:text-base">
              Search
            </button>
          </div>
        </div>

        {/* Mobile Search Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FiSearch className="text-xl" />
        </button>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-xl text-black">
          <div className="hidden sm:block relative cursor-pointer">
            <FiHeart className="text-lg md:text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>

          <Link to="/cart">
            <div className="relative cursor-pointer">
              <FiShoppingCart className="text-lg md:text-xl" />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 p-1 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </div>
          </Link>

          <div className="hidden sm:flex items-center gap-2 cursor-pointer">
            <FaRegCircleUser className="text-lg md:text-xl" />
            <span className="hidden lg:block text-sm md:text-base">
              John Doe
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar - Appears when search button is clicked */}
      {isSearchOpen && (
        <div className="md:hidden bg-white p-4 border-t border-gray-200">
          <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden">
            <div className="flex items-center px-3 text-gray-500">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full px-2 py-2 outline-none"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded-full font-medium text-sm">
              Search
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu - Appears when menu button is clicked */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-green-700">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-green-700">
              Shop
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700">
              Contact
            </Link>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 cursor-pointer text-gray-700">
                <FiHeart className="text-lg" />
                <span>Wishlist (2)</span>
              </div>

              <div className="flex items-center gap-2 cursor-pointer text-gray-700 mt-3">
                <FaRegCircleUser className="text-lg" />
                <span>John Doe</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
