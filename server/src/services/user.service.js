import User from "../models/user.model.js"

export const getUserDetailsByEmail = (email) => {
    return User.findOne({email}).lean()
}

export const createUser = (user) => User.create(user)
