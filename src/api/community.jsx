import axios from "axios";
import { io } from "socket.io-client";

// Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Add JWT token from localStorage to headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Socket.IO client
const socket = io(import.meta.env.VITE_SOCKET_URL.replace("/api", ""), {
  withCredentials: true,
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

// === WebSocket: Emitters ===
export const emitNewPost = (post) => {
  socket.emit("new_post", post);
};

export const emitLikePost = (postId) => {
  socket.emit("like_post", { postId });
};

// === WebSocket: Listeners with cleanup ===

// Keep track of handlers to avoid duplicates
let newPostHandler = null;
let likePostHandler = null;

export const onNewPost = (callback) => {
  if (newPostHandler) socket.off("new_post", newPostHandler); // cleanup
  newPostHandler = callback;
  socket.on("new_post", newPostHandler);
};

export const onLikePost = (callback) => {
  if (likePostHandler) socket.off("like_post", likePostHandler); // cleanup
  likePostHandler = callback;
  socket.on("like_post", likePostHandler);
};

export default api;