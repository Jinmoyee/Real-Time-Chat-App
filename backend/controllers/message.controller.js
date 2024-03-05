import Conversations from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req,res,next) => {
    try {

        const senderId = req.user._id
        const receiverId = req.params.id
        const message = req.body.message
    
        let conversation = await Conversations.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        })
    
        if (!conversation) {
            conversation = await Conversations.create({
                participants: [senderId, receiverId]
            })
        }
    
        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        })
    
        if(newMessage) {
            conversation.message.push(newMessage._id)
        }
        await newMessage.save()
        await conversation.save()
    
        res.status(201).json(newMessage)
    } catch(error) {
        next(error)
    }
}