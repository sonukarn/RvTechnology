import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Layout() {
  const location = useLocation();
  const hideLayoutFor = ["/microsoft-365"];

  const shouldHideLayout = hideLayoutFor.includes(location.pathname);
  return (
    <div className="min-h-screen">
      {!shouldHideLayout && <Navbar />}
      <main className="">{<Outlet />}</main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
}
