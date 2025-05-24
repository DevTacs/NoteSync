export const generateCookie = (name, token, expiry, res) => {
    res.cookie(name, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: expiry,
    })
}
