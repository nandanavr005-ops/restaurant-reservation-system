import axios from "axios";

const API = axios.create({
  baseURL: "https://restaurant-backend-7y3l.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;