import {createBrowserRouter} from "react-router-dom"
import PublicRoute from "./PublicRoute"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ProtectedRoute from "./ProtectedRoute"
import GuestLayout from "../layouts/GuestLayout"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                index: true,
                element: <GuestLayout />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ],
    },
    {
        path: "/:name",
        element: <ProtectedRoute />,
        children: [
            {
                path: "notes",
                element: <div>User</div>,
            },
            {
                path: "profile",
                element: <div>Profile</div>,
            },
        ],
    },
])

export default Router
