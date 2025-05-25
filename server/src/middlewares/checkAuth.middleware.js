import createError from "http-errors"
import {
    generateAccessToken,
    verifyAccessToken,
    verifyRefreshToken,
} from "../utils/token.util.js"
import {createCookie} from "../utils/cookie.util.js"
import {minutesToMilliseconds} from "../utils/expiry.util.js"

const checkAuth = (req, res, next) => {
    const {accessToken, refreshToken} = req.cookies

    if (!accessToken && !refreshToken)
        return next(createError(401, "Unauthorized"))

    try {
        if (!accessToken) {
            const {iat, exp, ...data} = verifyRefreshToken(
                refreshToken,
                process.env.REFRESH_TOKEN_SECRET
            )

            const newAccessToken = generateAccessToken(
                data,
                process.env.ACCESS_TOKEN_SECRET
            )
            createCookie(
                "accessToken",
                newAccessToken,
                minutesToMilliseconds(15),
                res
            )
            req.user = data
            return next()
        }

        const {iat, exp, ...data} = verifyAccessToken(
            accessToken,
            process.env.ACCESS_TOKEN_SECRET
        )
        req.user = data
        next()
    } catch (error) {
        return next(createError(401, "Unauthorized"))
    }
}

export default checkAuth
