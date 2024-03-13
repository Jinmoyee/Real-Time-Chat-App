import Message from "../components/Message";
import SideBar from "../components/SideBar";

export const Home = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[100%] md:w-[80%] flex flex-col md:flex-row min-h-[10%] h-[100%] md:h-[80%]">
        <SideBar />
        <Message />
      </div>
    </div>
  );
};
