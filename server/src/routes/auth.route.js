import express from "express"
import {loginSchema, registerSchema} from "../schemas/zod/auth.schema.js"
import validate from "../middlewares/schemaValidate.middleware.js"
import catchAsync from "../middlewares/catchAsync.middleware.js"
import {
    login,
    register,
    logout,
    checkMe,
} from "../controllers/auth.controller.js"
import checkAuth from "../middlewares/checkAuth.middleware.js"

const router = express.Router()

router.get("/me", checkAuth, catchAsync(checkMe))
router.post("/login", validate(loginSchema), catchAsync(login))
router.post("/register", validate(registerSchema), catchAsync(register))
router.delete("/logout", checkAuth, catchAsync(logout))

export default router
