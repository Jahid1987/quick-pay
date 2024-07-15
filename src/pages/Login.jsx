import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosPublic } from "../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { login } = useContext(AuthContext);
  async function handleLogin(data) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const numberPattern = /^\d+$/;
    const isEmail = emailPattern.test(data.identity);
    const isMobile = numberPattern.test(data.identity);
    try {
      if (isEmail) {
        const credentials = { email: data.identity, pin: data.pin };
        const res = await axiosPublic.post("/auth/login", credentials);
        login(res?.data?.token);
        toast.success("Login successfully.");

        return reset();
      }
      if (isMobile) {
        const credentials = { mobile: data.identity, pin: data.pin };
        await axiosPublic.post("/auth/mobilelogin", credentials, {
          withCredentials: true,
        });
        toast.success("Login successfully.");
        return reset();
      }
    } catch (error) {
      toast.error(error?.response?.data);
      console.log(error);
    }
  }
  return (
    <div className="py-5 md:py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h3 className="text-3xl lg:text-5xl text-center mt-5 font-light">
          Login
        </h3>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text">Mobile/E-mail</span>
              {errors.identity && (
                <span className="text-red-500 text-sm">
                  Mobile/E-mail Number is required
                </span>
              )}
            </label>
            <input
              type="text"
              placeholder="mobile/email"
              className="input input-sm lg:input-md input-bordered"
              {...register("identity", { required: true })}
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
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mb-3">
          Not registered?
          <Link className="btn btn-link" to="/register">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
