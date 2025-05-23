import {createBrowserRouter, Navigate} from "react-router-dom"
import PublicRoute from "./PublicRoute"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ProtectedRoute from "./ProtectedRoute"
import GuestLayout from "../layouts/GuestLayout"
import UserLayout from "../layouts/UserLayout"

const Router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
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
        path: "/guest",
        element: <GuestLayout />,
    },
    {
        path: "/:name",
        element: (
            <ProtectedRoute>
                <UserLayout />
            </ProtectedRoute>
        ),
        children: [
            {index: true, element: <Navigate to="notes" />},
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
