import mongoose from "mongoose"
import UserSchema from "../schemas/mongoose/user.schema.js"

export default mongoose.model("User", UserSchema)
