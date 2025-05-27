import {useMutation, useQueryClient} from "@tanstack/react-query"
import {createNoteService} from "../../services/note.service"

export const useCreateNoteMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data) => await createNoteService(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["notes"]})
        },
    })
}
