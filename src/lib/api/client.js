import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // Update if different
  headers: {
    "Content-Type": "application/json",
     withCredentials: true,
  },
});

// Automatically attach JWT if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;

