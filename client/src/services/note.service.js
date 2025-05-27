import axios from "../utils/axios.util"

const backendUrl = import.meta.env.VITE_BACKEND_URL

export const getNotesService = async () => {
    const {data} = await axios.get(`${backendUrl}/api/notes`)
    await new Promise((resolve) => setTimeout(resolve, 2500))
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
