import {Navigate, useLoaderData} from "react-router-dom"

export default function PublicRoute({children}) {
    const isLoggedIn = useLoaderData()

    return !isLoggedIn ? children : <Navigate to="/" />
}
