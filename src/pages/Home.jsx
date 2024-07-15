import Card from "../components/Card";
import arrowup from "../assets/arrowup.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="w-10/12 md:w-1/2 mx-auto py-5 md:pt-8 text-center">
        <h4 className="text-[#8D8D8D] font-medium">Total Balance: </h4>
        <h3 className="font-bold text-3xl">$13242.34</h3>
      </section>
      <section className="grid grid-cols-2 place-items-center gap-5 py-5 md:py-8 w-full md:w-1/2 mx-auto">
        <Link to="/sendmoney">
          <Card arrow={arrowup} text="Send" bg="#B3DD62" />
        </Link>
        <Link to="/cashout">
          <Card arrow={arrowup} text="Cash Out" bg="#BEB1F5" />
        </Link>
      </section>
    </main>
  );
};

export default Home;
