import {Navigate, useLoaderData} from "react-router-dom"

export default function ProtectedRoute({children}) {
    const user = useLoaderData()

    return user ? children : <Navigate to="/guest" />
}
