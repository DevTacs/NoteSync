import mongoose from "mongoose"
import NoteSchema from "..schemas/note.schema.js"

export default mongoose.model("Note", NoteSchema)
