// import React, { useState, useMemo } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useProducts } from "../context/ProductsProvider";

// import {
//   FaShoppingCart,
//   FaCheckCircle,
//   FaMoneyBillWave,
//   FaGoogle,
//   FaPaypal,
//   FaCreditCard,
// } from "react-icons/fa";
// import { MdOutlinePayment } from "react-icons/md";

// const paymentOptions = [
//   {
//     id: "cod",
//     name: "Cash on Delivery",
//     icon: <FaMoneyBillWave size={28} className="text-gray-600" />,
//   },
//   {
//     id: "gpay",
//     name: "Google Pay",
//     icon: <FaGoogle size={28} className="text-gray-600" />,
//   },
//   {
//     id: "paypal",
//     name: "Paypal",
//     icon: <FaPaypal size={28} className="text-blue-800" />,
//   },
//   {
//     id: "card",
//     name: "Debit/Credit Card",
//     icon: <FaCreditCard size={28} className="text-gray-600" />,
//   },
// ];

// const PaymentPage = () => {
//   // Context থেকে cart ডেটা এবং clearCart ফাংশন নেওয়া হচ্ছে
//   const { cart, clearCart } = useProducts();
//   const navigate = useNavigate();

//   // কোন পেমেন্ট অপশন সিলেক্ট করা হয়েছে তার State
//   const [selectedPayment, setSelectedPayment] = useState("cod"); // ডিফল্ট 'Cash on Delivery'

//   // অর্ডার সামারির জন্য ক্যালকুলেশন
//   const { subtotal, shipping, tax, total } = useMemo(() => {
//     const sub = cart.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//     // ছবির ডিজাইন অনুযায়ী shipping এবং tax এর মান সেট করা হয়েছে
//     const ship = 1.0;
//     const taxValue = 4.2;
//     const grandTotal = sub + ship + taxValue;

//     return {
//       subtotal: sub,
//       shipping: ship,
//       tax: taxValue,
//       total: grandTotal,
//     };
//   }, [cart]);

//   // 'Place Order' বাটনে ক্লিক করলে এই ফাংশন কাজ করবে
//   const handlePlaceOrder = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }
//     // এখানে অর্ডার প্লেস করার মূল লজিক থাকবে (যেমন API কল)
//     console.log("Order Placed!", {
//       items: cart,
//       total,
//       paymentMethod: selectedPayment,
//     });
//     alert(`Order successfully placed with ${selectedPayment}!`);
//     clearCart(); // কার্ট খালি করা হবে
//     navigate("/order-complete"); // অর্ডার কমপ্লিট পেজে পাঠানো হবে
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <div
//         className="max-w-6xl mx-auto bg-white p-8"
//         style={{ borderLeft: "5px solid #e0f2ff" }}
//       >
//         {/* Breadcrumb */}
//         <p className="text-sm text-gray-500 mb-8">Home &gt; Cart</p>

