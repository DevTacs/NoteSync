import {Link, Outlet} from "react-router-dom"
import Header from "../components/Header"
import ThemeController from "../components/ThemeController"

export default function UserLayout() {
    const user = "User1"
    return (
        <>
            <Header path="/">
                <Header.Profile>
                    <li>
                        <Link to="notes">Notes</Link>
                    </li>
                    <li>
                        <Link to={`${user}/bookmarks`}>
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
