import express from "express"
import {loginSchema, registerSchema} from "../schemas/zod/auth.schema.js"
import validate from "../middlewares/schemaValidate.middleware.js"
import catchAsync from "../middlewares/catchAsync.middleware.js"
import {login, register, logout} from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/login", validate(loginSchema), catchAsync(login))
router.post("/register", validate(registerSchema), catchAsync(register))
router.delete("/logout", catchAsync(logout))

export default router
