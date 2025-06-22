import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../ScrollToTop";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <ScrollToTop/>
      <Header />
      <main className="flex-grow"> {/* Adjusted padding */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
