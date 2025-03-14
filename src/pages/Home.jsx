import Card from "../components/Card";
import arrowup from "../assets/arrowup.svg";
import arrowdown from "../assets/arrowdown.svg";
import paybill from "../assets/paybill.svg";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import { axiosSecure } from "../hooks/useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";
import RecentTransections from "../components/RecentTransections";
import useAxiosSecured from "../hooks/useAxiosSecured";

const Home = () => {
  const { user } = useContext(AuthContext);
  const axiosSecured = useAxiosSecured();
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    if (user) {
      axiosSecured
        .get(`/users/${user?.mobile}`)
        .then((data) => setUserDetails(data?.data))
        .catch(() => setUserDetails(null));
    }
  }, [user]);
  return (
    <main>
      {user && user?.role !== "admin" && (
        <section className="w-10/12 md:w-1/2 mx-auto py-5 md:pt-8 text-center">
          <h4 className="text-[#8D8D8D] font-medium">Total Balance: </h4>
          <h3 className="font-bold text-3xl">${userDetails?.balance}</h3>
        </section>
      )}

      {/* services */}
      <section className="grid grid-cols-2 place-items-center gap-5 py-5 md:py-8 w-full md:w-1/2 mx-auto">
        <Link to="/sendmoney">
          <Card arrow={arrowup} text="Send Money" bg="#B3DD62" />
        </Link>
        <Link to="/cashout">
          <Card arrow={arrowup} text="Cash Out" bg="#BEB1F5" />
        </Link>
        <Link to="/cashin">
          <Card arrow={arrowdown} text="Cash In" bg="#E3CEF8" />
        </Link>
        <Link to="/paybill">
          <Card arrow={paybill} text="Pay Bill" bg="#FFFFFF" />
        </Link>
      </section>
      {/* recent Transections */}
      {user && user?.role !== "admin" && <RecentTransections />}
    </main>
  );
};

export default Home;
