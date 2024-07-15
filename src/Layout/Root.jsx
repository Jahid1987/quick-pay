import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div className="">
      <Nav />
      <div className="min-h-[calc(100vh-118px)] container mx-auto px-2">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
