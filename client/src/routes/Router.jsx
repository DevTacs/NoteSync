import {createBrowserRouter, Navigate, Outlet} from "react-router-dom"
import PublicRoute from "./PublicRoute"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ProtectedRoute from "./ProtectedRoute"
import GuestLayout from "../layouts/GuestLayout"
import UserLayout from "../layouts/UserLayout"
import NotePage from "../pages/NotePage"
import BookmarkPage from "../pages/BookmarkPage"
import ViewNotePage from "../pages/ViewNotePage"
import EditNotePage from "../pages/EditNotePage"

const Router = createBrowserRouter([
    {
        path: "/auth",
        element: <PublicRoute />,
        children: [
            {index: true, element: <Navigate to="login" replace />},
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
    {
        path: "/guest",
        element: <GuestLayout />,
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <UserLayout />
            </ProtectedRoute>
        ),
        children: [
            {index: true, element: <Navigate to="notes" />},
            {
                path: "notes",
                children: [
                    {index: true, element: <NotePage />},
                    {path: ":id", element: <ViewNotePage />},
                ],
            },
            {
                path: ":name",
                children: [
                    {path: "bookmarks", element: <BookmarkPage />},
                    {
                        path: "edit",
                        element: <EditNotePage />,
                    },
                ],
            },
        ],
    },
])

export default Router
