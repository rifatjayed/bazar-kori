// // import { Outlet } from "react-router-dom";
// // import Sidebar from "./SideBar";
// // // import Sidebar from "../Sidebar";

// // export default function DashboardLayout() {
// //   return (
// //     <div className="flex min-h-screen bg-gray-50">
// //       {/* Sidebar */}
// //       <Sidebar></Sidebar>

// //       {/* Content */}
// //       <div className="flex-1 p-6">
// //         <Outlet />
// //       </div>
// //     </div>
// //   );
// // }
// import { Outlet } from "react-router-dom";
// import Sidebar from "./SideBar";
// import { useState } from "react";

// export default function DashboardLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen ">
//       {/* Sidebar */}
//       <div
//         className={`
//         fixed lg:static inset-y-0 left-0 z-30
//         transform transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//       `}
//       >
//         <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//       </div>

//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Content */}
//       <div className="flex-1 lg:ml-0">
//         {/* Mobile header with menu button */}
//         <div className="lg:hidden bg-white shadow-sm p-4 border-b border-gray-200">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//             aria-label="Open sidebar"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Main content */}
//         <div className="p-4 sm:p-6 lg:p-8">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Outlet } from "react-router-dom";
// import Sidebar from "./SideBar";
// import { useState } from "react";

// export default function DashboardLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen pt-10">
//       {" "}
//       {/* 🔹 Top 40px (pt-10 = 40px) */}
//       {/* Sidebar */}
//       <div
//         className={`
//         fixed lg:static inset-y-0 left-0 z-30
//         transform transition-transform duration-300 ease-in-out
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//       `}
//       >
//         <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//       </div>
//       {/* Overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}
//       {/* Content */}
//       <div className="flex-1 lg:ml-0">
//         {/* Mobile header with menu button */}
//         <div className="lg:hidden bg-white shadow-sm p-4 border-b border-gray-200">
//           <button
//             onClick={() => setSidebarOpen(true)}
//             className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
//             aria-label="Open sidebar"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Main content */}
//         <div className="  ">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import { useState } from "react";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen pt-10 px-20 gap-[45px]">
      {/* 🔹 Top 40px (pt-10), Left/Right 80px (px-20), Sidebar & Content gap 45px */}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-30
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile header with menu button */}
        <div className="lg:hidden bg-white shadow-sm p-4 border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Open sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Main content */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
