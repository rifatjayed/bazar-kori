// import React, { useMemo } from "react";
// import { useProducts } from "../context/ProductsProvider";
// import { FaTrashAlt, FaCheckCircle, FaShoppingCart } from "react-icons/fa";
// import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
// import { MdOutlinePayment } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, updateQuantity, removeFromCart, clearCart } = useProducts();

//   // useMemo ব্যবহার করে ক্যালকুলেশন অপটিমাইজ করা হয়েছে
//   const { subtotal, totalItems } = useMemo(() => {
//     let subtotal = 0;
//     let totalItems = 0;
//     cart.forEach((item) => {
//       subtotal += item.price * item.quantity;
//       totalItems += item.quantity;
//     });
//     return { subtotal, totalItems };
//   }, [cart]);

//   const tax = subtotal * 0.1; // উদাহরণস্বরূপ 10% ট্যাক্স ধরা হয়েছে
//   const total = subtotal + tax;

//   if (cart.length === 0) {
//     return (
//       <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm">
//           {/* Breadcrumb */}
//           <p className="text-sm text-gray-500 mb-8">Home &gt; Cart</p>

//           {/* Progress Bar - Consistent with Payment Page Design */}
//           <div className="flex items-start justify-between mb-12 relative">
//             <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200">
//               <div
//                 className="absolute top-0 left-0 h-full bg-green-500"
//                 style={{ width: "0%" }}
//               ></div>
//             </div>
//             {["Cart", "Checkout", "Payment process", "Order complete"].map(
//               (step, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center z-10 w-1/4"
//                 >
//                   <div
//                     className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
//                       index === 0
//                         ? "bg-green-100 border-green-500 text-green-500"
//                         : "bg-white border-gray-300 text-gray-300"
//                     }`}
//                   >
//                     {index === 0 ? (
//                       <FaShoppingCart size={20} />
//                     ) : index === 1 ? (
//                       <FaShoppingCart size={20} />
//                     ) : index === 2 ? (
//                       <MdOutlinePayment size={20} />
//                     ) : (
//                       <FaShoppingCart size={20} />
//                     )}
//                   </div>
//                   <p
//                     className={`mt-2 text-sm text-center font-medium ${
//                       index === 0 ? "text-gray-800" : "text-gray-400"
//                     }`}
//                   >
//                     {step}
//                   </p>
//                 </div>
//               )
//             )}
//           </div>

//           <div className="text-center py-12">
//             <FiShoppingCart className="mx-auto text-6xl text-gray-300" />
//             <h2 className="mt-6 text-2xl font-semibold text-gray-800">
//               Your Cart is Empty
//             </h2>
//             <p className="mt-2 text-gray-500">
//               Looks like you haven't added anything to your cart yet.
//             </p>
//             <Link
//               to="/shop"
//               className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
//             >
//               Start Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

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
//               style={{ width: "0%" }}
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
//                     index === 0
//                       ? "bg-green-100 border-green-500 text-green-500"
//                       : "bg-white border-gray-300 text-gray-300"
//                   }`}
//                 >
//                   {index === 0 ? (
//                     <FaShoppingCart size={20} />
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
//                     index === 0 ? "text-gray-800" : "text-gray-400"
//                   }`}
//                 >
//                   {step}
//                 </p>
//               </div>
//             )
//           )}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Cart Items - Left Column */}
//           <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg">
//             <div className="grid grid-cols-6 gap-4 font-semibold text-gray-600 border-b pb-4 mb-4">
//               <div className="col-span-3">Products</div>
//               <div>Price</div>
//               <div>Quantity</div>
//               <div className="text-right">Subtotal</div>
//             </div>

