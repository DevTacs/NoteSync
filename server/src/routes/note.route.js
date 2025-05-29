import express from "express"
import validate from "../middlewares/schemaValidate.middleware.js"
import {createNoteSchema} from "../schemas/zod/note.schema.js"
import checkAuth from "../middlewares/checkAuth.middleware.js"
import catchAsync from "../middlewares/catchAsync.middleware.js"
import {
    createNoteController,
    getNotesController,
    getNoteByIDController,
    getBookmarksController,
    toggleBookmarkController,
    getBookmarksByIDController,
} from "../controllers/note.controller.js"

const router = express.Router()

router
    .route("/")
    .get(checkAuth, catchAsync(getNotesController))
    .post(
        validate(createNoteSchema),
        checkAuth,
        catchAsync(createNoteController)
    )
router
    .route("/bookmarks")
    .get(checkAuth, catchAsync(getBookmarksController))
    .put(checkAuth, catchAsync(toggleBookmarkController))
router.get("/bookmarks/:id", catchAsync(getBookmarksByIDController))
router.get("/:id", catchAsync(getNoteByIDController))

export default router