//         {/* Progress Bar */}
//         <div className="flex items-start justify-between mb-12 relative">
//           <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
//             <div
//               className="absolute top-0 left-0 h-full bg-green-500"
//               style={{ width: "66%" }}
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
//                     index < 2
//                       ? "bg-green-500 border-green-500 text-white"
//                       : index === 2
//                       ? "bg-green-100 border-green-500 text-green-500"
//                       : "bg-white border-gray-300 text-gray-300"
//                   }`}
//                 >
//                   {index < 2 ? (
//                     <FaCheckCircle size={20} />
//                   ) : index === 2 ? (
//                     <MdOutlinePayment size={20} />
//                   ) : (
//                     <FaShoppingCart size={20} />
//                   )}
//                 </div>
//                 <p
//                   className={`mt-2 text-sm text-center font-medium ${
//                     index <= 2 ? "text-gray-800" : "text-gray-400"
//                   }`}
//                 >
//                   {step}
//                 </p>
//               </div>
//             )
//           )}
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column: Payment Options */}
//           <div className="lg:col-span-2">
//             <h2 className="text-2xl font-semibold mb-6">Payment Option</h2>
//             <div className="border rounded-lg p-4">
//               <div className="flex">
//                 {paymentOptions.map((option) => (
//                   <label
//                     key={option.id}
//                     className={`flex flex-col w-[180px] items-center justify-center p-2 border-2 rounded-md cursor-pointer transition-all ${
//                       selectedPayment === option.id
//                         ? "border-green-500 bg-green-50"
//                         : "border-gray-200"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="payment-method"
//                       value={option.id}
//                       checked={selectedPayment === option.id}
//                       onChange={() => setSelectedPayment(option.id)}
//                       className="sr-only" // Hide the default radio button
//                     />
//                     {option.icon}
//                     <p className="font-semibold mt-3 mb-4">{option.name}</p>
//                     <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
//                       {selectedPayment === option.id && (
//                         <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
//                       )}
//                     </div>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="border rounded-lg p-6 bg-gray-50">
//               <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
//               <div className="space-y-4">
//                 {cart.map((item) => (
//                   <div
//                     key={`${item.id}-${item.selectedWeight}`}
//                     className="flex justify-between items-start"
//                   >
//                     <div>
//                       <p className="font-medium text-gray-800">{item.name}</p>
//                       <p className="text-sm text-gray-500">
//                         {item.selectedWeight} x {item.quantity}
//                       </p>
//                     </div>
//                     <p className="font-medium text-gray-900">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <hr className="my-6" />
//               <div className="space-y-3">
//                 <div className="flex justify-between text-gray-600">
//                   <p>SUB-TOTAL ({cart.length} ITEMS)</p>
//                   <p className="font-medium text-gray-800">
//                     ${subtotal.toFixed(2)}
//                   </p>
//                 </div>
//                 <div className="flex justify-between text-gray-600">
//                   <p>SHIPPING</p>
//                   <p className="font-medium text-gray-800">
//                     ${shipping.toFixed(2)}
//                   </p>
//                 </div>
//                 <div className="flex justify-between text-gray-600">
//                   <p>TAX</p>
//                   <p className="font-medium text-gray-800">${tax.toFixed(2)}</p>
//                 </div>
//               </div>
//               <hr className="my-6" />
//               <div className="flex justify-between text-lg font-bold">
//                 <p>TOTAL</p>
//                 <p>${total.toFixed(2)}</p>
//               </div>
//               <Link to="/order">
//                 <button
//                   onClick={handlePlaceOrder}
//                   className="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
//                 >
//                   Place Order &rarr;
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

// import React, { useState, useMemo } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useProducts } from "../context/ProductsProvider";

// import {
//   FaShoppingCart,
//   FaCheckCircle,
//   FaMoneyBillWave,
//   FaGoogle,
//   FaPaypal,
//   FaCreditCard,
// } from "react-icons/fa";
// import { MdOutlinePayment } from "react-icons/md";

// const paymentOptions = [
//   {
//     id: "cod",
//     name: "Cash on Delivery",
//     icon: <FaMoneyBillWave size={28} className="text-gray-600" />,
//     shortName: "Cash",
//   },
//   {
//     id: "gpay",
//     name: "Google Pay",
//     icon: <FaGoogle size={28} className="text-gray-600" />,
//     shortName: "G Pay",
//   },
//   {
//     id: "paypal",
//     name: "Paypal",
//     icon: <FaPaypal size={28} className="text-blue-800" />,
//     shortName: "Paypal",
//   },
//   {
//     id: "card",
//     name: "Debit/Credit Card",
//     icon: <FaCreditCard size={28} className="text-gray-600" />,
//     shortName: "Card",
//   },
// ];

// const PaymentPage = () => {
//   // Context থেকে cart ডেটা এবং clearCart ফাংশন নেওয়া হচ্ছে
//   const { cart, clearCart } = useProducts();
//   const navigate = useNavigate();

//   // কোন পেমেন্ট অপশন সিলেক্ট করা হয়েছে তার State
//   const [selectedPayment, setSelectedPayment] = useState("cod"); // ডিফল্ট 'Cash on Delivery'

