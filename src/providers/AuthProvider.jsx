import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
      } catch (error) {
        toast.error("Something went wrong");
        Cookies.remove("token");
        console.log(error);
      }
    }
    setIsLoading(false);
  }, []);

  const login = (token) => {
    setIsLoading(true);
    Cookies.set("token", token, { expires: 30 });
    try {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
    } catch (error) {
      toast.error("Invalid token");
      Cookies.remove("token");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsLoading(true);
    Cookies.remove("token");
    setUser(null);
    setIsLoading(false);
  };
  const authInfo = {
    user,
    login,
    logout,
    isLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
