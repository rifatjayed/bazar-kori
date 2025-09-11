// import React, { useEffect } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// import { useProducts } from "../context/ProductsProvider";
// import {
//   FaCheckCircle,
//   FaDownload,
//   FaShoppingCart,
//   FaMoneyBillWave,
// } from "react-icons/fa";
// import { MdOutlinePayment } from "react-icons/md";

// const OrderComplete = () => {
//   const { cart, clearCart } = useProducts();

//   // Clear cart when component mounts (on successful order)
//   useEffect(() => {
//     clearCart();
//   }, [clearCart]);

//   // Calculate order summary values
//   const subtotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const shipping = 1.0;
//   const tax = 4.2;
//   const total = subtotal + shipping + tax;

//   // Generate a random order ID (as shown in the image)
//   const orderId = "BIRDSTELLER";
//   const deliveryCode = "DR December 2024";

//   // Mock billing and shipping details
//   const billingDetails = {
//     name: "John Doe",
//     address: "123 Main Street",
//     city: "New York",
//     zip: "10001",
//     country: "United States",
//   };

//   const shippingDetails = {
//     name: "John Doe",
//     address: "Special Address",
//     street: "Strict Appetitioned",
//     apartment: "Top 15, 30 Floor",
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
//         {/* Progress Bar */}
//         <div className="flex items-start justify-between mb-12 relative">
//           <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
//             <div
//               className="absolute top-0 left-0 h-full bg-green-500"
//               style={{ width: "100%" }}
//             ></div>
//           </div>
//           {["Cart", "Checkout", "Payment process", "Order complete"].map(
//             (step, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center z-10 w-1/4"
//               >
//                 <div
//                   className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
//                     index <= 3
//                       ? "bg-green-500 border-green-500 text-white"
//                       : "bg-white border-gray-300 text-gray-300"
//                   }`}
//                 >
//                   {index < 3 ? (
//                     <FaCheckCircle size={20} />
//                   ) : index === 3 ? (
//                     <FaShoppingCart size={20} />
//                   ) : (
//                     <MdOutlinePayment size={20} />
//                   )}
//                 </div>
//                 <p
//                   className={`mt-2 text-sm text-center font-medium ${
//                     index <= 3 ? "text-gray-800" : "text-gray-400"
//                   }`}
//                 >
//                   {step}
//                 </p>
//               </div>
//             )
//           )}
//         </div>

//         {/* Success Message */}
//         <div className="text-center mb-8">
//           <FaCheckCircle className="mx-auto text-green-500 text-5xl mb-4" />
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank you,</h1>
//           <p className="text-gray-600 mb-2">Your order has been received</p>
//           <p className="text-gray-500 text-sm">
//             Your order has been fulfilled successfully. Will try to ship it to
//             your door steps as I learn the Gins Cheers
//           </p>
//         </div>

//         <div className="border-t border-b border-gray-200 py-6 mb-8">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             Continue in Emergency
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Order ID */}
//             <div>
//               <h3 className="text-sm font-medium text-gray-500 mb-1">
//                 Order ID:
//               </h3>
//               <p className="font-bold text-lg">{orderId}</p>
//               <button className="flex items-center text-blue-600 text-sm mt-1">
//                 <FaDownload className="mr-1" size={12} />
//                 Download invoice
//               </button>
//             </div>

//             {/* Delivery Code */}
//             <div>
//               <h3 className="text-sm font-medium text-gray-500 mb-1">
//                 Delivery Code:
//               </h3>
//               <p className="font-bold text-lg">{deliveryCode}</p>
//             </div>

//             {/* Payment Method */}
//             <div>
//               <h3 className="text-sm font-medium text-gray-500 mb-1">
//                 Payment Method:
//               </h3>
//               <p className="font-bold text-lg">Paypal</p>
//             </div>

//             {/* Total */}
//             <div>
//               <h3 className="text-sm font-medium text-gray-500 mb-1">Total:</h3>
//               <p className="font-bold text-lg">${total.toFixed(2)}</p>
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="mb-8">
//           <h2 className="text-lg font-semibold text-gray-700 mb-4">
//             Order Summary
//           </h2>

//           <div className="bg-gray-50 p-4 rounded-lg">
//             <div className="mb-4">
//               <h3 className="font-medium text-gray-700 mb-2">
//                 Ordinary Orders A-MA:
//               </h3>
//               <div className="text-sm text-gray-600 space-y-1">
//                 <p>Line &lt; 2</p>
//                 <p>From Headed & Devolved Stirling</p>
//                 <p>VSI (0) T</p>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <div className="flex justify-between">
//                 <span>SUB-TOTAL ({cart.length} Items)</span>
//                 <span className="font-medium">${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>SHIPPING</span>
//                 <span className="font-medium">${shipping.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>TAX</span>
//                 <span className="font-medium">${tax.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
//                 <span>TOTAL</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </div>

//             <p className="text-xs text-gray-500 mt-4 italic">
//               Delivery Splints ofterment | will not constitute other trust.
//             </p>
//           </div>
//         </div>

//         {/* Billing and Shipping Details */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Billing Details */}
//           <div>
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">
//               Billing Details
//             </h2>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <div className="text-sm text-gray-600 space-y-2">
//                 <p>{billingDetails.name}</p>
//                 <p>{billingDetails.address}</p>
//                 <p>
//                   {billingDetails.city}, {billingDetails.zip}
//                 </p>
//                 <p>{billingDetails.country}</p>
//               </div>
//             </div>
//           </div>

