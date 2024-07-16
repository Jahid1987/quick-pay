import { useContext } from "react";
import DataTable from "../components/DataTable";
import { AuthContext } from "../providers/AuthProvider";

const Transactions = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="pt-5 md:pt-8 w-full md:w-10/12 mx-auto">
      <DataTable limit={`${user?.role === "agent" ? 20 : 10}`} />
    </div>
  );
};

export default Transactions;