//   // অর্ডার সামারির জন্য ক্যালকুলেশন
//   const { subtotal, shipping, tax, total } = useMemo(() => {
//     const sub = cart.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//     // ছবির ডিজাইন অনুযায়ী shipping এবং tax এর মান সেট করা হয়েছে
//     const ship = 1.0;
//     const taxValue = 4.2;
//     const grandTotal = sub + ship + taxValue;

//     return {
//       subtotal: sub,
//       shipping: ship,
//       tax: taxValue,
//       total: grandTotal,
//     };
//   }, [cart]);

//   // 'Place Order' বাটনে ক্লিক করলে এই ফাংশন কাজ করবে
//   const handlePlaceOrder = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty!");
//       return;
//     }
//     // এখানে অর্ডার প্লেস করার মূল লজিক থাকবে (যেমন API কল)
//     console.log("Order Placed!", {
//       items: cart,
//       total,
//       paymentMethod: selectedPayment,
//     });
//     alert(`Order successfully placed with ${selectedPayment}!`);
//     clearCart(); // কার্ট খালি করা হবে
//     navigate("/order-complete"); // অর্ডার কমপ্লিট পেজে পাঠানো হবে
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen py-6 md:py-8 px-4 sm:px-6 lg:px-8">
//       <div
//         className="max-w-6xl mx-auto bg-white p-4 md:p-6 lg:p-8"
//         style={{ borderLeft: "5px solid #e0f2ff" }}
//       >
//         {/* Breadcrumb */}
//         <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8">
//           Home &gt; Cart
//         </p>

//         {/* Progress Bar */}
//         <div className="flex items-start justify-between mb-8 md:mb-12 relative">
//           <div className="absolute top-4 md:top-5 left-0 w-full h-0.5 bg-gray-200">
//             <div
//               className="absolute top-0 left-0 h-full bg-green-500"
//               style={{ width: "66%" }}
//             ></div>
//           </div>
//           {["Cart", "Checkout", "Payment process", "Order complete"].map(
//             (step, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center z-10 w-1/4"
//               >
//                 <div
//                   className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
//                     index < 2
//                       ? "bg-green-500 border-green-500 text-white"
//                       : index === 2
//                       ? "bg-green-100 border-green-500 text-green-500"
//                       : "bg-white border-gray-300 text-gray-300"
//                   }`}
//                 >
//                   {index < 2 ? (
//                     <FaCheckCircle size={16} className="md:size-5" />
//                   ) : index === 2 ? (
//                     <MdOutlinePayment size={16} className="md:size-5" />
//                   ) : (
//                     <FaShoppingCart size={16} className="md:size-5" />
//                   )}
//                 </div>
//                 <p
//                   className={`mt-1 md:mt-2 text-xs md:text-sm text-center font-medium ${
//                     index <= 2 ? "text-gray-800" : "text-gray-400"
//                   }`}
//                 >
//                   {step}
//                 </p>
//               </div>
//             )
//           )}
//         </div>