//             {cart.map((item) => (
//               <div
//                 key={`${item.id}-${item.selectedWeight}`}
//                 className="grid grid-cols-6 gap-4 items-center border-b py-4"
//               >
//                 {/* Product */}
//                 <div className="col-span-3 flex items-center gap-4">
//                   <img
//                     src={item.images.main}
//                     alt={item.name}
//                     className="w-16 h-16 object-cover rounded-md"
//                   />
//                   <div>
//                     <p className="font-semibold text-gray-800">{item.name}</p>
//                     <p className="text-sm text-gray-500">
//                       {item.selectedWeight}
//                     </p>
//                   </div>
//                 </div>
//                 {/* Price */}
//                 <div>${item.price.toFixed(2)}</div>
//                 {/* Quantity */}
//                 <div className="flex items-center border rounded-full w-fit">
//                   <button
//                     onClick={() =>
//                       updateQuantity(
//                         item.id,
//                         item.selectedWeight,
//                         item.quantity - 1
//                       )
//                     }
//                     className="p-2 text-gray-500 hover:text-black transition disabled:opacity-50"
//                     disabled={item.quantity === 1}
//                   >
//                     <FiMinus />
//                   </button>
//                   <span className="px-3 font-semibold">{item.quantity}</span>
//                   <button
//                     onClick={() =>
//                       updateQuantity(
//                         item.id,
//                         item.selectedWeight,
//                         item.quantity + 1
//                       )
//                     }
//                     className="p-2 text-gray-500 hover:text-black transition"
//                     disabled={item.quantity >= item.stock}
//                   >
//                     <FiPlus />
//                   </button>
//                 </div>
//                 {/* Subtotal */}
//                 <div className="text-right flex items-center justify-end gap-4">
//                   <p className="font-semibold text-gray-800">
//                     ${(item.price * item.quantity).toFixed(2)}
//                   </p>
//                   <button
//                     onClick={() => removeFromCart(item.id, item.selectedWeight)}
//                     className="text-gray-400 hover:text-red-500"
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <button
//               onClick={clearCart}
//               className="mt-6 text-sm text-red-500 hover:underline"
//             >
//               Delete all from cart
//             </button>
//           </div>

