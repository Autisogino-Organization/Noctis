import { useState } from "react";
import Servers from "../components/Servers";
import PrivateChats from "../components/PrivateChats";
import Chat from "../components/Chat";

function ChatPage() {
  return (
    <div className="flex flex-row relative w-full h-screen">
      <Servers />
      <PrivateChats />
      <Chat />
    </div>
  );
}

export default ChatPage;
