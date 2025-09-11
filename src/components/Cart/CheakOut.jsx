// import React, { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { useProducts } from "../context/ProductsProvider";
// import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
// import { MdOutlinePayment } from "react-icons/md";

// const Checkout = () => {
//   // Context থেকে কার্টের ডেটা নেওয়া হচ্ছে
//   const { cart } = useProducts();

//   // ফর্ম ইনপুটগুলোর জন্য State
//   const [billingDetails, setBillingDetails] = useState({
//     fullName: "",
//     district: "Dhaka",
//     city: "",
//     zip: "",
//     streetAddress: "",
//     apartment: "",
//     phone: "",
//     email: "",
//     createAccount: false,
//   });

//   // সাবস্ক্রিপশন অর্ডারের জন্য State
//   const [isSubscription, setIsSubscription] = useState(false);
//   const [selectedDays, setSelectedDays] = useState([]);

//   // ফর্মের ইনপুট পরিবর্তনের জন্য হ্যান্ডলার
//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setBillingDetails((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   // সাবস্ক্রিপশনের দিন সিলেক্ট করার জন্য হ্যান্ডলার
//   const handleDayToggle = (day) => {
//     setSelectedDays((prev) =>
//       prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
//     );
//   };

//   // অর্ডার সামারির জন্য ক্যালকুলেশন
//   const { subtotal } = useMemo(() => {
//     return {
//       subtotal: cart.reduce(
//         (total, item) => total + item.price * item.quantity,
//         0
//       ),
//     };
//   }, [cart]);

//   const tax = subtotal * 0.1; // উদাহরণস্বরূপ 10% ট্যাক্স
//   const total = subtotal + tax;

//   const daysOfWeek = [
//     "SUNDAY",
//     "MONDAY",
//     "WEDNESDAY",
//     "THURSDAY",
//     "FRIDAY",
//     "SATURDAY",
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm">
//         {/* Breadcrumb */}
//         <p className="text-sm text-gray-500 mb-8">Home &gt; Cart</p>

//         {/* Progress Bar - Consistent with Payment Page Design */}
//         <div className="flex items-start justify-between mb-12 relative">
//           <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
//             <div
//               className="absolute top-0 left-0 h-full bg-green-500"
//               style={{ width: "33%" }}
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
//                     index < 1
//                       ? "bg-green-500 border-green-500 text-white"
//                       : index === 1
//                       ? "bg-green-100 border-green-500 text-green-500"
//                       : "bg-white border-gray-300 text-gray-300"
//                   }`}
//                 >
//                   {index < 1 ? (
//                     <FaCheckCircle size={20} />
//                   ) : index === 1 ? (
//                     <FaShoppingCart size={20} />
//                   ) : index === 2 ? (
//                     <MdOutlinePayment size={20} />
//                   ) : (
//                     <FaShoppingCart size={20} />
//                   )}
//                 </div>
//                 <p
//                   className={`mt-2 text-sm text-center font-medium ${
//                     index <= 1 ? "text-gray-800" : "text-gray-400"
//                   }`}
//                 >
//                   {step}
//                 </p>
//               </div>
//             )
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Left Column: Form Details */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Returning Customer */}
//             <div className="bg-gray-50 p-4 rounded-lg border">
//               <h3 className="font-semibold text-gray-800">
//                 Returning Customer?
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 For better experience and for use of a coupon please login first
//               </p>
//               <Link
//                 to="/login"
//                 className="text-green-600 font-semibold text-sm mt-2 inline-block hover:underline"
//               >
//                 Click here to login
//               </Link>
//             </div>

