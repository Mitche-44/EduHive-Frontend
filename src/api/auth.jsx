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

// Google Login
export const googleLogin = async (code) => {
  const response = await axiosInstance.post(
    '/auth/google-login',
    { code },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return response.data
}
