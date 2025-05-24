import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        min: min,
    },
    password: {
        type: String,
        trim: true,
        min: min,
    },
    role: {
        type: String,
        default: "user",
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    bookmarks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
})

export default UserSchema
