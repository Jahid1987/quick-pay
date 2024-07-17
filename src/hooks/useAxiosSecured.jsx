import axios from "axios";
import Cookies from "js-cookie";
const axiosSecured = axios.create({
  //   baseURL: "http://localhost:5000",
  baseURL: "https://quick-pay-server-delta.vercel.app",
  withCredentials: true,
});

const useAxiosSecured = () => {
  axiosSecured.interceptors.request.use(
    function (config) {
      const token = Cookies.get("token");
      //   const token = "test";
      config.headers.Authorization = `${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axiosSecured;
};

export default useAxiosSecured;
