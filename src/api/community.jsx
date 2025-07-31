import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// ✅ Add JWT token from localStorage to headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// === REST API ===
export const getPosts = async (forum) => {
  const res = await api.get(`/community/posts?forum=${forum}`);
  return res.data;
};

export const createPost = async (forum, postData) => {
  const res = await api.post(`/community/posts`, { forum, ...postData });
  return res.data;
};

export const likePost = async (postId) => {
  const res = await api.post(`/community/posts/${postId}/like`);
  return res.data;
};

export default api;
