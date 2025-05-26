import createError from "http-errors"
import {createNote, getNotes} from "../services/note.service.js"

export const getNotesController = async (req, res, next) => {
    const notes = await getNotes()

    if (notes.length == 0)
        return next(createError(404, {message: "Notes not found"}))

    res.status(200).json({notes})
}

export const createNoteController = async (req, res, next) => {
    const note = await createNote(req.body)

    if (!note) return next(createError(500, "Error creating note"))

    res.status(201).json({message: "Note created successfully"})
}
