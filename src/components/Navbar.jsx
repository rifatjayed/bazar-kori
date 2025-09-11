// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FiSearch, FiShoppingCart, FiHeart, FiMenu } from "react-icons/fi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { MdOutlineKeyboardArrowDown, MdClose } from "react-icons/md";
// import { TbTruckDelivery } from "react-icons/tb";
// import { BiCategory } from "react-icons/bi";
// import { useProducts } from "./context/ProductsProvider";
// import logo from "../assets/Frame.png";

// const Navbar = () => {
//   const { cart } = useProducts();
//   const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
//   // Navbar component এর ভিতরে state গুলোতে এটা add করো
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

//   return (
//     <div className="w-full bg-white ">
//       {/* ================= Desktop Topbar ================= */}
//       <div className="hidden md:flex items-center justify-between px-8 lg:px-12 py-4">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="logo" className="w-8 h-8" />
//           <h1 className="text-xl font-bold text-green-700">Grocerius</h1>
//         </Link>

//         {/* Search Bar */}
//         <div className="flex items-center flex-1 max-w-lg mx-8">
//           <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden">
//             <div className="flex items-center px-3 text-gray-500">
//               <FiSearch className="text-gray-500" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search Products..."
//               className="w-full px-2 py-2 outline-none"
//             />
//             <button className="bg-gray-700 text-white px-5 py-2 rounded-full font-medium">
//               Search
//             </button>
//           </div>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center gap-6 text-xl text-black">
//           <div className="relative cursor-pointer">
//             <FiHeart className="text-xl" />
//             <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//               2
//             </span>
//           </div>

//           <Link to="/cart">
//             <div className="relative cursor-pointer">
//               <FiShoppingCart className="text-xl" />
//               {totalCartItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
//                   {totalCartItems}
//                 </span>
//               )}
//             </div>
//           </Link>

//           <div className="flex items-center gap-2 cursor-pointer">
//             <FaRegCircleUser className="text-xl" />
//             <span className="hidden lg:block">John Doe</span>
//           </div>
//         </div>
//       </div>

//       {/* ================= Desktop Header ================= */}
//       <div className="hidden md:flex justify-between items-center px-8 lg:px-12 py-3 border-t border-gray-200">
//         {/* Categories Button */}
//         <button
//           className="flex justify-between items-center rounded-full w-[220px] bg-[#46AE3D] px-5 py-2 text-white text-base"
//           onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
//         >
//           <BiCategory className="text-lg" />
//           All Categories
//           <MdOutlineKeyboardArrowDown className="text-lg" />
//         </button>

//         {/* Nav */}
//         <nav className="flex gap-8">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-medium"
//                 : "text-gray-700 hover:text-green-600"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/shop"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-medium"
//                 : "text-gray-700 hover:text-green-600"
//             }
//           >
//             Products
//           </NavLink>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 font-medium"
//                 : "text-gray-700 hover:text-green-600"
//             }
//           >
//             Contact Us
//           </NavLink>
//         </nav>

//         {/* Track Order */}
//         <button className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-base">
//           <TbTruckDelivery className="text-lg" />
//           Track Order
//         </button>
//       </div>

//       {/* Categories Dropdown */}
//       {isCategoriesOpen && (
//         <div className="hidden md:block bg-white border-t border-gray-200 shadow-md p-4">
//           <div className="max-w-7xl mx-auto grid grid-cols-5 gap-4">
//             {[
//               "Fruits & Vegetables",
//               "Dairy & Eggs",
//               "Meat & Seafood",
//               "Bakery",
//               "Beverages",
//             ].map((cat, i) => (
//               <Link
//                 key={i}
//                 to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
//                 className="text-gray-700 hover:text-green-600"
//                 onClick={() => setIsCategoriesOpen(false)}
//               >
//                 {cat}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* ================= Mobile Navbar ================= */}
//       <div className="flex md:hidden items-center justify-between px-4 py-3 border-b border-gray-200">
//         {/* Left: Menu Button */}
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <FiMenu className="text-2xl text-gray-700" />
//         </button>

//         {/* Center: Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logo} alt="logo" className="w-6 h-6" />
//           <h1 className="text-lg font-bold text-green-700">Grocerius</h1>
//         </Link>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-4 text-xl text-gray-700">
//           {/* <FiSearch /> */}
//           <FiSearch
//             className="cursor-pointer"
//             onClick={() => setIsSearchOpen(!isSearchOpen)}
//           />
//           <FaRegCircleUser />
//           <Link to="/cart">
//             <div className="relative">
//               <FiShoppingCart />
//               {totalCartItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//                   {totalCartItems}
//                 </span>
//               )}
//             </div>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile Search Bar */}
//       {isSearchOpen && (
//         <div className="md:hidden bg-white px-4 py-3 border-t border-gray-200">
//           <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden">
//             <div className="flex items-center px-3 text-gray-500">
//               <FiSearch className="text-gray-500" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search Products..."
//               className="w-full px-2 py-2 outline-none"
//             />
//             <button className="bg-gray-700 text-white px-4 py-2 rounded-full font-medium text-sm">
//               Search
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 p-4">
//           <nav className="flex flex-col space-y-3">
//             <NavLink
//               to="/"
//               className="text-gray-700 hover:text-green-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/shop"
//               className="text-gray-700 hover:text-green-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Products
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className="text-gray-700 hover:text-green-600"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Contact Us
//             </NavLink>
//           </nav>
//           <button className="flex justify-center items-center gap-2 w-full rounded-full border border-gray-300 px-5 py-3 mt-4">
//             <TbTruckDelivery className="text-lg" />
//             Track Order
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdClose } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { useProducts } from "./context/ProductsProvider";
import { useAuth } from "./context/AuthProvider"; // ✅ AuthContext
import logo from "../assets/Frame.png";

