import User from "../models/user.model.js"

export const getUserDetailsByEmail = async (email) => {
    const user = await User.findOne({email}).lean()
    return user || null
}

export const createUser = async (user) => await User.create(user)
