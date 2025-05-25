import {Link} from "react-router-dom"
import useLoginForm from "../hooks/useLoginForm"
import Fieldset from "../components/Fieldset"
import {login} from "../services/auth.services"
import {showErrorDialog, showSuccessDialog} from "../utils/alert.util"

export default function LoginPage() {
    const {
        reset,
        control,
        handleSubmit,
        formState: {isValid, isSubmitting},
    } = useLoginForm()

    const handleLogin = async (data) => {
        try {
            const response = await login(data)
            showSuccessDialog("Success", response.data.message)
        } catch (error) {
            showErrorDialog("Error", error.response.data.message)
        }
        reset()
    }

    return (
        <form
            className="w-[350px] flex flex-col gap-2 my-[50px] p-8 mx-auto shadow-xs shadow-accent rounded-md "
            onSubmit={handleSubmit(handleLogin)}>
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <Fieldset
                control={control}
                name="email"
                type="email"
                label="Email"
                placeholder="Enter your email"
            />
            <Fieldset
                control={control}
                name="password"
                type="password"
                label="Password"
                placeholder="Enter your password"
            />
            <button
                className="btn btn-accent"
                disabled={!isValid || isSubmitting}>
                Login
            </button>
            <p className="text-xs">
                Don't have an account?{" "}
                <Link className="link link-accent" to="/auth/register">
                    Register
                </Link>
            </p>
        </form>
    )
}
