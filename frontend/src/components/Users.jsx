import UsersData from "../Zustand/UsersData";
import { useSocketContext } from "../context/SocketContext";
export default function Users({ users, emoji, idx }) {
  const lastUser = idx;
  const { selectedConversation, setSelectedConversation } = UsersData();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(users._id);

  const isSelected = selectedConversation?._id === users._id;
  // console.log(lastUser);
  return (
    <div
      className={`flex items-center border-b justify-between w-full p-2 pt-3 hover:bg-slate-800 ${
        isSelected ? "bg-slate-800" : ""
      }
      `}
      onClick={() => setSelectedConversation(users)}
    >
      <div className="flex items-center">
        <div>
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-10 rounded-full">
              <img src={users.avatar} />
            </div>
          </div>
        </div>
        <p className="text-white font-medium text-lg ml-2">{users.fullName}</p>
      </div>
      <div className="text-2xl">{emoji}</div>
    </div>
  );
}
