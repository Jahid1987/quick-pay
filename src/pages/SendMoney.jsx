import { useState } from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import RecipientProfile from "../components/RecipientProfile";
import { toast } from "react-toastify";

const SendMoney = () => {
  const [recipient, setRecipient] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function handleRecipient(data) {
    try {
      const { data: user } = await axiosSecure.get(`/users/${data.mobile}`);
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
          <h3 className="text-xl font-bold text-center">Send Money</h3>
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
      ) : (
        <RecipientProfile recipient={recipient} />
      )}
    </div>
  );
};

export default SendMoney;
