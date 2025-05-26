import mongoose from "mongoose"
import NoteSchema from "../schemas/mongoose/note.schema.js"

export default mongoose.model("Note", NoteSchema)
