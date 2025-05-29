import createError from "http-errors"
import {
    getNotesService,
    getNoteByIDService,
    createNoteService,
    addBookmarkByIDService,
    removeBookmarkByIDService,
    getBookmarksService,
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
    const data = {
        ...req.body,
        author: {
            authorID: req.user.id,
            authorName: req.user.username,
        },
    }
    const note = await createNoteService(data)

    if (!note) return next(createError(400, "Error creating note"))

    res.status(201).json({message: "Note created successfully"})
}

import User from "../models/user.model.js"

export const getBookmarksController = async (req, res, next) => {
    const bookmarks = await getBookmarksService(req.user.id)
    res.status(200).json(bookmarks)
}

export const getBookmarksByIDController = async (req, res, next) => {
    res.send("getBookmarksByIDController")
}
export const toggleBookmarkController = async (req, res, next) => {
    const {noteID} = req.body

    const note = await getNoteByIDService(noteID)
    if (!note) return next(createError(404, {message: "Note not found"}))

    const result = await addBookmarkByIDService(req.user.id, note._id)
    if (!result) return next(createError(400, "Error adding bookmark"))

    const alreadyBookmarked = result.bookmarks.includes(note._id)
    if (alreadyBookmarked) {
        await removeBookmarkByIDService(req.user.id, note._id)
        res.status(200).json({bookmarked: false})
    }

    res.status(200).json({bookmarked: true})
}
