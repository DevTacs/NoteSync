import {Link, Outlet, useNavigate} from "react-router-dom"
import Header from "../components/Header"
import ThemeController from "../components/ThemeController"
import {logout} from "../services/auth.service"
import {showErrorDialog, showSuccessDialog} from "../utils/alert.util"
import {useBookmark} from "../context/BookmarkContext"
import {useEffect, useState} from "react"

export default function UserLayout() {
    const {bookmarks} = useBookmark()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            const {message} = await logout()
            await showSuccessDialog("Success", message)
            navigate("/auth/login")
        } catch (error) {
            showErrorDialog("Error", error.message)
        }
    }

    return (
        <>
            <Header path="/user">
                <Header.Profile>
                    <li>
                        <Link to="/user/notes">Notes</Link>
                    </li>
                    <li>
                        <Link to="bookmarks">
                            Bookmarks
                            <div className="badge badge-accent text-xs p-1">
                                {bookmarks.length}
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className="justify-between">
                            Theme
                            <ThemeController />
                        </div>
                    </li>
                    <li>
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </Header.Profile>
            </Header>
            <Outlet />
        </>
    )
}
