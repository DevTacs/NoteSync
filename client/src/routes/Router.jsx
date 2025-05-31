import {lazy} from "react"
import {createBrowserRouter, Navigate} from "react-router-dom"
import {checkAuthentication} from "../services/auth.service"

const PublicRoute = lazy(() => import("./PublicRoute"))
const ProtectedRoute = lazy(() => import("./ProtectedRoute"))
const AuthLayout = lazy(() => import("../layouts/AuthLayout"))
const GuestLayout = lazy(() => import("../layouts/GuestLayout"))
const UserLayout = lazy(() => import("../layouts/UserLayout"))
const LoginPage = lazy(() => import("../pages/LoginPage"))
const RegisterPage = lazy(() => import("../pages/RegisterPage"))
const NotePage = lazy(() => import("../pages/NotePage"))
const BookmarkPage = lazy(() => import("../pages/BookmarkPage"))
const ViewNotePage = lazy(() => import("../pages/ViewNotePage"))
const EditNotePage = lazy(() => import("../pages/EditNotePage"))
import PageNotFound from "../pages/PageNotFound"
import {BookmarkProvider} from "../context/BookmarkContext"

const Router = createBrowserRouter([
    {
        path: "/auth",
        element: (
            <PublicRoute>
                <AuthLayout />
            </PublicRoute>
        ),
        loader: async () => {
            try {
                const data = await checkAuthentication()
                return data
            } catch (error) {
                return null
            }
        },
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
        element: (
            <PublicRoute>
                <GuestLayout />
            </PublicRoute>
        ),
        loader: async () => {
            try {
                const {
                    data: {user},
                } = await checkAuthentication()
                return user
            } catch (error) {
                return null
            }
        },
        children: [{index: true, element: <NotePage />}],
    },
    {
        path: "/user",
        id: "user",
        element: (
            <ProtectedRoute>
                <UserLayout />
            </ProtectedRoute>
        ),
        loader: async () => {
            try {
                const {
                    data: {user},
                } = await checkAuthentication()
                return user
            } catch (error) {
                return null
            }
        },
        children: [
            {index: true, element: <Navigate to="notes" />},
            {
                path: "notes",
                loader: async () => {},
                children: [
                    {
                        index: true,
                        element: (
                            <BookmarkProvider>
                                <NotePage />
                            </BookmarkProvider>
                        ),
                    },
                    {path: ":id", element: <ViewNotePage />},
                ],
            },
            {
                path: "bookmarks",
                element: <BookmarkPage />,
            },
            {
                path: "edit",
                element: <EditNotePage />,
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound />,
    },
])

export default Router
