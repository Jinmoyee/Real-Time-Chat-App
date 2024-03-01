import express from 'express';
import mongoose from 'mongoose';
import authRouter from "./routers/auth.router.js"

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter)
mongoose.connect("mongodb+srv://jinmoyee99:jinmoyee@jinmoyee.w4b2nku.mongodb.net/?retryWrites=true&w=majority&appName=jinmoyee").then(() => {
    console.log('Connected to MongoDB')
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})
app.listen(1000, () => {
    console.log('Server is running on port 1000')
})
