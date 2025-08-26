import { Outlet } from "react-router-dom";
import Header from "../Header";
import Topbar from "../TopBar";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <Topbar></Topbar>
      <Header></Header>
      <main className="flex flex-col  gap-20">
        <Outlet />
      </main>

      <div className="">
        <Footer></Footer>
      </div>
    </>
  );
}
