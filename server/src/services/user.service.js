import User from "../models/user.model.js"

export const getUserDetailsByEmail = async (email) => {
    const user = await User.findOne({email})

    console.log(user)
    return user
}

export const createUser = (user) => User.create(user)

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
