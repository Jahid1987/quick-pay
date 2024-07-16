import { useContext, useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { AuthContext } from "../providers/AuthProvider";

const Transactions = () => {
  const { user } = useContext(AuthContext);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    if (user && user.role === "agent") {
      setLimit(20);
    }
  }, [user]);
  return (
    <div className="pt-5 md:pt-8 w-full md:w-10/12 mx-auto">
      <DataTable limit={limit} />
    </div>
  );
};

export default Transactions;
