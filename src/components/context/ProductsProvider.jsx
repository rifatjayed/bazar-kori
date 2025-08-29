// import { createContext, useContext, useState } from "react";
// import productsData from "../data/Products";

// const ProductsContext = createContext();

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState(productsData[0].products);
//   const [cart, setCart] = useState([]);

//   // ✅ addToCart ফাংশনটি এখন weight প্যারামিটার গ্রহণ করবে
//   const addToCart = (productToAdd, quantity, weight) => {
//     setCart((prevCart) => {
//       // ✅ একটি আইটেম ইউনিক কিনা তা তার ID এবং selectedWeight দিয়ে চেক করা হবে
//       const existingProduct = prevCart.find(
//         (item) => item.id === productToAdd.id && item.selectedWeight === weight
//       );

//       if (existingProduct) {
//         // যদি একই প্রোডাক্ট এবং একই weight আগে থেকেই থাকে, তবে শুধু quantity আপডেট হবে
//         return prevCart.map((item) =>
//           item.id === productToAdd.id && item.selectedWeight === weight
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       } else {
//         // না থাকলে, নতুন আইটেম হিসেবে কার্টে যোগ হবে এবং selectedWeight সহ যোগ হবে
//         return [
//           ...prevCart,
//           { ...productToAdd, quantity, selectedWeight: weight },
//         ];
//       }
//     });

//     // ✅ Alert message-টি এখন weight সহ দেখাবে
//     alert(
//       `${quantity} x ${productToAdd.name} (${weight}) has been added to your cart.`
//     );
//   };

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

// export const useProducts = () => useContext(ProductsContext);

// context/ProductsContext.js

import { createContext, useContext, useState } from "react";
import productsData from "../data/Products";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData[0].products);
  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd, quantity, weight) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === productToAdd.id && item.selectedWeight === weight
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productToAdd.id && item.selectedWeight === weight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ...productToAdd, quantity, selectedWeight: weight },
        ];
      }
    });
    alert(`${quantity} x ${productToAdd.name} (${weight}) has been added.`);
  };

  // ✅ আইটেমের পরিমাণ আপডেট করার ফাংশন
  const updateQuantity = (productId, weight, newQuantity) => {
    if (newQuantity < 1) return; // পরিমাণ ১ এর কম হতে পারবে না
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.selectedWeight === weight
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // ✅ কার্ট থেকে একটি আইটেম সরানোর ফাংশন
  const removeFromCart = (productId, weight) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) => !(item.id === productId && item.selectedWeight === weight)
      )
    );
  };

  // ✅ সম্পূর্ণ কার্ট খালি করার ফাংশন
  const clearCart = () => {
    setCart([]);
  };

  const value = {
    products,
    cart,
    addToCart,
    updateQuantity, // ✅ নতুন ফাংশন এক্সপোর্ট করা হয়েছে
    removeFromCart, // ✅ নতুন ফাংশন এক্সপোর্ট করা হয়েছে
    clearCart, // ✅ নতুন ফাংশন এক্সপোর্ট করা হয়েছে
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
