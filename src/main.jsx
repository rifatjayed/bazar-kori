import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProductsProvider } from "./components/context/ProductsProvider";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./components/context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>
);
