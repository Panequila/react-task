import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  headers: {},
  params: {
    api_key: "10b7ce8d8c63be31db4beacebaccaab7",
  },
});

export default axiosInstance;