//           {/* Shipping Details */}
//           <div>
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">
//               Shipping Details
//             </h2>
//             <div className="bg-gray-50 p-4 rounded-lg">
//               <div className="text-sm text-gray-600 space-y-2">
//                 <p>{shippingDetails.name}</p>
//                 <p>{shippingDetails.address}</p>
//                 <p>{shippingDetails.street}</p>
//                 <p>{shippingDetails.apartment}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderComplete;

import React, { useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import {
  FaCheckCircle,
  FaDownload,
  FaShoppingCart,
  FaMoneyBillWave,
} from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const OrderComplete = () => {
  const { cart, clearCart } = useProducts();

  // Clear cart when component mounts (on successful order)
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  // Calculate order summary values
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 1.0;
  const tax = 4.2;
  const total = subtotal + shipping + tax;

  // Generate a random order ID (as shown in the image)
  const orderId = "BIRDSTELLER";
  const deliveryCode = "DR December 2024";

  // Mock billing and shipping details
  const billingDetails = {
    name: "John Doe",
    address: "123 Main Street",
    city: "New York",
    zip: "10001",
    country: "United States",
  };

  const shippingDetails = {
    name: "John Doe",
    address: "Special Address",
    street: "Strict Appetitioned",
    apartment: "Top 15, 30 Floor",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-sm">
        {/* Progress Bar */}
        <div className="flex items-start justify-between mb-8 md:mb-12 relative">
          <div className="absolute top-4 md:top-5 left-0 w-full h-0.5 bg-gray-200">
            <div
              className="absolute top-0 left-0 h-full bg-green-500"
              style={{ width: "100%" }}
            ></div>
          </div>
          {["Cart", "Checkout", "Payment process", "Order complete"].map(
            (step, index) => (
              <div
                key={index}
                className="flex flex-col items-center z-10 w-1/4"
              >
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
                    index <= 3
                      ? "bg-green-500 border-green-500 text-white"
                      : "bg-white border-gray-300 text-gray-300"
                  }`}
                >
                  {index < 3 ? (
                    <FaCheckCircle size={16} className="md:size-5" />
                  ) : index === 3 ? (
                    <FaShoppingCart size={16} className="md:size-5" />
                  ) : (
                    <MdOutlinePayment size={16} className="md:size-5" />
                  )}
                </div>
                <p
                  className={`mt-1 md:mt-2 text-xs md:text-sm text-center font-medium ${
                    index <= 3 ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            )
          )}
        </div>

        {/* Success Message */}
        <div className="text-center mb-6 md:mb-8">
          <FaCheckCircle className="mx-auto text-green-500 text-4xl md:text-5xl mb-3 md:mb-4" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            Thank you,
          </h1>
          <p className="text-gray-600 mb-2 text-sm md:text-base">
            Your order has been received
          </p>
          <p className="text-gray-500 text-xs md:text-sm max-w-md mx-auto">
            Your order has been fulfilled successfully. Will try to ship it to
            your door steps as I learn the Gins Cheers
          </p>
        </div>

        <div className="border-t border-b border-gray-200 py-4 md:py-6 mb-6 md:mb-8">
          <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
            Continue in Emergency
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Order ID */}
            <div>
              <h3 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
                Order ID:
              </h3>
              <p className="font-bold text-base md:text-lg">{orderId}</p>
              <button className="flex items-center text-blue-600 text-xs md:text-sm mt-1">
                <FaDownload className="mr-1" size={10} />
                Download invoice
              </button>
            </div>

            {/* Delivery Code */}
            <div>
              <h3 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
                Delivery Code:
              </h3>
              <p className="font-bold text-base md:text-lg">{deliveryCode}</p>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
                Payment Method:
              </h3>
              <p className="font-bold text-base md:text-lg">Paypal</p>
            </div>

            {/* Total */}
            <div>
              <h3 className="text-xs md:text-sm font-medium text-gray-500 mb-1">
                Total:
              </h3>
              <p className="font-bold text-base md:text-lg">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
            Order Summary
          </h2>

          <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
            <div className="mb-3 md:mb-4">
              <h3 className="font-medium text-gray-700 mb-1 md:mb-2 text-sm md:text-base">
                Ordinary Orders A-MA:
              </h3>
              <div className="text-xs md:text-sm text-gray-600 space-y-1">
                <p>Line &lt; 2</p>
                <p>From Headed & Devolved Stirling</p>
                <p>VSI (0) T</p>
              </div>
            </div>

            <div className="space-y-1 md:space-y-2 text-xs md:text-sm">
              <div className="flex justify-between">
                <span>SUB-TOTAL ({cart.length} Items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>SHIPPING</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>TAX</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-base md:text-lg pt-2 border-t border-gray-200">
                <span>TOTAL</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3 md:mt-4 italic">
              Delivery Splints ofterment | will not constitute other trust.
            </p>
          </div>
        </div>

        {/* Billing and Shipping Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Billing Details */}
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
              Billing Details
            </h2>
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
              <div className="text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2">
                <p>{billingDetails.name}</p>
                <p>{billingDetails.address}</p>
                <p>
                  {billingDetails.city}, {billingDetails.zip}
                </p>
                <p>{billingDetails.country}</p>
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div>
            <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
              Shipping Details
            </h2>
            <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
              <div className="text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2">
                <p>{shippingDetails.name}</p>
                <p>{shippingDetails.address}</p>
                <p>{shippingDetails.street}</p>
                <p>{shippingDetails.apartment}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-8 md:mt-10 text-center">
          <button className="bg-green-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition text-sm md:text-base">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
