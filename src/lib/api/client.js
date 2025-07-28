import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000", // Update if different
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach JWT if available
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;

