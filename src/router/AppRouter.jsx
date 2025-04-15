import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingHome from "@/pages/landing/pages/Landing";
import ChatPage from "@/pages/channels/@me/index";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/channels" element={<ChatPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
