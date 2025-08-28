// import { createContext, useContext, useState } from "react";
// import productsData from "../data/Products"; // data import

// // Context তৈরি
// const ProductsContext = createContext();

// // Provider
// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState(productsData[0].products);

//   // ✅ কার্টের জন্য নতুন state যোগ করা হয়েছে
//   const [cart, setCart] = useState([]);

//   // ✅ কার্টে প্রোডাক্ট যোগ করার ফাংশন
//   const addToCart = (productToAdd, quantity) => {
//     setCart((prevCart) => {
//       // প্রোডাক্টটি আগে থেকেই কার্টে আছে কিনা তা চেক করা হচ্ছে
//       const existingProduct = prevCart.find(
//         (item) => item.id === productToAdd.id
//       );

//       if (existingProduct) {
//         // যদি প্রোডাক্টটি আগে থেকেই থাকে, তবে শুধু তার quantity আপডেট হবে
//         return prevCart.map((item) =>
//           item.id === productToAdd.id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         // যদি না থাকে, তবে নতুন প্রোডাক্ট হিসেবে কার্টে যোগ হবে
//         return [...prevCart, { ...productToAdd, quantity }];
//       }
//     });

//     // ব্যবহারকারীকে ফিডব্যাক দেওয়ার জন্য একটি alert
//     alert(`${quantity} x ${productToAdd.name} has been added to your cart.`);
//   };

//   // ✅ value অবজেক্টে cart এবং addToCart যোগ করা হয়েছে
//   const value = {
//     products,
//     cart,
//     addToCart,
//   };

//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// // custom hook
// export const useProducts = () => useContext(ProductsContext);

// context/ProductsContext.js

import { createContext, useContext, useState } from "react";
import productsData from "../data/Products";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData[0].products);
  const [cart, setCart] = useState([]);

  // ✅ addToCart ফাংশনটি এখন weight প্যারামিটার গ্রহণ করবে
  const addToCart = (productToAdd, quantity, weight) => {
    setCart((prevCart) => {
      // ✅ একটি আইটেম ইউনিক কিনা তা তার ID এবং selectedWeight দিয়ে চেক করা হবে
      const existingProduct = prevCart.find(
        (item) => item.id === productToAdd.id && item.selectedWeight === weight
      );

      if (existingProduct) {
        // যদি একই প্রোডাক্ট এবং একই weight আগে থেকেই থাকে, তবে শুধু quantity আপডেট হবে
        return prevCart.map((item) =>
          item.id === productToAdd.id && item.selectedWeight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // না থাকলে, নতুন আইটেম হিসেবে কার্টে যোগ হবে এবং selectedWeight সহ যোগ হবে
        return [
          ...prevCart,
          { ...productToAdd, quantity, selectedWeight: weight },
        ];
      }
    });

    // ✅ Alert message-টি এখন weight সহ দেখাবে
    alert(
      `${quantity} x ${productToAdd.name} (${weight}) has been added to your cart.`
    );
  };

  const value = {
    products,
    cart,
    addToCart,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
