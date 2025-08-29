// components/Cart.js

import React, { useMemo } from "react";
import { useProducts } from "../context/ProductsProvider";
import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useProducts();

  // useMemo ব্যবহার করে ক্যালকুলেশন অপটিমাইজ করা হয়েছে
  const { subtotal, totalItems } = useMemo(() => {
    let subtotal = 0;
    let totalItems = 0;
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
      totalItems += item.quantity;
    });
    return { subtotal, totalItems };
  }, [cart]);

  const tax = subtotal * 0.1; // উদাহরণস্বরূপ 10% ট্যাক্স ধরা হয়েছে
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <FiShoppingCart className="mx-auto text-6xl text-gray-300" />
        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Your Cart is Empty
        </h2>
        <p className="mt-2 text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-green-600">
            Home
          </Link>
          <span className="mx-2">&gt;</span>
          <span>Cart</span>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center mb-12">
          {["Cart", "Checkout", "Payment process", "Order complete"].map(
            (step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index === 0
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index === 0 ? (
                      <FaCheckCircle />
                    ) : (
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      index === 0 ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </p>
                </div>
                {index < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      index === 0 ? "bg-green-600" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            )
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items - Left Column */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-6 gap-4 font-semibold text-gray-600 border-b pb-4 mb-4">
              <div className="col-span-3">Products</div>
              <div>Price</div>
              <div>Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>

            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedWeight}`}
                className="grid grid-cols-6 gap-4 items-center border-b py-4"
              >
                {/* Product */}
                <div className="col-span-3 flex items-center gap-4">
                  <img
                    src={item.images.main}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.selectedWeight}
                    </p>
                  </div>
                </div>
                {/* Price */}
                <div>${item.price.toFixed(2)}</div>
                {/* Quantity */}
                <div className="flex items-center border rounded-full w-fit">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.selectedWeight,
                        item.quantity - 1
                      )
                    }
                    className="p-2 text-gray-500 hover:text-black transition disabled:opacity-50"
                    disabled={item.quantity === 1}
                  >
                    <FiMinus />
                  </button>
                  <span className="px-3 font-semibold">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.selectedWeight,
                        item.quantity + 1
                      )
                    }
                    className="p-2 text-gray-500 hover:text-black transition"
                    disabled={item.quantity >= item.stock}
                  >
                    <FiPlus />
                  </button>
                </div>
                {/* Subtotal */}
                <div className="text-right flex items-center justify-end gap-4">
                  <p className="font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedWeight)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="mt-6 text-sm text-red-500 hover:underline"
            >
              Delete all from cart
            </button>
          </div>

          {/* Order Summary - Right Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 border-b pb-4">
                Order Summary
              </h2>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <p>SUB-TOTAL ({totalItems} ITEMS)</p>
                  <p className="font-semibold">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between">
                  <p>TAX</p>
                  <p className="font-semibold">${tax.toFixed(2)}</p>
                </div>
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-gray-500">SHIPPING</p>
                  <p className="text-xs">
                    To calculate shipping price enter your address
                  </p>
                  <a
                    href="#"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Calculate shipping &gt;
                  </a>
                </div>
                <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-4 mt-4">
                  <p>TOTAL</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              <Link to="/checkout">
                <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition">
                  Proceed To Checkout &rarr;
                </button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">HAVE A COUPON?</h3>
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm p-3 rounded-md">
                Coupons are available for{" "}
                <b className="font-semibold">logged-in users only.</b> Please
                log in to use a coupon.
              </div>
              <a
                href="#"
                className="text-green-600 font-semibold mt-3 inline-block hover:underline"
              >
                Click here to login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import React, { useState, useMemo, useEffect } from "react";
// import { useProducts } from "../context/ProductsProvider";
// import { FaTrashAlt, FaCheckCircle } from "react-icons/fa";
// import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, updateQuantity, removeFromCart, clearCart } = useProducts();

//   // ✅ কোন আইটেমগুলো সিলেক্ট করা হয়েছে তা ট্র্যাক করার জন্য নতুন state
//   const [selectedItems, setSelectedItems] = useState([]);

//   // ✅ যখন কার্ট পরিবর্তন হয়, তখন সিলেক্টেড আইটেমগুলো রিসেট করার জন্য useEffect
//   useEffect(() => {
//     // প্রাথমিকভাবে সব আইটেম সিলেক্টেড থাকবে
//     const allItemIds = cart.map((item) => `${item.id}-${item.selectedWeight}`);
//     setSelectedItems(allItemIds);
//   }, [cart]);

//   // ✅ একটি আইটেম সিলেক্ট বা আনসিলেক্ট করার হ্যান্ডলার
//   const handleSelectItem = (itemId) => {
//     setSelectedItems(
//       (prev) =>
//         prev.includes(itemId)
//           ? prev.filter((id) => id !== itemId) // আনসিলেক্ট
//           : [...prev, itemId] // সিলেক্ট
//     );
//   };

//   // ✅ সব আইটেম একসাথে সিলেক্ট বা আনসিলেক্ট করার হ্যান্ডলার
//   const handleSelectAll = (e) => {
//     if (e.target.checked) {
//       const allItemIds = cart.map(
//         (item) => `${item.id}-${item.selectedWeight}`
//       );
//       setSelectedItems(allItemIds);
//     } else {
//       setSelectedItems([]);
//     }
//   };

//   // ✅ ক্যালকুলেশন এখন শুধুমাত্র সিলেক্টেড আইটেমের ওপর ভিত্তি করে হবে
//   const { subtotal, totalItems } = useMemo(() => {
//     let subtotal = 0;
//     let totalItems = 0;

//     cart.forEach((item) => {
//       const itemId = `${item.id}-${item.selectedWeight}`;
//       if (selectedItems.includes(itemId)) {
//         // যদি আইটেমটি সিলেক্টেড থাকে
//         subtotal += item.price * item.quantity;
//         totalItems += item.quantity;
//       }
//     });

//     return { subtotal, totalItems };
//   }, [cart, selectedItems]);

//   const tax = subtotal * 0.1; // 10% tax
//   const total = subtotal + tax;

//   if (cart.length === 0) {
//     // ... (Your empty cart UI remains the same)
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* ... (Breadcrumbs and Stepper remain the same) ... */}

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Cart Items - Left Column */}
//           <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
//             {/* ✅ হেডার আপডেট করা হয়েছে */}
//             <div className="grid grid-cols-12 gap-4 font-semibold text-gray-600 border-b pb-4 mb-4 items-center">
//               <div className="col-span-1">
//                 <input
//                   type="checkbox"
//                   className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
//                   onChange={handleSelectAll}
//                   checked={
//                     cart.length > 0 && selectedItems.length === cart.length
//                   }
//                 />
//               </div>
//               <div className="col-span-5">Products</div>
//               <div className="col-span-2">Price</div>
//               <div className="col-span-2">Quantity</div>
//               <div className="col-span-2 text-right">Subtotal</div>
//             </div>

//             {cart.map((item) => {
//               const itemId = `${item.id}-${item.selectedWeight}`;
//               const isSelected = selectedItems.includes(itemId);

//               return (
//                 <div
//                   key={itemId}
//                   className="grid grid-cols-12 gap-4 items-center border-b py-4"
//                 >
//                   {/* ✅ প্রতিটি আইটেমের জন্য চেকবক্স যোগ করা হয়েছে */}
//                   <div className="col-span-1">
//                     <input
//                       type="checkbox"
//                       className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
//                       checked={isSelected}
//                       onChange={() => handleSelectItem(itemId)}
//                     />
//                   </div>
//                   {/* Product */}
//                   <div className="col-span-5 flex items-center gap-4">
//                     <img
//                       src={item.images.main}
//                       alt={item.name}
//                       className="w-16 h-16 object-cover rounded-md"
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800">{item.name}</p>
//                       <p className="text-sm text-gray-500">
//                         {item.selectedWeight}
//                       </p>
//                     </div>
//                   </div>
//                   {/* Price */}
//                   <div className="col-span-2">${item.price.toFixed(2)}</div>
//                   {/* Quantity */}
//                   <div className="col-span-2 flex items-center border rounded-full w-fit">
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           itemId.split("-")[0],
//                           item.selectedWeight,
//                           item.quantity - 1
//                         )
//                       }
//                       className="p-2 text-gray-500 hover:text-black transition disabled:opacity-50"
//                       disabled={item.quantity === 1}
//                     >
//                       <FiMinus />
//                     </button>
//                     <span className="px-3 font-semibold">{item.quantity}</span>
//                     <button
//                       onClick={() =>
//                         updateQuantity(
//                           itemId.split("-")[0],
//                           item.selectedWeight,
//                           item.quantity + 1
//                         )
//                       }
//                       className="p-2 text-gray-500 hover:text-black transition"
//                       disabled={item.quantity >= item.stock}
//                     >
//                       <FiPlus />
//                     </button>
//                   </div>
//                   {/* Subtotal */}
//                   <div className="text-right flex items-center justify-end gap-4 col-span-2">
//                     <p className="font-semibold text-gray-800">
//                       ${(item.price * item.quantity).toFixed(2)}
//                     </p>
//                     <button
//                       onClick={() =>
//                         removeFromCart(
//                           itemId.split("-")[0],
//                           item.selectedWeight
//                         )
//                       }
//                       className="text-gray-400 hover:text-red-500"
//                     >
//                       <FaTrashAlt />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}

//             <button
//               onClick={clearCart}
//               className="mt-6 text-sm text-red-500 hover:underline"
//             >
//               Delete all from cart
//             </button>
//           </div>

//           {/* Order Summary - Right Column */}
//           <div className="space-y-6">
//             <div className="bg-white p-6 rounded-lg shadow-sm">
//               <h2 className="text-xl font-semibold mb-4 border-b pb-4">
//                 Order Summary
//               </h2>
//               <div className="space-y-3 text-gray-600">
//                 {/* ✅ অর্ডার সামারি এখন সিলেক্টেড আইটেমের সংখ্যা দেখাবে */}
//                 <div className="flex justify-between">
//                   <p>SUB-TOTAL ({totalItems} ITEMS)</p>
//                   <p className="font-semibold">${subtotal.toFixed(2)}</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p>TAX</p>
//                   <p className="font-semibold">${tax.toFixed(2)}</p>
//                 </div>
//                 {/* ... Shipping section remains the same ... */}
//                 <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-4 mt-4">
//                   <p>TOTAL</p>
//                   <p>${total.toFixed(2)}</p>
//                 </div>
//               </div>
//               <button
//                 className="w-full mt-6 bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition disabled:opacity-50"
//                 disabled={selectedItems.length === 0}
//               >
//                 Proceed To Checkout &rarr;
//               </button>
//             </div>

//             {/* ... (Coupon Section remains the same) ... */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
