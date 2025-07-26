import axiosInstance from './axiosInstance'

// Registration
export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/auth/register', userData)
  return response.data
}

// Login
export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/auth/login', credentials)
  return response.data
}
