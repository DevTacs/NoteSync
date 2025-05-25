import axios from "../utils/axios.util"

const backendUrl = import.meta.env.VITE_BACKEND_URL

console.log(backendUrl)

export const login = (data) => axios.post(`${backendUrl}/api/auth/login`, data)
export const register = (data) =>
    axios.post(`${backendUrl}/api/auth/register`, data)
