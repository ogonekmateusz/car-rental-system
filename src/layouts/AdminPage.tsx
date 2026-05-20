import { Outlet } from "react-router-dom";
import Sidebar from "../components/adminPage/Sidebar";

export default function adminPage() {
  return (
    <section>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </section>
  );
}
