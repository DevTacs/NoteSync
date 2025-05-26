import express from "express"
import checkAuth from "../middlewares/checkAuth.middleware.js"
import {
    createNoteController,
    getNotesController,
} from "../controllers/note.controller.js"

const router = express.Router()

router.get("/", getNotesController)
router.post("/", checkAuth, createNoteController)

export default router
