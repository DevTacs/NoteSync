import "dotenv/config"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
)
app.use(cookieParser())
app.use(express.json())

import connectDB from "./configs/database.config.js"
connectDB()

import authRoute from "./routes/auth.route.js"
import noteRoute from "./routes/note.route.js"
app.use("/api/auth", authRoute)
app.use("/api/notes", noteRoute)

import errorHandler from "./middlewares/error.middleware.js"
app.use(errorHandler)

const port = process.env.PORT || 3000
app.listen(port)
