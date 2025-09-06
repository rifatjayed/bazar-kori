// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-white shadow-md p-4">
//       <ul className="space-y-3">
//         <li>
//           <NavLink
//             to="/dashboard/overview"
//             className={({ isActive }) =>
//               `block p-2 rounded ${
//                 isActive ? "bg-green-100 font-semibold" : "hover:bg-green-50"
//               }`
//             }
//           >
//             Dashboard
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/orders"
//             className={({ isActive }) =>
//               `block p-2 rounded ${
//                 isActive ? "bg-green-100 font-semibold" : "hover:bg-green-50"
//               }`
//             }
//           >
//             Orders
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/account"
//             className={({ isActive }) =>
//               `block p-2 rounded ${
//                 isActive ? "bg-green-100 font-semibold" : "hover:bg-green-50"
//               }`
//             }
//           >
//             Account Details
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/dashboard/addresses"
//             className={({ isActive }) =>
//               `block p-2 rounded ${
//                 isActive ? "bg-green-100 font-semibold" : "hover:bg-green-50"
//               }`
//             }
//           >
//             Addresses
//           </NavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={toggleSidebar}
//           className="p-2 bg-green-500 text-white rounded-md shadow-lg"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
//         </button>
//       </div>

//       {/* Overlay for mobile */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`
//           fixed lg:static top-0 left-0 h-screen lg:h-auto
//           w-64 bg-white shadow-md p-4 z-40
//           transform transition-transform duration-300 ease-in-out
//           lg:transform-none lg:transition-none
//           ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//         `}
//       >
//         {/* Close button for mobile */}
//         <div className="flex justify-between items-center mb-6 lg:hidden">
//           <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
//           <button
//             onClick={toggleSidebar}
//             className="p-1 text-gray-500 hover:text-gray-700"
//             aria-label="Close menu"
//           >
//             <HiX size={24} />
//           </button>
//         </div>

//         <ul className="space-y-3">
//           <li>
//             <NavLink
//               to="/dashboard/overview"
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `block p-3 rounded-lg transition-colors ${
//                   isActive
//                     ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
//                     : "text-gray-700 hover:bg-green-50 hover:text-green-700"
//                 }`
//               }
//             >
//               Dashboard
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/orders"
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `block p-3 rounded-lg transition-colors ${
//                   isActive
//                     ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
//                     : "text-gray-700 hover:bg-green-50 hover:text-green-700"
//                 }`
//               }
//             >
//               Orders
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/account"
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `block p-3 rounded-lg transition-colors ${
//                   isActive
//                     ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
//                     : "text-gray-700 hover:bg-green-50 hover:text-green-700"
//                 }`
//               }
//             >
//               Account Details
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/dashboard/addresses"
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 `block p-3 rounded-lg transition-colors ${
//                   isActive
//                     ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
//                     : "text-gray-700 hover:bg-green-50 hover:text-green-700"
//                 }`
//               }
//             >
//               Addresses
//             </NavLink>
//           </li>
//         </ul>

//         {/* Additional mobile-only content */}
//         <div className="mt-8 pt-4 border-t border-gray-200 lg:hidden">
//           <div className="p-3 text-sm text-gray-600">
//             Welcome to your dashboard
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className="w-64   shadow-md p-4 lg:p-6">
      {/* Close button for mobile */}
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
        <button
          onClick={onClose}
          className="p-1 text-gray-500 hover:text-gray-700"
          aria-label="Close menu"
        >
          <HiX size={24} />
        </button>
      </div>

      <ul className="space-y-2">
        <li>
          <NavLink
            to="/dashboard/overview"
            onClick={onClose}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`
            }
          >
            📊 Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/orders"
            onClick={onClose}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`
            }
          >
            📦 Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/account"
            onClick={onClose}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`
            }
          >
            👤 Account Details
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/addresses"
            onClick={onClose}
            className={({ isActive }) =>
              `block p-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-green-100 text-green-800 font-semibold border-l-4 border-green-500"
                  : "text-gray-700 hover:bg-green-50 hover:text-green-700"
              }`
            }
          >
            📍 Addresses
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
