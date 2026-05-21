import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import OrderPage from "../pages/OrderPage.tsx";
import StatePage from "../pages/StatePage.tsx";
import AdminLoginPage from "../pages/AdminLoginPage.tsx";

import { getUserSession } from "../api/admin.ts";
import { useEffect, useState } from "react";
import Cars from "../sections/adminPage/Cars.tsx";

export default function Router() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      const s = await getUserSession();
      setSession(s);
      setLoading(false);
    };

    run();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rezerwacja" element={<OrderPage />} />

        <Route
          path="/login"
          element={
            session ? <Navigate to="/admin" replace /> : <AdminLoginPage />
          }
        />

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

        <Route
          path="/admin"
          element={session ? <AdminPage /> : <Navigate to="/login" replace />}
        >
          <Route index element={<div>dashboard</div>} />
          <Route path="flota" element={<Cars />} />
          <Route path="wynajmy" element={<div>wynajmy</div>} />
          <Route path="ustawienia" element={<div>Ustawienia</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
