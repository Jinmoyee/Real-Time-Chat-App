import Message from "../components/Message";
import SideBar from "../components/SideBar";

export const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="w-[80%] max-h-[80vh] h-[80vh] flex justify-between flex-row flex-wrap">
        <SideBar />
        <Message />
      </div>
    </div>
  );
};
