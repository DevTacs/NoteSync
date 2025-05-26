import {Navigate, useLoaderData} from "react-router-dom"

export default function PublicRoute({children}) {
    const user = useLoaderData()

    console.log(user)

    return user == null ? children : <Navigate to="/" />
}
