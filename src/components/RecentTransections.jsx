import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
// import { axiosSecure } from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TransectionCard from "./TransectionCard";
import useAxiosSecured from "../hooks/useAxiosSecured";

const RecentTransections = () => {
  const { user } = useContext(AuthContext);
  const axiosSecured = useAxiosSecured();
  const { data: recenttransections = [] } = useQuery({
    queryKey: ["recenttransections", user?._id],
    queryFn: async () => {
      const { data } = await axiosSecured.get(`/transetions?limit=5`);
      return data;
    },
  });
  return (
    <section className="p-3 w-full md:w-1/2 mx-auto py-3">
      <div className="w-1/4 bg-purple-300 h-[2px] mx-auto my-3"></div>
      <h4 className="font-bold text-lg">Recent Transections</h4>
      <div className="mt-3">
        {recenttransections?.map((item) => (
          <TransectionCard key={item?._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RecentTransections;
