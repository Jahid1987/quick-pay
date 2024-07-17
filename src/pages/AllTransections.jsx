import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../hooks/useAxiosSecure";
import TransectionRow from "../components/TransectionRow";

const AllTransections = () => {
  const { data: transections = [] } = useQuery({
    queryKey: ["alltransections"],
    queryFn: async () => {
      const { data } = await axiosSecure.post("/transetions/getall");
      return data;
    },
  });
  return (
    <div>
      All transections {transections.length}
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row */}
            {transections?.map((transection) => (
              <TransectionRow key={transection._id} transection={transection} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTransections;
