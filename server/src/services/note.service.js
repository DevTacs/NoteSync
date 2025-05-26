import Note from "../models/note.model.js"

export const getNotes = async () => {
    const notes = await Note.find()
    return notes || []
}

export const createNote = async (note) => await Note.create(note)