const Navbar = () => {
  const { cart } = useProducts();
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const { user, logout } = useAuth(); // ✅ Auth values

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <div className="w-full bg-white ">
      {/* ================= Desktop Topbar ================= */}
      <div className="hidden md:flex items-center justify-between px-8 lg:px-12 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-green-700">Grocerius</h1>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center flex-1 max-w-lg mx-8">
          <div className="flex items-center w-full border border-gray-300 rounded-full overflow-hidden">
            <div className="flex items-center px-3 text-gray-500">
              <FiSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full px-2 py-2 outline-none"
            />
            <button className="bg-gray-700 text-white px-5 py-2 rounded-full font-medium">
              Search
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl text-black">
          <div className="relative cursor-pointer">
            <FiHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </div>

          <Link to="/cart">
            <div className="relative cursor-pointer">
              <FiShoppingCart className="text-xl" />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </div>
          </Link>

          {/* ✅ Auth Section */}
          {/* {user ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <FaRegCircleUser className="text-xl" />
              <span className="hidden lg:block">{user.email}</span>
              <button
                onClick={logout}
                className="ml-2 text-sm text-red-600 font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaRegCircleUser className="text-xl" />
              <span className="hidden lg:block">Login</span>
            </Link>
          )} */}

          {/* ✅ Auth Section */}
          {user ? (
            <div className="flex items-center gap-2 cursor-pointer">
              <FaRegCircleUser className="text-xl" />
              <span className="hidden lg:block">
                {user.displayName ? user.displayName : user.email.split("@")[0]}
              </span>
              <button
                onClick={logout}
                className="ml-2 text-sm text-red-600 font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaRegCircleUser className="text-xl" />
              <span className="hidden lg:block">Login</span>
            </Link>
          )}
        </div>
      </div>

      {/* ================= Desktop Header ================= */}
      <div className="hidden md:flex justify-between items-center px-8 lg:px-12 py-3 border-t border-gray-200">
        {/* Categories Button */}
        <button
          className="flex justify-between items-center rounded-full w-[220px] bg-[#46AE3D] px-5 py-2 text-white text-base"
          onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
        >
          <BiCategory className="text-lg" />
          All Categories
          <MdOutlineKeyboardArrowDown className="text-lg" />
        </button>

        {/* Nav */}
        <nav className="flex gap-8">
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
            to="/aboutPage"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-medium"
                : "text-gray-700 hover:text-green-600"
            }
          >
            About Us
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

        {/* Track Order */}
        <button className="flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2 text-base">
          <TbTruckDelivery className="text-lg" />
          Track Order
        </button>
      </div>

      {/* Categories Dropdown */}
      {isCategoriesOpen && (
        <div className="hidden md:block bg-white border-t border-gray-200 shadow-md p-4">
          <div className="max-w-7xl mx-auto grid grid-cols-5 gap-4">
            {[
              "Fruits & Vegetables",
              "Dairy & Eggs",
              "Meat & Seafood",
              "Bakery",
              "Beverages",
            ].map((cat, i) => (
              <Link
                key={i}
                to={`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 hover:text-green-600"
                onClick={() => setIsCategoriesOpen(false)}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ================= Mobile Navbar ================= */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Left: Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <MdClose className="text-2xl text-gray-700" />
          ) : (
            <FiMenu className="text-2xl text-gray-700" />
          )}
        </button>

        {/* Center: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-6 h-6" />
          <h1 className="text-lg font-bold text-green-700">Grocerius</h1>
        </Link>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 text-xl text-gray-700">
          <FiSearch
            className="cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          {/* ✅ Auth in Mobile */}
          {user ? (
            <div className="flex items-center gap-2">
              <FaRegCircleUser />
              <button
                onClick={logout}
                className="text-sm text-red-600 font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to="/signin">
              <FaRegCircleUser />
            </Link>
          )}
          <Link to="/cart">
            <div className="relative">
              <FiShoppingCart />
              {totalCartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {totalCartItems}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden bg-white px-4 py-3 border-t border-gray-200">
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <nav className="flex flex-col space-y-3">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutPage"
              className="text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/shop"
              className="text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>
          <button className="flex justify-center items-center gap-2 w-full rounded-full border border-gray-300 px-5 py-3 mt-4">
            <TbTruckDelivery className="text-lg" />
            Track Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
