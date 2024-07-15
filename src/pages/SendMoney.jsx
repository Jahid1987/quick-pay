import { useEffect } from "react";
import { axiosSecure } from "../hooks/useAxiosSecure";

const SendMoney = () => {
  useEffect(() => {
    axiosSecure
      .post("/transetions/sendmoney")
      .then((data) => console.log(data));
  }, []);
  return <div>Send money</div>;
};

export default SendMoney;
