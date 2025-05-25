import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {registerSchema} from "../schemas/auth.schema.js"

const useRegisterForm = () => {
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

export default useRegisterForm
