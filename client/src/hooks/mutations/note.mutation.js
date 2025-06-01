import {useMutation, useQueryClient} from "@tanstack/react-query"
import {
    createNoteService,
    toggleBookmarkService,
} from "../../services/note.service"

export const useCreateNoteMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data) => await createNoteService(data),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["notes"]})
        },
    })
}

export const useToggleBookmarkMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data) => await toggleBookmarkService(data),
        onMutate: async (data) => {
            const previousBookmarks = queryClient.getQueryData(["bookmarks"])

            console.log(previousBookmarks)
            return {previousBookmarks}
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["bookmarks"]})
        },
    })
}