//             {/* Preferred Delivery Time */}
//             <div className="bg-gray-50 p-6 rounded-lg border">
//               <h3 className="font-semibold text-lg mb-4">
//                 Preferred Delivery Time
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 Choose Date & time which is convenient for you
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Date*
//                   </label>
//                   <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
//                     <option>7 Dec (Tomorrow)</option>
//                     <option>8 Dec</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Time*
//                   </label>
//                   <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
//                     <option>11:00 AM - 01:00 PM</option>
//                     <option>02:00 PM - 04:00 PM</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Billing Details */}
//             <div className="bg-gray-50 p-6 rounded-lg border">
//               <h3 className="font-semibold text-lg mb-6">Billing Details</h3>
//               <div className="space-y-4">
//                 {/* Form Fields */}
//                 <div>
//                   <label
//                     htmlFor="fullName"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Full Name*
//                   </label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     id="fullName"
//                     value={billingDetails.fullName}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label
//                       htmlFor="district"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       District*
//                     </label>
//                     <select
//                       id="district"
//                       name="district"
//                       value={billingDetails.district}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                     >
//                       <option>Dhaka</option>
//                       <option>Chittagong</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="city"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       City*
//                     </label>
//                     <input
//                       type="text"
//                       name="city"
//                       id="city"
//                       value={billingDetails.city}
//                       onChange={handleInputChange}
//                       className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="zip"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     ZIP / Postcode*
//                   </label>
//                   <input
//                     type="text"
//                     name="zip"
//                     id="zip"
//                     value={billingDetails.zip}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="streetAddress"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Street address*
//                   </label>
//                   <input
//                     type="text"
//                     name="streetAddress"
//                     id="streetAddress"
//                     placeholder="House no & street name"
//                     value={billingDetails.streetAddress}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="apartment"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Apartment, floor, etc. (optional)
//                   </label>
//                   <input
//                     type="text"
//                     name="apartment"
//                     id="apartment"
//                     value={billingDetails.apartment}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Phone Number*
//                   </label>
//                   <div className="flex mt-1">
//                     <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
//                       +880
//                     </span>
//                     <input
//                       type="tel"
//                       name="phone"
//                       id="phone"
//                       value={billingDetails.phone}
//                       onChange={handleInputChange}
//                       className="flex-1 block w-full rounded-none rounded-r-md border-gray-300"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email (optional)
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={billingDetails.email}
//                     onChange={handleInputChange}
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
//                   />
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     id="createAccount"
//                     name="createAccount"
//                     type="checkbox"
//                     checked={billingDetails.createAccount}
//                     onChange={handleInputChange}
//                     className="h-4 w-4 text-green-600 border-gray-300 rounded"
//                   />
//                   <label
//                     htmlFor="createAccount"
//                     className="ml-2 block text-sm text-gray-900"
//                   >
//                     Create an account
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Order Summary & Subscription */}
//           <div className="space-y-8">
//             <div className="bg-gray-50 p-6 rounded-lg border">
//               <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//               <div className="space-y-3">
//                 {cart.map((item) => (
//                   <div
//                     key={`${item.id}-${item.selectedWeight}`}
//                     className="flex justify-between items-center text-sm"
//                   >
//                     <div className="text-gray-600">
//                       <p>{item.name}</p>
//                       <p className="text-xs">
//                         {item.selectedWeight} x {item.quantity}
//                       </p>
//                     </div>
//                     <p className="font-medium text-gray-800">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 ))}
//                 <div className="border-t pt-4 mt-4 space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <p>SUB-TOTAL ({cart.length} ITEMS)</p>
//                     <p className="font-medium">${subtotal.toFixed(2)}</p>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <p>TAX</p>
//                     <p className="font-medium">${tax.toFixed(2)}</p>
//                   </div>
//                   <div className="flex justify-between font-bold text-lg text-gray-800 pt-2">
//                     <p>TOTAL</p>
//                     <p>${total.toFixed(2)}</p>
//                   </div>
//                 </div>
//               </div>
//               <Link to="/payment">
//                 <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
//                   Proceed To Payment Process &rarr;
//                 </button>
//               </Link>
//             </div>

