import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Transactions from "../pages/Transactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <h3>Page not found</h3>,
    children: [
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
        element: <Transactions />,
      },
    ],
  },
]);

export default router;
