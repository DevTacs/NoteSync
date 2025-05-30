import axios from "../utils/axios.util"

const backendUrl = import.meta.env.VITE_BACKEND_URL

export const getNotesService = async () => {
    const {data} = await axios.get(`${backendUrl}/api/notes`)
    return data.notes || []
}

export const getNoteByIDService = async (noteID) => {
    const {data} = await axios.get(`${backendUrl}/api/notes/${noteID}`)
    return data
}

export const createNoteService = async (noteData) => {
    const {data} = await axios.post(`${backendUrl}/api/notes`, noteData)
    return data
}

export const getBookmarksService = async () => {
    const {data} = await axios.get(`${backendUrl}/api/notes/bookmarks`)
    return data
}

export const toggleBookmarkService = async (noteID) => {
    const {data} = await axios.get(
        `${backendUrl}/api/notes/bookmarks/${noteID}`
    )
    return data
}
