import {Navigate, Outlet} from "react-router-dom"

export default function ProtectedRoute({children}) {
    const isLoggedIn = true
    return children
}
