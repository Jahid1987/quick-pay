import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-[calc(100vh-120px)] container mx-auto px-2">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
