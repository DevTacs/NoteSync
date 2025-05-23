import {createBrowserRouter} from "react-router-dom"
import PublicRoute from "./PublicRoute"
import SigninPage from "../pages/SigninPage"
import SignupPage from "../pages/SignupPage"
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
                path: "/signin",
                element: <SigninPage />,
            },
            {
                path: "/signup",
                element: <SignupPage />,
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
