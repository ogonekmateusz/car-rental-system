import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../layouts/homePage";
import AdminPage from "../layouts/adminPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
