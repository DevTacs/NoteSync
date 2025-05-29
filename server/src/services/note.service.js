import Note from "../models/note.model.js"
import User from "../models/user.model.js"

export const getNotesService = async () => {
    const notes = await Note.find()
    return notes || []
}

export const getNoteByIDService = async (noteID) => await Note.findById(noteID)

export const createNoteService = async (note) => await Note.create(note)

export const getBookmarksService = async (userID) => {
    const {bookmarks} = await User.findById(userID).populate("_id")
    return bookmarks
}

export const getBookmarkByIDService = async (userID, noteID) => {
    const bookmarkedNote = await User.findOne({userID, bookmarks: noteID})
    return bookmarkedNote
}

export const addBookmarkByIDService = (userID, noteID) =>
    User.findByIdAndUpdate(userID, {$addToSet: {bookmarks: noteID}})

export const removeBookmarkByIDService = (userID, noteID) =>
    User.findByIdAndUpdate(userID, {$pull: {bookmarks: noteID}})