//           {/* Order Summary - Right Column */}
//           <div className="space-y-6">
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//               <div className="space-y-3 text-gray-600">
//                 <div className="flex justify-between">
//                   <p>SUB-TOTAL ({totalItems} ITEMS)</p>
//                   <p className="font-semibold">${subtotal.toFixed(2)}</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p>TAX</p>
//                   <p className="font-semibold">${tax.toFixed(2)}</p>
//                 </div>
//                 <div className="border-t pt-4 mt-4">
//                   <p className="text-sm text-gray-500">SHIPPING</p>
//                   <p className="text-xs">
//                     To calculate shipping price enter your address
//                   </p>
//                   <a
//                     href="#"
//                     className="text-sm text-green-600 hover:underline"
//                   >
//                     Calculate shipping &gt;
//                   </a>
//                 </div>
//                 <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-4 mt-4">
//                   <p>TOTAL</p>
//                   <p>${total.toFixed(2)}</p>
//                 </div>
//               </div>
//               <Link to="/checkout">
//                 <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
//                   Proceed To Checkout &rarr;
//                 </button>
//               </Link>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-lg">
//               <h3 className="font-semibold mb-2">HAVE A COUPON?</h3>
//               <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm p-3 rounded-md">
//                 Coupons are available for{" "}
//                 <b className="font-semibold">logged-in users only.</b> Please
//                 log in to use a coupon.
//               </div>
//               <a
//                 href="#"
//                 className="text-green-600 font-semibold mt-3 inline-block hover:underline"
//               >
//                 Click here to login
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useMemo } from "react";
import { useProducts } from "../context/ProductsProvider";
import { FaTrashAlt, FaCheckCircle, FaShoppingCart } from "react-icons/fa";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { MdOutlinePayment } from "react-icons/md";
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
      <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-sm">
          {/* Breadcrumb */}
          <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8">
            Home &gt; Cart
          </p>

          {/* Progress Bar - Consistent with Payment Page Design */}
          <div className="flex items-start justify-between mb-8 md:mb-12 relative">
            <div className="absolute top-4 md:top-5 left-0 w-full h-0.5 bg-gray-200">
              <div
                className="absolute top-0 left-0 h-full bg-green-500"
                style={{ width: "0%" }}
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
                      index === 0
                        ? "bg-green-100 border-green-500 text-green-500"
                        : "bg-white border-gray-300 text-gray-300"
                    }`}
                  >
                    {index === 0 ? (
                      <FaShoppingCart size={16} className="md:size-5" />
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
                      index === 0 ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {step}
                  </p>
                </div>
              )
            )}
          </div>

          <div className="text-center py-8 md:py-12">
            <FiShoppingCart className="mx-auto text-4xl md:text-6xl text-gray-300" />
            <h2 className="mt-4 md:mt-6 text-xl md:text-2xl font-semibold text-gray-800">
              Your Cart is Empty
            </h2>
            <p className="mt-1 md:mt-2 text-sm md:text-base text-gray-500">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/shop"
              className="mt-4 md:mt-6 inline-block bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition text-sm md:text-base"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-4 md:p-8 rounded-lg shadow-sm">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8">
          Home &gt; Cart
        </p>

        {/* Progress Bar - Consistent with Payment Page Design */}
        <div className="flex items-start justify-between mb-8 md:mb-12 relative">
          <div className="absolute top-4 md:top-5 left-0 w-full h-0.5 bg-gray-200">
            <div
              className="absolute top-0 left-0 h-full bg-green-500"
              style={{ width: "0%" }}
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
                    index === 0
                      ? "bg-green-100 border-green-500 text-green-500"
                      : "bg-white border-gray-300 text-gray-300"
                  }`}
                >
                  {index === 0 ? (
                    <FaShoppingCart size={16} className="md:size-5" />
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
                    index === 0 ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step}
                </p>
              </div>
            )
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items - Left Column */}
          <div className="lg:col-span-2 bg-gray-50 p-4 md:p-6 rounded-lg">
            <div className="hidden md:grid grid-cols-6 gap-4 font-semibold text-gray-600 border-b pb-4 mb-4">
              <div className="col-span-3">Products</div>
              <div>Price</div>
              <div>Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>

            {cart.map((item) => (
              <div
                key={`${item.id}-${item.selectedWeight}`}
                className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center border-b py-4 relative"
              >
                {/* Product - Mobile layout */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <img
                    src={item.images.main}
                    alt={item.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm md:text-base">
                      {item.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {item.selectedWeight}
                    </p>
                    <div className="md:hidden flex justify-between items-center mt-2">
                      <div className="text-sm font-semibold">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="flex items-center border rounded-full w-fit">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedWeight,
                              item.quantity - 1
                            )
                          }
                          className="p-1 md:p-2 text-gray-500 hover:text-black transition disabled:opacity-50"
                          disabled={item.quantity === 1}
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="px-2 md:px-3 font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedWeight,
                              item.quantity + 1
                            )
                          }
                          className="p-1 md:p-2 text-gray-500 hover:text-black transition"
                          disabled={item.quantity >= item.stock}
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price - Desktop only */}
                <div className="hidden md:block">${item.price.toFixed(2)}</div>

                {/* Quantity - Desktop only */}
                <div className="hidden md:flex items-center border rounded-full w-fit">
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

                {/* Subtotal and Delete */}
                <div className="md:col-span-1 flex items-center justify-between md:justify-end gap-4">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-800 text-sm md:text-base">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <span className="md:hidden text-xs text-gray-500">
                      Subtotal
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedWeight)}
                    className="text-gray-400 hover:text-red-500 p-1"
                  >
                    <FaTrashAlt size={14} className="md:size-4" />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="mt-4 md:mt-6 text-xs md:text-sm text-red-500 hover:underline flex items-center gap-1"
            >
              <FaTrashAlt size={12} className="md:size-3" />
              Delete all from cart
            </button>
          </div>

          {/* Order Summary - Right Column */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Order Summary
              </h2>
              <div className="space-y-2 md:space-y-3 text-gray-600">
                <div className="flex justify-between text-sm md:text-base">
                  <p>SUB-TOTAL ({totalItems} ITEMS)</p>
                  <p className="font-semibold">${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <p>TAX</p>
                  <p className="font-semibold">${tax.toFixed(2)}</p>
                </div>
                <div className="border-t pt-3 mt-3">
                  <p className="text-xs md:text-sm text-gray-500">SHIPPING</p>
                  <p className="text-xs">
                    To calculate shipping price enter your address
                  </p>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-green-600 hover:underline"
                  >
                    Calculate shipping &gt;
                  </a>
                </div>
                <div className="flex justify-between font-bold text-base md:text-lg text-gray-800 border-t pt-3 mt-3">
                  <p>TOTAL</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
              <Link to="/checkout">
                <button className="w-full mt-4 md:mt-6 bg-green-600 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-green-700 transition text-sm md:text-base">
                  Proceed To Checkout &rarr;
                </button>
              </Link>
            </div>

            <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                HAVE A COUPON?
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs md:text-sm p-2 md:p-3 rounded-md">
                Coupons are available for{" "}
                <b className="font-semibold">logged-in users only.</b> Please
                log in to use a coupon.
              </div>
              <a
                href="#"
                className="text-green-600 font-semibold mt-2 md:mt-3 inline-block hover:underline text-xs md:text-sm"
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