//             {/* Subscription Order */}
//             <div className="bg-gray-50 p-6 rounded-lg border">
//               <div className="flex items-start">
//                 <input
//                   id="subscription"
//                   name="subscription"
//                   type="checkbox"
//                   checked={isSubscription}
//                   onChange={(e) => setIsSubscription(e.target.checked)}
//                   className="h-4 w-4 text-green-600 border-gray-300 rounded mt-1"
//                 />
//                 <div className="ml-3">
//                   <label
//                     htmlFor="subscription"
//                     className="font-semibold text-gray-900"
//                   >
//                     Subscription Order
//                   </label>
//                   <p className="text-xs text-gray-500 mt-1">
//                     The subscription plan allows customers to schedule recurring
//                     purchases at consistent intervals, such as daily or weekly.
//                   </p>
//                 </div>
//               </div>
//               {isSubscription && (
//                 <div className="mt-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Days*
//                     </label>
//                     <div className="grid grid-cols-3 gap-2">
//                       {daysOfWeek.map((day) => (
//                         <button
//                           key={day}
//                           onClick={() => handleDayToggle(day)}
//                           className={`py-2 px-1 text-xs rounded-md border ${
//                             selectedDays.includes(day)
//                               ? "bg-green-600 text-white border-green-600"
//                               : "bg-white"
//                           }`}
//                         >
//                           {day}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mt-4">
//                     <label className="block text-sm font-medium mb-1">
//                       Weeks*
//                     </label>
//                     <select className="w-full border-gray-300 rounded-md shadow-sm">
//                       <option>1 Week</option>
//                       <option>2 Weeks</option>
//                     </select>
//                   </div>
//                   <div className="mt-6 flex flex-col space-y-2">
//                     <button className="w-full bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700">
//                       Apply subscription
//                     </button>
//                     <button className="w-full bg-white text-gray-700 py-2 rounded-full font-semibold border hover:bg-gray-100">
//                       Remove Subscription
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";

