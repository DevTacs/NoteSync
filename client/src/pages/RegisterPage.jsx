import {Link} from "react-router-dom"
import Fieldset from "../components/Fieldset"

export default function RegisterPage() {
    return (
        <form
            action=""
            className="w-[350px] flex flex-col gap-2 my-[50px] p-8 mx-auto shadow-xs shadow-accent rounded-md ">
            <h2 className="text-2xl font-bold text-center">
                Create an Account
            </h2>
            <Fieldset label="Username" placeholder="Enter your username" />
            <Fieldset label="Email" placeholder="Enter your email" />
            <Fieldset label="Password" placeholder="Enter your password" />
            <button className="btn btn-accent">Register</button>
            <p className="text-xs">
                Already have an account?
                <Link className="link link-accent" to="/auth/login">
                    Login
                </Link>
            </p>
        </form>
    )
}
