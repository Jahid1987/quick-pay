import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link } from "react-router-dom";
const DrawerContainer = ({ isOpen, toggleDrawer, navLinks }) => {
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        {/* navLinks  */}
        <div className="p-5 mt-5">
          <Link
            to="/"
            className="text-xl text-black border-b-2 border-purple-200"
          >
            Quick Pay
          </Link>
          <ul className="space-y-3 mt-5 ">{navLinks}</ul>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerContainer;
