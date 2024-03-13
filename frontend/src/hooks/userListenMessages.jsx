import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import UsersData from "../Zustand/UsersData";

export default function userListenMessages() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = UsersData();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, setMessages, messages]);
}
