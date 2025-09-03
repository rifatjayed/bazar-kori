// import React from "react";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaTwitter,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// import googlePlay from "../../assets/Play store badge.png";
// import appStore from "../../assets/app.png";
// import logo from "../../assets/Frame.png";
// const Footer = () => {
//   return (
//     <footer className="bg-white border-t border-gray-200 ">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Left Section - Grocerius Info */}
//         <div>
//           <h2 className="text-2xl font-bold flex items-center gap-2 mb-5">
//             <span>
//               <img src={logo} alt="" />
//             </span>{" "}
//             Grocerius
//           </h2>
//           <div className="text-sm text-gray-600 flex items-center  mb-2">
//             <FaPhoneAlt className="text-green-600 mr-2" />
//             <span className="font-semibold">Call Us:</span>

//             <span> +34 698 99 03 09</span>
//           </div>
//           <div className="text-sm text-gray-600 flex items-center mb-2">
//             <FaEnvelope className="text-green-600 mr-2" />
//             <span className="font-semibold">Email:</span> info@e-commerce.com
//           </div>
//           <div className="text-sm text-gray-600 flex  ">
//             <FaMapMarkerAlt className="text-green-600 mr-2" />
//             <span className="font-semibold">Address:</span>{" "}
//             <span className=" ">
//               Carrer Acurio, 14E, 17320, Tossa de Mar, Girona
//             </span>
//           </div>

//           {/* App buttons */}
//           <div className="flex gap-2 mt-4">
//             <img
//               src={googlePlay}
//               alt="Google Play"
//               className="h-10 object-contain"
//             />
//             <img
//               src={appStore}
//               alt="App Store"
//               className="h-10 object-contain"
//             />
//           </div>
//         </div>

//         {/* Company */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Company</h3>
//           <ul className="text-gray-600 space-y-2">
//             <li className="hover:text-black cursor-pointer">About</li>
//             <li className="hover:text-black cursor-pointer">
//               Office, Address & Branch
//             </li>
//           </ul>
//         </div>

//         {/* Customer Service */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
//           <ul className="text-gray-600 space-y-2">
//             <li className="hover:text-black cursor-pointer">Contact Us</li>
//             <li className="hover:text-black cursor-pointer">
//               Return & Replacement
//             </li>
//           </ul>
//         </div>

//         {/* Useful Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Useful links</h3>
//           <ul className="text-gray-600 space-y-2">
//             <li className="hover:text-black cursor-pointer">Sign In</li>
//             <li className="hover:text-black cursor-pointer">View Cart</li>
//             <li className="hover:text-black cursor-pointer">My Wishlist</li>
//             <li className="hover:text-black cursor-pointer">Track My Order</li>
//             <li className="hover:text-black cursor-pointer">
//               Shipping Details
//             </li>
//             <li className="hover:text-black cursor-pointer">Order History</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-t border-gray-200 mt-8 py-4 flex flex-col md:flex-row justify-between items-center px-6">
//         <p className="text-sm text-gray-500">
//           &copy; {new Date().getFullYear()} Grocerius
//         </p>
//         <div className="flex gap-4 mt-4 md:mt-0">
//           <p className="text-sm text-gray-500 hover:text-black cursor-pointer">
//             Terms of Conditions
//           </p>
//           <p className="text-sm text-gray-500 hover:text-black cursor-pointer">
//             Privacy Policy
//           </p>
//           <p className="text-sm text-gray-500 hover:text-black cursor-pointer">
//             Support
//           </p>
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4 mt-4 md:mt-0">
//           <a href="#" className="text-green-600 hover:text-green-800">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="text-green-600 hover:text-green-800">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" className="text-green-600 hover:text-green-800">
//             <FaInstagram />
//           </a>
//           <a href="#" className="text-green-600 hover:text-green-800">
//             <FaTwitter />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import googlePlay from "../../assets/Play store badge.png";
import appStore from "../../assets/app.png";
import logo from "../../assets/Frame.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Left Section - Grocerius Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="text-xl md:text-2xl font-bold flex items-center gap-2 mb-4 md:mb-5">
            <span>
              <img
                src={logo}
                alt="Grocerius Logo"
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </span>{" "}
            Grocerius
          </h2>

          <div className="text-sm text-gray-600 flex items-start mb-2">
            <FaPhoneAlt className="text-green-600 mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold">Call Us: </span>
              <span>+34 698 99 03 09</span>
            </div>
          </div>

          <div className="text-sm text-gray-600 flex items-start mb-2">
            <FaEnvelope className="text-green-600 mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold">Email: </span>
              <span>info@e-commerce.com</span>
            </div>
          </div>

          <div className="text-sm text-gray-600 flex items-start mb-4">
            <FaMapMarkerAlt className="text-green-600 mr-2 mt-1 flex-shrink-0" />
            <div>
              <span className="font-semibold">Address: </span>
              <span>Carrer Acurio, 14E, 17320, Tossa de Mar, Girona</span>
            </div>
          </div>

          {/* App buttons */}
          <div className="flex flex-wrap gap-2 mt-4">
            <img
              src={googlePlay}
              alt="Google Play"
              className="h-8 md:h-10 object-contain"
            />
            <img
              src={appStore}
              alt="App Store"
              className="h-8 md:h-10 object-contain"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3 md:mb-4">Company</h3>
          <ul className="text-gray-600 space-y-2 text-sm md:text-base">
            <li className="hover:text-black cursor-pointer transition-colors">
              About
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Office, Address & Branch
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3 md:mb-4">
            Customer Service
          </h3>
          <ul className="text-gray-600 space-y-2 text-sm md:text-base">
            <li className="hover:text-black cursor-pointer transition-colors">
              Contact Us
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Return & Replacement
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 md:mb-4">Useful links</h3>
          <ul className="text-gray-600 space-y-2 text-sm md:text-base">
            <li className="hover:text-black cursor-pointer transition-colors">
              Sign In
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              View Cart
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              My Wishlist
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Track My Order
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Shipping Details
            </li>
            <li className="hover:text-black cursor-pointer transition-colors">
              Order History
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 mt-6 md:mt-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            <p className="text-sm text-gray-500 order-2 md:order-1 text-center md:text-left">
              &copy; {new Date().getFullYear()} Grocerius
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 order-3 md:order-2">
              <p className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors">
                Terms of Conditions
              </p>
              <p className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors">
                Privacy Policy
              </p>
              <p className="text-sm text-gray-500 hover:text-black cursor-pointer transition-colors">
                Support
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 order-1 md:order-3">
              <a
                href="#"
                className="text-green-600 hover:text-green-800 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
