import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {loginSchema} from "../../schemas/auth.schema.js"
import {registerSchema} from "../../schemas/auth.schema.js"

export const useLoginForm = () => {
    return useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
        resolver: zodResolver(loginSchema),
    })
}

export const useRegisterForm = () => {
    return useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onChange",
        resolver: zodResolver(registerSchema),
    })
}