//         {/* Main Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
//           {/* Left Column: Payment Options */}
//           <div className="lg:col-span-2">
//             <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
//               Payment Option
//             </h2>
//             <div className="border rounded-lg p-4">
//               <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
//                 {paymentOptions.map((option) => (
//                   <label
//                     key={option.id}
//                     className={`flex flex-col w-[calc(50%-0.5rem)] md:w-[180px] items-center justify-center p-2 md:p-3 border-2 rounded-md cursor-pointer transition-all ${
//                       selectedPayment === option.id
//                         ? "border-green-500 bg-green-50"
//                         : "border-gray-200"
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name="payment-method"
//                       value={option.id}
//                       checked={selectedPayment === option.id}
//                       onChange={() => setSelectedPayment(option.id)}
//                       className="sr-only" // Hide the default radio button
//                     />
//                     {option.icon}
//                     <p className="font-semibold mt-2 md:mt-3 mb-2 md:mb-4 text-xs md:text-sm text-center">
//                       <span className="hidden md:inline">{option.name}</span>
//                       <span className="md:hidden">{option.shortName}</span>
//                     </p>
//                     <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
//                       {selectedPayment === option.id && (
//                         <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full"></div>
//                       )}
//                     </div>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Order Summary */}
//           <div className="lg:col-span-1">
//             <div className="border rounded-lg p-4 md:p-6 bg-gray-50">
//               <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">
//                 Order Summary
//               </h3>
//               <div className="space-y-3 md:space-y-4">
//                 {cart.map((item) => (
//                   <div
//                     key={`${item.id}-${item.selectedWeight}`}
//                     className="flex justify-between items-start"
//                   >
//                     <div className="max-w-[70%]">
//                       <p className="font-medium text-gray-800 text-sm md:text-base truncate">
//                         {item.name}
//                       </p>
//                       <p className="text-xs md:text-sm text-gray-500">
//                         {item.selectedWeight} x {item.quantity}
//                       </p>
//                     </div>
//                     <p className="font-medium text-gray-900 text-sm md:text-base whitespace-nowrap">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <hr className="my-4 md:my-6" />
//               <div className="space-y-2 md:space-y-3">
//                 <div className="flex justify-between text-gray-600 text-xs md:text-sm">
//                   <p>SUB-TOTAL ({cart.length} ITEMS)</p>
//                   <p className="font-medium text-gray-800">
//                     ${subtotal.toFixed(2)}
//                   </p>
//                 </div>
//                 <div className="flex justify-between text-gray-600 text-xs md:text-sm">
//                   <p>SHIPPING</p>
//                   <p className="font-medium text-gray-800">
//                     ${shipping.toFixed(2)}
//                   </p>
//                 </div>
//                 <div className="flex justify-between text-gray-600 text-xs md:text-sm">
//                   <p>TAX</p>
//                   <p className="font-medium text-gray-800">${tax.toFixed(2)}</p>
//                 </div>
//               </div>
//               <hr className="my-4 md:my-6" />
//               <div className="flex justify-between text-base md:text-lg font-bold">
//                 <p>TOTAL</p>
//                 <p>${total.toFixed(2)}</p>
//               </div>
//               <Link to="/order">
//                 <button
//                   onClick={handlePlaceOrder}
//                   className="w-full mt-4 md:mt-6 bg-green-600 text-white py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-green-700 transition-colors"
//                 >
//                   Place Order &rarr;
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;

import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";

import {
  FaShoppingCart,
  FaCheckCircle,
  FaMoneyBillWave,
  FaGoogle,
  FaPaypal,
  FaCreditCard,
} from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const paymentOptions = [
  {
    id: "cod",
    name: "Cash on Delivery",
    icon: <FaMoneyBillWave size={28} className="text-gray-600" />,
    shortName: "Cash",
  },
  {
    id: "gpay",
    name: "Google Pay",
    icon: <FaGoogle size={28} className="text-gray-600" />,
    shortName: "G Pay",
  },
  {
    id: "paypal",
    name: "Paypal",
    icon: <FaPaypal size={28} className="text-blue-800" />,
    shortName: "Paypal",
  },
  {
    id: "card",
    name: "Debit/Credit Card",
    icon: <FaCreditCard size={28} className="text-gray-600" />,
    shortName: "Card",
  },
];

