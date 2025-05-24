import {Navigate, Outlet} from "react-router-dom"

export default function PublicRoute({children}) {
    const isLoggedIn = false

    return !isLoggedIn ? children : <Navigate to="/user" />
}
