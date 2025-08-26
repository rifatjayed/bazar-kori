import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductsProvider } from "./components/context/ProductsProvider";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <App />
    </ProductsProvider>
  </StrictMode>
);
