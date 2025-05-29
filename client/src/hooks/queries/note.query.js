import {useQuery} from "@tanstack/react-query"
import {
    getNotesService,
    getNoteByIDService,
    getBookmarksService,
} from "../../services/note.service"

export const useGetNotesQuery = () => {
    return useQuery({
        queryKey: ["notes"],
        queryFn: async () => await getNotesService(),
    })
}

export const useGetNoteQuery = (id) => {
    return useQuery({
        queryKey: ["notes", id],
        queryFn: async () => await getNoteByIDService(id),
    })
}

export const useGetBookmarksQuery = () => {
    return useQuery({
        queryKey: ["bookmarks"],
        queryFn: async () => await getBookmarksService(),
    })
}