const PaymentPage = () => {
  // Context থেকে cart ডেটা এবং clearCart ফাংশন নেওয়া হচ্ছে
  const { cart, clearCart } = useProducts();
  const navigate = useNavigate();

  // কোন পেমেন্ট অপশন সিলেক্ট করা হয়েছে তার State
  const [selectedPayment, setSelectedPayment] = useState("cod"); // ডিফল্ট 'Cash on Delivery'

  // অর্ডার সামারির জন্য ক্যালকুলেশন
  const { subtotal, shipping, tax, total } = useMemo(() => {
    const sub = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    // ছবির ডিজাইন অনুযায়ী shipping এবং tax এর মান সেট করা হয়েছে
    const ship = 1.0;
    const taxValue = 4.2;
    const grandTotal = sub + ship + taxValue;

    return {
      subtotal: sub,
      shipping: ship,
      tax: taxValue,
      total: grandTotal,
    };
  }, [cart]);

  // 'Place Order' বাটনে ক্লিক করলে এই ফাংশন কাজ করবে
  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // এখানে অর্ডার প্লেস করার মূল লজিক থাকবে (যেমন API কল)
    console.log("Order Placed!", {
      items: cart,
      total,
      paymentMethod: selectedPayment,
    });
    alert(`Order successfully placed with ${selectedPayment}!`);
    clearCart(); // কার্ট খালি করা হবে
    navigate("/order-complete"); // অর্ডার কমপ্লিট পেজে পাঠানো হবে
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div
        className="max-w-6xl mx-auto bg-white p-8"
        style={{ borderLeft: "5px solid #e0f2ff" }}
      >
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-8">Home &gt; Cart</p>

        {/* Progress Bar */}
        <div className="flex items-start justify-between mb-12 relative">
          <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
            <div
              className="absolute top-0 left-0 h-full bg-green-500"
              style={{ width: "66%" }}
            ></div>
          </div>
          {["Cart", "Checkout", "Payment process", "Order complete"].map(
            (step, index) => (
              <div
                key={index}
                className="flex flex-col items-center z-10 w-1/4"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    index < 2
                      ? "bg-green-500 border-green-500 text-white"
                      : index === 2
                      ? "bg-green-100 border-green-500 text-green-500"
                      : "bg-white border-gray-300 text-gray-300"
                  }`}
                >
                  {index < 2 ? (
                    <FaCheckCircle size={20} />
                  ) : index === 2 ? (
                    <MdOutlinePayment size={20} />
                  ) : (
                    <FaShoppingCart size={20} />
                  )}
                </div>
                <p
                  className={`mt-2 text-sm text-center font-medium ${
                    index <= 2 ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            )
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Payment Options */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Payment Option</h2>
            <div className="border rounded-lg p-4">
              {/* Desktop View - Unchanged */}
              <div className="hidden md:flex">
                {paymentOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex flex-col w-[180px] items-center justify-center p-2 border-2 rounded-md cursor-pointer transition-all ${
                      selectedPayment === option.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value={option.id}
                      checked={selectedPayment === option.id}
                      onChange={() => setSelectedPayment(option.id)}
                      className="sr-only" // Hide the default radio button
                    />
                    {option.icon}
                    <p className="font-semibold mt-3 mb-4">{option.name}</p>
                    <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      {selectedPayment === option.id && (
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                  </label>
                ))}
              </div>

              {/* Mobile View - Responsive */}
              <div className="md:hidden grid grid-cols-2 gap-3">
                {paymentOptions.map((option) => (
                  <label
                    key={option.id}
                    className={`flex flex-col items-center justify-center p-3 border-2 rounded-md cursor-pointer transition-all ${
                      selectedPayment === option.id
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment-method"
                      value={option.id}
                      checked={selectedPayment === option.id}
                      onChange={() => setSelectedPayment(option.id)}
                      className="sr-only" // Hide the default radio button
                    />
                    {option.icon}
                    <p className="font-semibold mt-2 mb-3 text-sm text-center">
                      {option.shortName}
                    </p>
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      {selectedPayment === option.id && (
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 bg-gray-50">
              <h3 className="text-xl font-semibold mb-6">Order Summary</h3>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedWeight}`}
                    className="flex justify-between items-start"
                  >
                    <div className="max-w-[70%]">
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.selectedWeight} x {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
              <hr className="my-6" />
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <p>SUB-TOTAL ({cart.length} ITEMS)</p>
                  <p className="font-medium text-gray-800">
                    ${subtotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>SHIPPING</p>
                  <p className="font-medium text-gray-800">
                    ${shipping.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-gray-600">
                  <p>TAX</p>
                  <p className="font-medium text-gray-800">${tax.toFixed(2)}</p>
                </div>
              </div>
              <hr className="my-6" />
              <div className="flex justify-between text-lg font-bold">
                <p>TOTAL</p>
                <p>${total.toFixed(2)}</p>
              </div>
              <Link to="/order">
                <button
                  onClick={handlePlaceOrder}
                  className="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
                >
                  Place Order &rarr;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
