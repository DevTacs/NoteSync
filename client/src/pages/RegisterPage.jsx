import {Link} from "react-router-dom"
import Fieldset from "../components/Fieldset"
import {register} from "../services/auth.services"
import {showSuccessDialog, showErrorDialog} from "../utils/alert.util"
import useRegisterForm from "../hooks/useRegisterForm"

export default function RegisterPage() {
    const {
        reset,
        control,
        handleSubmit,
        formState: {isValid, isSubmitting},
    } = useRegisterForm()

    const handleRegister = async (data) => {
        try {
            const response = await register(data)
            console.log(response)
            showSuccessDialog("Success", response.data.message)
        } catch (error) {
            showErrorDialog("Error", error.response.data.message)
        }
        reset()
    }
    return (
        <form
            className="w-[350px] flex flex-col gap-2 my-[50px] p-8 mx-auto shadow-xs shadow-accent rounded-md "
            onSubmit={handleSubmit(handleRegister)}>
            <h2 className="text-2xl font-bold text-center">
                Create an Account
            </h2>
            <Fieldset
                control={control}
                name="username"
                type="text"
                label="Username"
                placeholder="Enter your username"
            />
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
                Register
            </button>
            <p className="text-xs">
                Already have an account?
                <Link className="link link-accent" to="/auth/login">
                    Login
                </Link>
            </p>
        </form>
    )
}
