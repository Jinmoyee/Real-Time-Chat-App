// import { create } from "zustand";

// export const UsersData = create((set) => ({
//   selectedConversation: null,
//   setSelectedConversation: (selectedConversation) =>
//     set({ selectedConversation }),
//   message: [],
//   setMessage: (message) => set({ message }),
// }));

import { create } from "zustand";

const UsersData = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default UsersData;
