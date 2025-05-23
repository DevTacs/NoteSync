import {Link} from "react-router-dom"
import Header from "../components/Header"
import ThemeController from "../components/ThemeController"

export default function GuestLayout() {
    return (
        <>
            <Header>
                <Header.SearchField />
                <Header.Profile>
                    <li>
                        <Link className="" to="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className="" to="/register">
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
        </>
    )
}
