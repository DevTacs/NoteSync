import mongoose from "mongoose"
import UserSchema from "../schemas/user.schema.js"

export default mongoose.model("User", UserSchema)
