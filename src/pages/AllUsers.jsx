import { useQuery } from "@tanstack/react-query";
import UserRow from "../components/UserRow";
import useAxiosSecured from "../hooks/useAxiosSecured";

const AllUsers = () => {
  const axiosSecured = useAxiosSecured();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecured.get("/users");

      return data;
    },
  });
  return (
    <div className="pt-5 md:pt-8 w-full md:w-10/12 mx-auto">
      All users {users.length}
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            {/* row */}
            {users?.map((user) => (
              <UserRow update={refetch} key={user._id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
