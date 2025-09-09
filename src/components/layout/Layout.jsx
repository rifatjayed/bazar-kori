import { Outlet } from "react-router-dom";
import Header from "../Header";
import Topbar from "../TopBar";
import Footer from "../footer/Footer";
import Navbar from "../Navbar";

export default function Layout() {
  return (
    <>
      {/* <Topbar></Topbar>
      <Header></Header> */}
      <Navbar></Navbar>
      <main className="flex flex-col  ">
        <Outlet />
      </main>

      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
}
