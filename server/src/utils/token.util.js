import jwt from "jsonwebtoken"

export const generateAccessToken = (payload, secret) =>
    jwt.sign(payload, secret)
export const generateRefreshToken = (payload, secret) =>
    jwt.sign(payload, secret)
export const verifyAccessToken = (token, secret) => jwt.verify(token, secret)
export const verifyRefreshToken = (token, secret) => jwt.verify(token, secret)
