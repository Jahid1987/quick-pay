import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  const location = useLocation();
  if (isLoading) return <p>loading ...</p>;
  if (user !== null) return children;
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
