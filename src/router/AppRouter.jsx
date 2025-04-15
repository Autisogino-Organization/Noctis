import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Import your page components
import LandingHome from "../pages/landing/pages/Landing";
import Chat from "../pages/chats/pages/ChatPage";
// Import other pages as needed

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
