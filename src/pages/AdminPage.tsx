import { Outlet } from "react-router-dom";
import Sidebar from "../components/adminPage/Sidebar";

export default function AdminPage() {
  return (
    <section className="flex min-h-screen md:flex-row flex-col bg-gray-50">
      <Sidebar />

      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </section>
  );
}
