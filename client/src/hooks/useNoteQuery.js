import {useQuery} from "@tanstack/react-query"
import {getNotesService} from "../services/note.service"

export const useNotesQuery = () => {
    return useQuery({
        queryKey: ["notes"],
        queryFn: async () => await getNotesService(),
    })
}
