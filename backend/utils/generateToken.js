import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const JwtToken = (userId, res) => {
    const token = jwt.sign({userId}, 
        process.env.JWT_SECRET, {
    })

    res.cookie('token', token,{
        httpOnly: true,
        sameSite: "strict",
        // secure: true,
    })
}