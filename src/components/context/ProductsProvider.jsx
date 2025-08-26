// context/ProductsContext.js
import { createContext, useContext, useState } from "react";
import productsData from "../data/Products"; // data import

// Context তৈরি
const ProductsContext = createContext();

// Provider
export const ProductsProvider = ({ children }) => {
  // const [products, setProducts] = useState(productsData);
  const [products, setProducts] = useState(productsData[0].products);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

// custom hook
export const useProducts = () => useContext(ProductsContext);
