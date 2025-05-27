import Note from "../models/note.model.js"

export const getNotesService = async () => {
    const notes = await Note.find()
    return notes || []
}

export const getNoteByIDService = async (noteID) => await Note.findById(noteID)

export const createNoteService = async (note) => await Note.create(note)
