import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import { axiosSecure } from "../hooks/useAxiosSecure";

const DataTable = ({ limit = 10 }) => {
  const [transections, setTransections] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/transetions?limit=${limit}`).then(({ data }) => {
      setTransections(data);
    });
  }, [limit]);
  return (
    <>
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
    </>
  );
};

export default DataTable;
