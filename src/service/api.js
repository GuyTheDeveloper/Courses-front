import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  const authorization = token ? token : "";
  config.headers.authorization = authorization;
  return config;
});

export default axios;
