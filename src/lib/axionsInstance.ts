import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Authorization: process.env.REACT_APP_API_TOKEN,
  },
  timeout: 5000,
});

export default axiosInstance;
