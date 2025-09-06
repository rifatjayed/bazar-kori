// import Category from "./components/category/Category";
// import DealsSection from "./components/DealsSection";
// import Header from "./components/Header";
// import ProductGrid from "./components/products/Products";
// import Service from "./components/Service";
// import ShopByBrands from "./components/brands/ShopByBrands";
// import NewsletterSection from "./components/NewsletterSection/NewsletterSection";
// import ProductDetails from "./components/productsDetails/ProductDetails";
// import Shop from "./components/Shop/Shop";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./components/layout/Layout";
// import Home from "./pages/Home";
// import Cart from "./components/Cart/Cart";
// import Checkout from "./components/Cart/CheakOut";
// import PaymentPage from "./components/Cart/PaymentPage";
// import OrderComplete from "./components/Cart/OrderComplete";
// import ContactPage from "./pages/ContactPage";
// import SignUpForm from "./pages/SignUp";
// import Dashboard from "./components/dashboard/Dashboard";
// import AccountDetails from "./components/dashboard/AccountDetails";
// import Order from "./components/dashboard/Order";
// import Address from "./components/dashboard/Address";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",
//           element: <Home />,
//         },
//         {
//           path: "/shop",
//           element: <Shop></Shop>,
//         },
//         {
//           path: "/contact",
//           element: <ContactPage></ContactPage>,
//         },
//         {
//           path: "/signup",
//           element: <SignUpForm></SignUpForm>,
//         },
//         {
//           path: "/product/:id",
//           element: <ProductDetails></ProductDetails>,
//         },
//         {
//           path: "/cart",
//           element: <Cart></Cart>,
//         },
//         {
//           path: "/checkout",
//           element: <Checkout></Checkout>,
//         },
//         {
//           path: "/payment",
//           element: <PaymentPage></PaymentPage>,
//         },
//         {
//           path: "/order",
//           element: <OrderComplete></OrderComplete>,
//         },
//         {
//           path: "/dashboard",
//           element: <Dashboard></Dashboard>,
//         },
//         {
//           path: "/orders",
//           element: <Order></Order>,
//         },
//         {
//           path: "/account",
//           element: <AccountDetails></AccountDetails>,
//         },
//         {
//           path: "/addresses",
//           element: <Address></Address>,
//         },
//       ],
//     },
//   ]);
//   Checkout;

//   return (
//     <>
//       {/* <Header></Header>
//       <Category></Category>
//       <Service></Service>
//       <ProductGrid></ProductGrid>
//       <DealsSection></DealsSection>
//       <ShopByBrands></ShopByBrands>

//       <NewsletterSection></NewsletterSection> */}
//       {/*

//       <ProductDetails></ProductDetails> */}

//       {/* <Shop></Shop> */}

//       <div>
//         <main className="overflow-x-hidden">
//           <RouterProvider router={router} />
//         </main>
//       </div>
//     </>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Shop from "./components/Shop/Shop";
import ContactPage from "./pages/ContactPage";
import SignUpForm from "./pages/signin/SignUpForm";
import ProductDetails from "./components/productsDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Cart/CheakOut";
import PaymentPage from "./components/Cart/PaymentPage";
import OrderComplete from "./components/Cart/OrderComplete";
// import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./components/dashboard/Dashboard";
import AccountDetails from "./components/dashboard/AccountDetails";
// import Order from "./components/dashboard/Order";
import Address from "./components/dashboard/Address";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Order from "./components/dashboard/Order";
import AddressPage from "./components/dashboard/AddressPage";
import SignInForm from "./pages/signin/SignInForm";
import ForgotPassword from "./pages/signin/ForgotPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/signup", element: <SignUpForm /> },
        { path: "/product/:id", element: <ProductDetails /> },
        { path: "/cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/payment", element: <PaymentPage /> },
        { path: "/order", element: <OrderComplete /> },
        { path: "/signIn", element: <SignInForm /> },
        { path: "/forgotPassword", element: <ForgotPassword /> },
        // 👉 Dashboard routes (nested)
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: [
            { index: true, element: <Navigate to="overview" /> },
            { path: "overview", element: <Dashboard /> },
            { path: "orders", element: <Order /> },
            { path: "account", element: <AccountDetails /> },
            { path: "addresses", element: <AddressPage /> },
          ],
        },
      ],
    },
  ]);

  return (
    <main className="overflow-x-hidden">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
