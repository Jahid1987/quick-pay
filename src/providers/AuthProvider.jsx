import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) return;
    try {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    } catch (error) {
      toast.error("Something went wrong");
      Cookies.remove("token");
      console.log(error);
    }
  }, []);

  const login = (token) => {
    Cookies.set("token", token, { expires: 30 });
    const decodedUser = jwtDecode(token);
    setUser(decodedUser);
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
  };
  const authInfo = {
    user,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
