import { useContext, useState } from "react";
import DrawerContainer from "./Drawer";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Overview</NavLink>
      </li>
      {user?.role !== "admin" && (
        <>
          <li>
            <NavLink to="/transactions">Transactions</NavLink>
          </li>
          <li>
            <NavLink to="/checkbalance">Check Balance</NavLink>
          </li>
        </>
      )}
      {user?.role === "admin" && (
        <>
          <li>
            <NavLink to="/users">All Users</NavLink>
          </li>
          <li>
            <NavLink to="/alltransections">All Transections</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="">
      <DrawerContainer
        navLinks={navLinks}
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
      />
      <Nav navLinks={navLinks} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Navbar;
