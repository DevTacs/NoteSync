import mongoose from "mongoose"

const min = Number(process.env.FIELD_MIN_LENGTH) || 5

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        minlength: min,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        minlength: min,
        required: true,
    },
    role: {
        type: String,
        default: "user",
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Note",
        },
    ],
    bookmarks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Note",
        },
    ],
})

export default UserSchema
