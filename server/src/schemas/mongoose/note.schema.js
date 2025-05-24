import mongoose from "mongoose"

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    },
})

export default NoteSchema
