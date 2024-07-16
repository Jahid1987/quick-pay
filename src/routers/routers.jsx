import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Transactions from "../pages/Transactions";
import Home from "../pages/Home";
import SendMoney from "../pages/SendMoney";
import PrivateRoute from "./privateRoute";
import Cashout from "../pages/Cashout";
import Cashin from "../pages/Cashin";
import Paybill from "../pages/Paybill";
import CheckBalance from "../pages/CheckBalance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h3>Page not found</h3>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "/transactions",
        element: (
          <PrivateRoute>
            <Transactions />
          </PrivateRoute>
        ),
      },
      {
        path: "/sendmoney",
        element: (
          <PrivateRoute>
            <SendMoney />
          </PrivateRoute>
        ),
      },
      {
        path: "/cashout",
        element: (
          <PrivateRoute>
            <Cashout />
          </PrivateRoute>
        ),
      },
      {
        path: "/cashin",
        element: (
          <PrivateRoute>
            <Cashin />
          </PrivateRoute>
        ),
      },
      {
        path: "/paybill",
        element: (
          <PrivateRoute>
            <Paybill />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkbalance",
        element: (
          <PrivateRoute>
            <CheckBalance />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
