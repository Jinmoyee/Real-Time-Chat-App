import User from "../models/auth.model.js";

export const users = async (req, res, next) => {
  try {
    const loggedInUser = req.user._id;
    const filterUser = await User.find({ _id: { $ne: loggedInUser } });
    res.status(200).json(filterUser);
  } catch (error) {
    next(error);
  }
};
