import axios from './axiosInstance'

export const getModules = async () => {
  const response = await axios.get("/contributor/modules")
  return response.data
}

export const getModuleById = async (id) => {
  const response = await axios.get(`/contributor/modules/${id}`)
  return response.data
}

export const createModule = async (moduleData) => {
  const response = await axios.post("/contributor/modules", moduleData)
  return response.data
}

export const updateModule = async (id, moduleData) => {
  const response = await axios.patch(`/contributor/modules/${id}`, moduleData)
  return response.data
}

export const deleteModule = async (id) => {
  const response = await axios.delete(`/contributor/modules/${id}`)
  return response.data
}
