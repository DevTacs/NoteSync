import {createError} from "../utils/error.util.js"

const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) return next(createError(400, result.error.message))
    req.body = result.data
    next()
}

export default validate
