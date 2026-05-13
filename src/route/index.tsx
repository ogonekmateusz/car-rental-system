import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../layouts/HomePage";
import AdminPage from "../layouts/AdminPage";
import OrderPage from "../layouts/OrderPage.tsx";
import EmptyStatePage from "../layouts/EmptyStatePage.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rezerwacja" element={<OrderPage />} />
        <Route path="/admin" element={<AdminPage />} />

        <Route
          path="*"
          element={
            <EmptyStatePage
              title="404 - Strona nie została znaleziona"
              description="Wygląda na to, że ta strona nie istnieje."
              linkLabel="Wróć na stronę główną"
              linkTo="/"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
