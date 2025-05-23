import {Navigate, Outlet} from "react-router-dom"

export default function PublicRoute() {
    const isLoggedIn = true

    return !isLoggedIn ? <Outlet /> : <Navigate to="/user" />
}
