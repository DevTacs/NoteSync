import {Link, Outlet} from "react-router-dom"
import Header from "../components/Header"
import ThemeController from "../components/ThemeController"

export default function UserLayout() {
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
                                0
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
                        <button>Logout</button>
                    </li>
                </Header.Profile>
            </Header>
            <Outlet />
        </>
    )
}
