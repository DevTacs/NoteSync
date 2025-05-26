import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {noteSchema} from "../schemas/note.schema"

export const useNoteForm = () => {
    return useForm({
        defaultValues: {
            title: "",
            content: "",
        },
        mode: "onChange",
        resolver: zodResolver(noteSchema),
    })
}
