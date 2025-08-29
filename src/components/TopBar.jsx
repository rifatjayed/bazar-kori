import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from "../assets/Frame.png";
import { useProducts } from "./context/ProductsProvider";
import { Link } from "react-router-dom";

const Topbar = () => {
  const { cart } = useProducts();

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="w-full flex items-center justify-between bg-white  px-[80px] pt-[32px] pb-[16px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-green-700">Grocerius</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-1/2">
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
          <FiHeart />
          <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <FiShoppingCart />

            {totalCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 p-1 rounded-full flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </div>
        </Link>

        <div className="flex items-center gap-2 cursor-pointer text-base">
          <FaRegCircleUser className="text-xl" />

          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

// components / Topbar.js;

// import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import logo from "../assets/Frame.png";
// import { useProducts } from "./context/ProductsProvider"; // ✅ কাস্টম হুক ইম্পোর্ট করা হয়েছে

// const Topbar = () => {
//   // ✅ context থেকে cart state নেওয়া হয়েছে
//   const { cart } = useProducts();

//   // ✅ কার্টের সব আইটেমের quantity যোগ করে মোট সংখ্যা বের করা হয়েছে
//   const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

//   return (
//     <div className="w-full flex items-center justify-between bg-white px-[80px] pt-[32px] pb-[16px]">
//       {/* ... (Logo এবং Search Bar অপরিবর্তিত) ... */}

//       {/* Icons */}
//       <div className="flex items-center gap-6 text-xl text-black">
//         <div className="relative cursor-pointer">
//           <FiHeart />
//           <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
//             2
//           </span>
//         </div>
//         <div className="relative cursor-pointer">
//           <FiShoppingCart />

//           {/* ✅ কার্টে আইটেম থাকলে সংখ্যাটি দেখানো হবে */}
//           {totalCartItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 p-1 rounded-full flex items-center justify-center">
//               {totalCartItems}
//             </span>
//           )}
//         </div>
//         <div className="flex items-center gap-2 cursor-pointer text-base">
//           <FaRegCircleUser className="text-xl" />
//           <span>John Doe</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;
