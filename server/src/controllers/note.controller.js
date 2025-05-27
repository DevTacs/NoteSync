import createError from "http-errors"
import {
    getNotesService,
    getNoteByIDService,
    createNoteService,
} from "../services/note.service.js"

export const getNotesController = async (req, res, next) => {
    const notes = await getNotesService()

    if (notes.length == 0)
        return next(createError(404, {message: "Notes not found"}))

    res.status(200).json({notes})
}

export const getNoteByIDController = async (req, res, next) => {
    const note = await getNoteByIDService(req.params.id)

    if (!note) return next(createError(404, {message: "Note not found"}))
    res.status(200).json(note)
}

export const createNoteController = async (req, res, next) => {
    const note = await createNoteService(req.body)

    if (!note) return next(createError(500, "Error creating note"))

    res.status(201).json({message: "Note created successfully"})
}
