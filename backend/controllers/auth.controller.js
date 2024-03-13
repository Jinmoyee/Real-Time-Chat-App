import User from "../models/auth.model.js";
import { errorHandeler } from "../utils/error.util.js";
import bcryptjs from "bcryptjs";
import { JwtToken } from "../utils/generateToken.js";

export const signUp = async (req, res, next) => {
  const { fullName, userName, email, gender, password, conformPassword } =
    req.body;
  const maleAvatar = `https://avatar.iran.liara.run/public/boy?usernames=${userName}`;
  const femaleAvatar = `https://avatar.iran.liara.run/public/girl?usernames=${userName}`;
  if (password !== conformPassword) {
    return next(errorHandeler(405, "Please enter your password correctly"));
  }
  const user = await User.findOne({ userName });
  if (user) {
    return next(errorHandeler(410, "User already exists"));
  }
  const salt = bcryptjs.genSaltSync(10);
  const hashPassword = bcryptjs.hashSync(password, salt);
  const newUser = new User({
    fullName,
    userName,
    email,
    gender,
    password: hashPassword,
    avatar: gender === "Male" ? maleAvatar : femaleAvatar,
  });
  try {
    JwtToken(newUser._id, res);
    await newUser.save();
    res.status(201).json({
      id: newUser._id,
      fullName: newUser.fullName,
      userName: newUser.userName,
      avatar: newUser.avatar,
    });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const user = await User.findOne({ userName });
  if (!user) {
    return next(errorHandeler(404, "User not found"));
  }
  const userEmail = await User.findOne({ email });
  if (!userEmail) {
    return next(errorHandeler(404, "Email not found"));
  }
  const isPasswordCorrect = bcryptjs.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return next(errorHandeler(401, "Invalid password"));
  }
  try {
    JwtToken(user._id, res);
    res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      avatar: user.avatar,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "Successfully logged out",
    });
  } catch (err) {
    next(err);
  }
};
