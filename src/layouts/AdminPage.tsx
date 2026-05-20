import { Outlet } from "react-router-dom";

export default function adminPage() {
  return (
    <section>
      <div className="sideBar">side</div>
      <div>
        <Outlet />
      </div>
    </section>
  );
}
