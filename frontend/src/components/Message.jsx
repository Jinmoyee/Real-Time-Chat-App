import React, { useState } from "react";
import Messages from "./Messages";
import { IoSendOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

export default function Message() {
  const [noChatSelected, setNoChatSelected] = useState(true);
  return (
    <>
      {noChatSelected ? (
        <div className="w-full bg-slate-800 lg:w-[60%] rounded-r-lg border-2">
          <div className="flex items-center justify-center flex-col h-full gap-3">
            <h2 className="text-2xl font-semibold">Welcome 👋 Joe Doe 🎃</h2>
            <p className="text-xl">Select a chat to start Message</p>
            <TiMessages size={80}/>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full bg-slate-800 lg:w-[60%] rounded-r-lg border-2">
            <h3 className="p-4 bg-white text-black text-lg font-medium rounded-tr-md">
              Sumit
            </h3>
            <div>
              <div className="messages  h-[28rem] overflow-y-scroll scrollbar-style">
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
                <Messages />
              </div>
            </div>
            <div className="send-data relative">
              <input
                type="text"
                placeholder="Message"
                className="w-full p-3 rounded-br-lg outline-none"
              />
              <IoSendOutline
                size={30}
                color="white"
                className="absolute bottom-2 right-2"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