const Checkout = () => {
  // Context থেকে কার্টের ডেটা নেওয়া হচ্ছে
  const { cart } = useProducts();

  // ফর্ম ইনপুটগুলোর জন্য State
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    district: "Dhaka",
    city: "",
    zip: "",
    streetAddress: "",
    apartment: "",
    phone: "",
    email: "",
    createAccount: false,
  });

  // সাবস্ক্রিপশন অর্ডারের জন্য State
  const [isSubscription, setIsSubscription] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  // ফর্মের ইনপুট পরিবর্তনের জন্য হ্যান্ডলার
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // সাবস্ক্রিপশনের দিন সিলেক্ট করার জন্য হ্যান্ডলার
  const handleDayToggle = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // অর্ডার সামারির জন্য ক্যালকুলেশন
  const { subtotal } = useMemo(() => {
    return {
      subtotal: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    };
  }, [cart]);

  const tax = subtotal * 0.1; // উদাহরণস্বরূপ 10% ট্যাক্স
  const total = subtotal + tax;

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const fullDaysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-6 md:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-sm">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8">
          Home &gt; Cart
        </p>

        {/* Progress Bar - Consistent with Payment Page Design */}
        <div className="flex items-start justify-between mb-8 md:mb-12 relative">
          <div className="absolute top-4 md:top-5 left-0 w-full h-0.5 bg-gray-200">
            <div
              className="absolute top-0 left-0 h-full bg-green-500"
              style={{ width: "33%" }}
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
                    index < 1
                      ? "bg-green-500 border-green-500 text-white"
                      : index === 1
                      ? "bg-green-100 border-green-500 text-green-500"
                      : "bg-white border-gray-300 text-gray-300"
                  }`}
                >
                  {index < 1 ? (
                    <FaCheckCircle size={16} className="md:size-5" />
                  ) : index === 1 ? (
                    <FaShoppingCart size={16} className="md:size-5" />
                  ) : index === 2 ? (
                    <MdOutlinePayment size={16} className="md:size-5" />
                  ) : (
                    <FaShoppingCart size={16} className="md:size-5" />
                  )}
                </div>
                <p
                  className={`mt-1 md:mt-2 text-xs md:text-sm text-center font-medium ${
                    index <= 1 ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            )
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Left Column: Form Details */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* Returning Customer */}
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                Returning Customer?
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                For better experience and for use of a coupon please login first
              </p>
              <Link
                to="/login"
                className="text-green-600 font-semibold text-xs md:text-sm mt-2 inline-block hover:underline"
              >
                Click here to login
              </Link>
            </div>

            {/* Preferred Delivery Time */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                Preferred Delivery Time
              </h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Choose Date & time which is convenient for you
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Date*
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-xs md:text-sm p-2 md:p-2.5">
                    <option>7 Dec (Tomorrow)</option>
                    <option>8 Dec</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                    Time*
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 text-xs md:text-sm p-2 md:p-2.5">
                    <option>11:00 AM - 01:00 PM</option>
                    <option>02:00 PM - 04:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">
                Billing Details
              </h3>
              <div className="space-y-3 md:space-y-4">
                {/* Form Fields */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs md:text-sm font-medium text-gray-700"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={billingDetails.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label
                      htmlFor="district"
                      className="block text-xs md:text-sm font-medium text-gray-700"
                    >
                      District*
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={billingDetails.district}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5"
                    >
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-xs md:text-sm font-medium text-gray-700"
                    >
                      City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={billingDetails.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-xs md:text-sm font-medium text-gray-700"
                  >
                    ZIP / Postcode*
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={billingDetails.zip}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="streetAddress"
                    className="block text-xs md:text-sm font-medium text-gray-700"
                  >
                    Street address*
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    placeholder="House no & street name"
                    value={billingDetails.streetAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apartment"
                    className="block text-xs md:text-sm font-medium text-gray-700"
                  >
                    Apartment, floor, etc. (optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    id="apartment"
                    value={billingDetails.apartment}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs md:text-sm font-medium text-gray-700"
                  >
                    Phone Number*
                  </label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-xs md:text-sm">
                      +880
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={billingDetails.phone}
                      onChange={handleInputChange}
                      className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 text-xs md:text-sm p-2 md:p-2.5"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs md:text-sm font-medium text-gray-700"
                  >
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={billingDetails.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="createAccount"
                    name="createAccount"
                    type="checkbox"
                    checked={billingDetails.createAccount}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="createAccount"
                    className="ml-2 block text-xs md:text-sm text-gray-900"
                  >
                    Create an account
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Subscription */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Order Summary
              </h2>
              <div className="space-y-2 md:space-y-3">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedWeight}`}
                    className="flex justify-between items-center text-xs md:text-sm"
                  >
                    <div className="text-gray-600 max-w-[60%]">
                      <p className="truncate">{item.name}</p>
                      <p className="text-xs">
                        {item.selectedWeight} x {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-gray-800 whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="border-t pt-3 md:pt-4 mt-3 md:mt-4 space-y-2">
                  <div className="flex justify-between text-xs md:text-sm">
                    <p>SUB-TOTAL ({cart.length} ITEMS)</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-xs md:text-sm">
                    <p>TAX</p>
                    <p className="font-medium">${tax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between font-bold text-base md:text-lg text-gray-800 pt-2">
                    <p>TOTAL</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <Link to="/payment">
                <button className="w-full mt-4 md:mt-6 bg-green-600 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition text-sm md:text-base">
                  Proceed To Payment &rarr;
                </button>
              </Link>
            </div>

            {/* Subscription Order */}
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg border">
              <div className="flex items-start">
                <input
                  id="subscription"
                  name="subscription"
                  type="checkbox"
                  checked={isSubscription}
                  onChange={(e) => setIsSubscription(e.target.checked)}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded mt-1"
                />
                <div className="ml-3">
                  <label
                    htmlFor="subscription"
                    className="font-semibold text-gray-900 text-sm md:text-base"
                  >
                    Subscription Order
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    The subscription plan allows customers to schedule recurring
                    purchases at consistent intervals, such as daily or weekly.
                  </p>
                </div>
              </div>
              {isSubscription && (
                <div className="mt-4">
                  <div>
                    <label className="block text-xs md:text-sm font-medium mb-2">
                      Days*
                    </label>
                    <div className="grid grid-cols-4 md:grid-cols-3 gap-2">
                      {daysOfWeek.map((day, index) => (
                        <button
                          key={day}
                          onClick={() => handleDayToggle(fullDaysOfWeek[index])}
                          className={`py-2 px-1 text-xs rounded-md border ${
                            selectedDays.includes(fullDaysOfWeek[index])
                              ? "bg-green-600 text-white border-green-600"
                              : "bg-white"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-xs md:text-sm font-medium mb-1">
                      Weeks*
                    </label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm text-xs md:text-sm p-2 md:p-2.5">
                      <option>1 Week</option>
                      <option>2 Weeks</option>
                    </select>
                  </div>
                  <div className="mt-4 md:mt-6 flex flex-col space-y-2">
                    <button className="w-full bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700 text-xs md:text-sm">
                      Apply subscription
                    </button>
                    <button className="w-full bg-white text-gray-700 py-2 rounded-full font-semibold border hover:bg-gray-100 text-xs md:text-sm">
                      Remove Subscription
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
