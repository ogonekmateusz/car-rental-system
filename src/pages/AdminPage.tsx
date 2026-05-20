import { Outlet } from "react-router-dom";
import Sidebar from "../components/adminPage/Sidebar";

export default function adminPage() {
  return (
    <section className="flex md:flex-row flex-col bg-gray-50">
      <Sidebar />
      <div className={"flex-1"}>
        <Outlet />
      </div>
    </section>
  );
}
