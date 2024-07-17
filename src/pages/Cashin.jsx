import { useState } from "react";
import { useForm } from "react-hook-form";
import RecipientProfile from "../components/handleTransection";
import { toast } from "react-toastify";
import useAxiosSecured from "../hooks/useAxiosSecured";

const Cashin = () => {
  const [recipient, setRecipient] = useState(null);
  const axiosSecured = useAxiosSecured();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function handleRecipient(data) {
    try {
      const { data: user } = await axiosSecured.get(`/users/${data.mobile}`);
      if (user) {
        setRecipient(user);
      } else {
        setRecipient(null);
      }
    } catch (error) {
      toast.error("User not found!");
    }
  }
  return (
    <div className="pt-5 md:pt-8 w-full md:w-1/2 mx-auto">
      {!recipient ? (
        <form onSubmit={handleSubmit(handleRecipient)}>
          <h3 className="text-xl font-bold text-center">Cash In</h3>
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text">Enter the number of Recipient </span>
              {errors.mobile && (
                <span className="text-red-500 text-sm">
                  Valid mobile number is required
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder="mobile number"
              className="input input-sm lg:input-md input-bordered"
              {...register("mobile", {
                required: true,
              })}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Finde Recipient</button>
          </div>
        </form>
      ) : recipient?.role !== "agent" ? (
        <p className="text-red-400">
          You can cashin money only from agent.{" "}
          {`${recipient.name} is ${recipient.role}`}
        </p>
      ) : (
        <RecipientProfile recipient={recipient} transectionType="cashin" />
      )}
    </div>
  );
};

export default Cashin;
