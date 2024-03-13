import Conversations from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverId, io } from "../socket/socket.js";

export const sendMessage = async (req, res, next) => {
  try {
    const senderId = req.user._id;
    const receiverId = req.params.id;
    const { message } = req.body;

    let conversation = await Conversations.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversations.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await newMessage.save();
    // await conversation.save();
    await Promise.all([conversation.save(), newMessage.save()]);
    const receiverSocketId = getReceiverId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getMessage = async (req, res, next) => {
  try {
    const senderId = req.user._id;
    const userChatId = req.params.id;

    const conversation = await Conversations.findOne({
      participants: {
        $all: [senderId, userChatId],
      },
    }).populate("messages");

    if (!conversation) {
      return res.status(200).json([]);
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
};
