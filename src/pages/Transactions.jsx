import { useEffect, useState } from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";
import TableRow from "../components/TableRow";

const Transactions = () => {
  const [transections, setTransections] = useState([]);
  useEffect(() => {
    axiosSecure.get("/transetions").then(({ data }) => {
      setTransections(data);
    });
  }, []);
  return (
    <div className="pt-5 md:pt-8 w-full md:w-10/12 mx-auto">
      <h3 className="text-2xl md:text-3xl text-center mb-3 md:mb-5">
        All Transections {transections.length}
      </h3>
      <hr />
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row */}
            {transections.map((item) => (
              <TableRow key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
