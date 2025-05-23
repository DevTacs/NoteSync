import {Link, Outlet} from "react-router-dom"
import Header from "../components/Header"
import ThemeController from "../components/ThemeController"

export default function UserLayout() {
    return (
        <>
            <Header path={"/user"}>
                <Header.SearchField />
                <Header.Profile>
                    <li>
                        <Link to={"profile"}>Profile</Link>
                    </li>
                    <li>
                        <Link to="notes">Notes</Link>
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
