import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../layouts/HomePage";
import AdminPage from "../layouts/AdminPage";
import OrderPage from "../layouts/OrderPage.tsx";
import StatePage from "../layouts/StatePage.tsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rezerwacja" element={<OrderPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/sukces"
          element={
            <StatePage
              title="Rezerwacja została przyjęta"
              description="Dziękujemy za złożenie rezerwacji. Skontaktujemy się z Tobą wkrótce w celu potwierdzenia szczegółów wynajmu pojazdu."
              linkLabel="Wróć na stronę główną"
              linkTo="/"
            />
          }
        />

        <Route
          path="*"
          element={
            <StatePage
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
