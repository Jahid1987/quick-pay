import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function handleRegister(data) {
    console.log(data);
  }
  return (
    <div className="py-5 md:py-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h3 className="text-3xl lg:text-5xl text-center mt-5 font-light">
          Register
        </h3>
        <form onSubmit={handleSubmit(handleRegister)} className="card-body">
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text">Name</span>
              {errors.name && (
                <span className="text-red-500 text-sm">
                  Name field is required
                </span>
              )}
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="name"
              className="input input-sm lg:input-md input-bordered"
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
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text">Mobile Number</span>
              {errors.mobile && (
                <span className="text-red-500 text-sm">
                  Mobile Number is required
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder="mobile"
              className="input input-sm lg:input-md input-bordered"
              {...register("mobile", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text">E-mail</span>
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Email field is required
                </span>
              )}
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-sm lg:input-md input-bordered"
              {...register("email", { required: true })}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
