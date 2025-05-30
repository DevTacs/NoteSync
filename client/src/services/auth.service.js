import axios from "../utils/axios.util"

const backendUrl = import.meta.env.VITE_BACKEND_URL

console.log(backendUrl)

export const login = (data) => axios.post(`${backendUrl}/api/auth/login`, data)
export const register = (data) =>
    axios.post(`${backendUrl}/api/auth/register`, data)

export const logout = async () => {
    const {data} = await axios.delete(`${backendUrl}/api/auth/logout`)
    return data
}

export const checkAuthentication = () => axios.get(`${backendUrl}/api/auth/me`)
