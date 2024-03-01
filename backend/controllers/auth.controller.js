import User from "../models/auth.model.js"
import { errorHandeler } from "../utils/error.util.js"

export const signUp = async (req, res, next) => {
    const { fullName, userName, email, gender, password, conformPassword } = req.body
    const maleAvatar = `https://avatar.iran.liara.run/public/boy?usernames=${userName}`
    const femaleAvatar = `https://avatar.iran.liara.run/public/girl?usernames=${userName}`
    if (password !== conformPassword) {
        return next(errorHandeler(405, 'Please enter your password correctly'));
    }
    const user = await User.findOne({ userName })
    if (user) {
        return next(errorHandeler(410, "User already exists"))
    }
    const newUser = new User({
        fullName,
        userName,
        email,
        gender,
        password,
        avatar: gender === "Male" ? maleAvatar : femaleAvatar
    })
    try {
        await newUser.save()
        res.status(201).json({
            id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
        })
    }
    catch (err) {
        next(err)
    }
}