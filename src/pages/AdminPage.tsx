import { Outlet } from "react-router-dom";
import Sidebar from "../components/adminPage/Sidebar";

export default function adminPage() {
  return (
    <section className="flex bg-gray-50">
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </section>
  );
}
