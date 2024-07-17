import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import bars from "../assets/bars.svg";
const Nav = ({ toggleDrawer, navLinks }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-base-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <span className="p-2 bg-purple-100 rounded-full lg:hidden">
            <img onClick={toggleDrawer} className="w-6" src={bars} alt="bars" />
          </span>
          <Link to="/" className="btn btn-ghost hover:bg-purple-300 text-xl">
            Quick Pay
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user == null ? (
            <>
              <Link to="register" className="btn btn-link">
                Register
              </Link>
              <Link to="login" className="btn btn-link">
                Login
              </Link>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={user.photo} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-sm z-[1] mt-3 w-52 p-2 shadow space-y-3"
                >
                  <li>
                    <a className="justify-between">
                      <span className="font-bold">{user?.name}</span>
                      <span className="badge bg-purple-100">{user?.role}</span>
                    </a>
                  </li>
                  <li>
                    <a className="font-bold">{user?.email}</a>
                  </li>
                  <li>
                    <a
                      className="btn btn-sm w-full bg-purple-200"
                      onClick={logout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
