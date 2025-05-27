import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    authorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    author: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    content: {
        type: String,
        trim: true,
    },
})

export default NoteSchema
