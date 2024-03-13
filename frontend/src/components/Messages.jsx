import UsersData from "../Zustand/UsersData";
import getMessages from "../hooks/getMessages";
import userListenMessages from "../hooks/userListenMessages";
import UsersMessages from "./UsersMessages";
import { useEffect, useRef } from "react";
export default function Messages() {
  const lastMessageRef = useRef();
  const { messages, loading } = getMessages();
  userListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="p-3">
      {loading && (
        <p className="text-lg font-semibold text-center">Loading...</p>
      )}
      {!loading && messages.length === 0 && (
        <p className="text-lg font-semibold text-center">
          Please type something to get started.
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message, idx) => (
          <div key={idx} ref={lastMessageRef}>
            <UsersMessages message={message} />
          </div>
        ))}
    </div>
  );
}
