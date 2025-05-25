import {Link, Outlet} from "react-router-dom"
import Header from "../components/Header"
import ThemeController from "../components/ThemeController"

export default function GuestLayout() {
    return (
        <>
            <Header path="/guest">
                <Header.Profile>
                    <li>
                        <Link className="" to="/auth/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="/auth/register">
                            Register
                        </Link>
                    </li>
                    <li>
                        <div className="justify-between">
                            Theme
                            <ThemeController />
                        </div>
                    </li>
                </Header.Profile>
            </Header>
            <Outlet />
        </>
    )
}
