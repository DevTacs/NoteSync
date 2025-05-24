import User from "../models/user.model.js"
import createError from "http-errors"

export const login = (req, res, next) => {
    res.send("Login")
}

export const register = (req, res, next) => {
    res.send("Register")
}

export const logout = (req, res, next) => {
    res.send("Logout")
}
