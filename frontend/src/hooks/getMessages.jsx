import { useEffect, useState } from "react";
import UsersData from "../Zustand/UsersData";
import { toast } from "sonner";

// export default function getMessages() {
//   const { selectedConversation, messages, setMessages } = UsersData();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getMessage = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`/api/message/${selectedConversation._id}`);
//         const data = await res.json();
//         if (data.error) {
//           toast.error(data.error);
//         }
//         setMessages(data);
//       } catch (error) {
//         toast.error(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (selectedConversation?._id) {
//       getMessage();
//     }
//   }, [selectedConversation?._id, setMessages]);
//   return { loading, messages };
// }

const getMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = UsersData();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/message/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
export default getMessages;
