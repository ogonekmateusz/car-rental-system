import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import OrderPage from "../pages/OrderPage.tsx";
import StatePage from "../pages/StatePage.tsx";
import AdminLoginPage from "../pages/AdminLoginPage.tsx";

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
        <Route path="login" element={<AdminLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
