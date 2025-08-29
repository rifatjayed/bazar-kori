import Category from "./components/category/Category";
import DealsSection from "./components/DealsSection";
import Header from "./components/Header";
import ProductGrid from "./components/products/Products";
import Service from "./components/Service";
import ShopByBrands from "./components/brands/ShopByBrands";
import NewsletterSection from "./components/NewsletterSection/NewsletterSection";
import ProductDetails from "./components/productsDetails/ProductDetails";
import Shop from "./components/Shop/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/CheakOut";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
        {
          path: "/product/:id",
          element: <ProductDetails></ProductDetails>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
        {
          path: "/checkout",
          element: <Checkout></Checkout>,
        },
      ],
    },
  ]);
  Checkout;

  return (
    <>
      {/* <Header></Header>
      <Category></Category>
      <Service></Service>
      <ProductGrid></ProductGrid>
      <DealsSection></DealsSection>
      <ShopByBrands></ShopByBrands>



      <NewsletterSection></NewsletterSection> */}
      {/* 


      <ProductDetails></ProductDetails> */}

      {/* <Shop></Shop> */}

      <div>
        <main className="overflow-x-hidden">
          <RouterProvider router={router} />
        </main>
      </div>
    </>
  );
}

export default App;
