import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {loginSchema} from "../schemas/auth.schema.js"

const useLoginForm = () => {
    return useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
        resolver: zodResolver(loginSchema),
    })
}

export default useLoginForm
