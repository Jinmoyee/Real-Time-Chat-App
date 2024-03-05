import { errorHandeler } from "../utils/error.util.js";
import User from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

const protectedRoute = async (req,res,next) => {
    try {
        const token = req.cookies.token;
        if(!token){
            return next(errorHandeler(401,"Unauthorized token"))
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded) {
            return next(errorHandeler(401,"Unauthorized in decoding"))
        }
        const user = await User.findById(decoded.userId);
        if(!user) {
            return next(errorHandeler(401,"User not found"))
        }
        req.user = user
        next()
    } catch(error) {
        next(error)
    }
}

export default protectedRoute