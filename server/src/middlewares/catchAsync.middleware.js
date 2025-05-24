const catchAsync = (cb) => async (req, res, next) => {
    try {
        return await cb(req, res, next)
    } catch (error) {
        next(createError(500, error.message))
    }
}

export default catchAsync
