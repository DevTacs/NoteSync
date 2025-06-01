import User from "../models/user.model.js"

export const getUserDetailsByEmail = async (email) => {
    const user = await User.findOne({email})
    return user
}

export const createUser = async (user) => {
    return await User.create(user)
}

export const getBookmarksService = async (userID) => {
    const {bookmarks} = await User.findById(userID).populate("bookmarks")
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
