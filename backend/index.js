import express from "express";
import mongoose from "mongoose";
import authRouter from "./routers/auth.router.js";
import messageRouter from "./routers/message.router.js";
import usersRouter from "./routers/users.router.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";
import path from "path";

const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
dotenv.config();
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", usersRouter);

// app.get("/test", (req, res) => {
//   res.send("Hello World");
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

mongoose.connect(process.env.MONGODB).then(() => {
  console.log("Connected to MongoDB");
});

server.listen(1000, () => {
  console.log("Server is running on port 1000");
});
