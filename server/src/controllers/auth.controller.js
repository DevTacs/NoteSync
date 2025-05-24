import createError from "http-errors"
import {generateAccessToken, generateRefreshToken} from "../utils/token.util.js"
import {createCookie} from "../utils/cookie.util.js"
import {
    minutesToMilliseconds,
    daysToMilliseconds,
} from "../utils/expiry.util.js"
import {hashPassword, comparePassword} from "../utils/hash.util.js"
import {createUser, getUserDetailsByEmail} from "../services/user.service.js"

export const login = async (req, res, next) => {
    const {email, password} = req.body

    const user = await getUserDetailsByEmail(email)
    if (!user) return next(createError(404, "User not found"))
    console.log(user)

    if (!comparePassword(password, user.password))
        return next(createError(400, "Invalid credentials"))

    const payload = {
        id: user._id,
        role: user.role,
        username: user.username,
        email: user.email,
    }
    const accessToken = generateAccessToken(
        payload,
        process.env.ACCESS_TOKEN_SECRET
    )
    const refreshToken = generateRefreshToken(
        payload,
        process.env.REFRESH_TOKEN_SECRET
    )

    createCookie("accessToken", accessToken, minutesToMilliseconds(15), res)
    createCookie("refreshToken", refreshToken, minutesToMilliseconds(7), res)
    res.status(200).json({message: "Login successful"})
}

export const register = async (req, res, next) => {
    const {username, email, password} = req.body

    const user = await getUserDetailsByEmail(email)
    if (user) return next(createError(400, "User already exists"))

    const hashedPassword = await hashPassword(password)
    await createUser({...req.body, password: hashedPassword})

    res.status(201).json({message: "User created successfully"})
}

export const logout = (req, res, next) => {
    res.send("Logout")
}
