import TableRow from "./TableRow";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecured from "../hooks/useAxiosSecured";

const DataTable = ({ limit }) => {
  const { user } = useContext(AuthContext);
  const axiosSecured = useAxiosSecured();
  const { data: transections = [], refetch } = useQuery({
    queryKey: ["transections", user._id],
    queryFn: async () => {
      const { data } = await axiosSecured.get(`/transetions?limit=${limit}`);
      return data;
    },
  });
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
              <TableRow update={refetch} key={item._id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataTable;
