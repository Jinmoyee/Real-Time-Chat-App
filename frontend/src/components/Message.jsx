import React, { useEffect, useState } from "react";
import Messages from "./Messages";
import { IoSendOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import sendMessages from "../hooks/sendMessages";
import UsersData from "../Zustand/UsersData";
import { useAuthContext } from "../context/AuthContext";

export default function Message() {
  const { selectedConversation, setSelectedConversation } = UsersData();
  const { sendMessage, loading } = sendMessages();
  const [message, setMessage] = useState("");
  const { authUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, []);

  return (
    <>
      {!selectedConversation ? (
        <div
          className="
          w-full 
          bg-slate-800 
          lg:w-[60%] 
          rounded-tl-none
          rounded-tr-none
          rounded-bl-none
          rounded-br-none
          md:rounded-tl-none
          md:rounded-tr-lg
          md:rounded-bl-none
          md:rounded-br-lg
          border-2"
        >
          <div className="flex items-center justify-center flex-col h-[28rem] gap-3 p-[1rem] text-center">
            <h2 className="text-2xl font-semibold">
              Welcome 👋 {authUser.fullName} 🎃
            </h2>
            <p className="text-xl">Select a chat to start Message</p>
            <TiMessages size={80} />
          </div>
        </div>
      ) : (
        <>
          <div
            className="
            w-full 
            bg-slate-800 
            lg:w-[60%] 
            rounded-tl-none
            rounded-tr-none
            rounded-bl-none
            rounded-br-lg
            md:rounded-tl-none
            md:rounded-tr-lg
            md:rounded-bl-none
            md:rounded-br-lg
            border-2
            relative"
          >
            <h3 className="p-4 bg-white text-black font-lg font-medium rounded-tr-none md:rounded-tr-md">
              <span className="text-xl font-semibold text-slate-700 rounded-bl-lg md:rounded-bl-none">
                To:{" "}
              </span>
              <span className="underline">{selectedConversation.fullName}</span>
            </h3>
            <div>
              <div className="messages  h-[28rem] overflow-y-scroll scrollbar-style">
                <Messages />
              </div>
            </div>
            <div className="send-data absolute bottom-0 w-full">
              <input
                type="text"
                placeholder="Message"
                className="w-full p-3 rounded-bl-lg md:rounded-bl-none rounded-br-lg outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <IoSendOutline
                size={30}
                color="white"
                className="absolute bottom-2 right-2 cursor-pointer"
                type="submit"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
