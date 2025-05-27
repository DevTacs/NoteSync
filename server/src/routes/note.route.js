import express from "express"
import checkAuth from "../middlewares/checkAuth.middleware.js"
import catchAsync from "../middlewares/catchAsync.middleware.js"
import {
    createNoteController,
    getNotesController,
    getNoteByIDController,
} from "../controllers/note.controller.js"

const router = express.Router()

router.get("/", catchAsync(getNotesController))
router.get("/:id", catchAsync(getNoteByIDController))
router.post("/", checkAuth, catchAsync(createNoteController))

export default router
