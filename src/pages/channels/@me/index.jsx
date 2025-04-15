import ServersContainer from "@/components/@me/ServersContainer";
import PrivateChannels from "@/components/@me/PrivateChannels";
import MessagesContainer from "@/components/@me/MessagesContainer";

function ChatPage() {
  return (
    <div className="flex flex-row relative w-full h-screen">
      <ServersContainer />
      <PrivateChannels />
      <MessagesContainer />
    </div>
  );
}

export default ChatPage;
