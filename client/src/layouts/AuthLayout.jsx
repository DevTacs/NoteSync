import {Outlet} from "react-router-dom"
import Header from "../components/Header"
import ThemeController from "../components/ThemeController"

export default function AuthLayout() {
    return (
        <>
            <Header>
                <ThemeController />
            </Header>
            <Outlet />
        </>
    )
}
