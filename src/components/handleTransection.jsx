import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleTransection } from "../lib/handleTransection";
import useAxiosSecured from "../hooks/useAxiosSecured";

const RecipientProfile = ({ recipient, transectionType }) => {
  const { user } = useContext(AuthContext);
  const [sender, setSender] = useState(null);
  const navigate = useNavigate();
  const axiosSecured = useAxiosSecured();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (user) {
      axiosSecured
        .get(`/users/${user.mobile}`)
        .then((data) => setSender(data.data))
        .catch(() => setSender(null));
    }
  }, [user]);
  // axiosSecured
  // .get(`/users/${user?.mobile}`)
  async function handleAll(data) {
    if (user.status === "pending")
      return toast.error("Your Account is not accepted yet.");
    if (parseInt(data.amount) < 50)
      return toast.error("Amount must be more than 50");
    if (parseInt(data.amount) > parseInt(sender.balance))
      return toast.error("You have no sufficient balance.");

    try {
      const { data: confirmPin } = await axiosSecured.post("/auth/confirmpin", {
        pin: data.pin,
        email: user.email,
      });
      if (confirmPin?.success) {
        await handleTransection(data, user, recipient, transectionType);
        toast.success(`${transectionType} successful`);
        reset();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  }
  return (
    <div className="mt-3 space-y-3 text-center">
      <div className="avatar">
        <div className="ring-purple-300 ring-offset-base-100 w-16 md:w-20 rounded-full ring ring-offset-2">
          <img src={recipient.photo} />
        </div>
      </div>
      <h3 className="text-2xl font-semibold">
        {recipient.name}{" "}
        <small className="text-gray-400 font-light text-sm">
          ({recipient.role})
        </small>
      </h3>
      <p className="text-gray-500">{recipient.mobile}</p>
      <form onSubmit={handleSubmit(handleAll)} className="">
        <div className="text-center mt-5">
          <h3 className="text-xl font-bold">Enter Amount and PIN</h3>
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text">Enter Amount</span>
              {errors.amount && (
                <span className="text-red-500 text-sm">
                  {errors.amount.message}
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder="amount"
              className="input input-sm lg:input-md input-bordered"
              {...register("amount", {
                required: "Amount is required",
                pattern: {
                  value: /^\d+$/,
                  message: "Amount must be a number",
                },
              })}
            />
          </div>
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text">PIN</span>
              {errors.pin && (
                <span className="text-red-500 text-sm">
                  {errors.pin.message}
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder="pin"
              className="input input-sm lg:input-md input-bordered"
              {...register("pin", {
                required: "PIN is required",
                pattern: {
                  value: /^\d{5}$/,
                  message: "PIN must be a 5-digit number",
                },
              })}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Confirm</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RecipientProfile;
