import { useState } from "react";
import type { SideBarItem } from "../../types/sideBarItem";

import { FaCar, FaBars } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import PrimaryButton from "../shared/PrimaryButton";
import SideBarItemComponent from "./SideBarItem";
import Logo from "../shared/Logo";

import { logoutUser } from "../../api/admin.ts";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logOutUser = async () => {
    logoutUser();
    navigate("/");
  };

  const sideBarItems: SideBarItem[] = [
    {
      id: 1,
      name: "Flota",
      icon: <FaCar />,
      href: "/admin/flota",
    },
    {
      id: 2,
      name: "Wynajmy",
      icon: <CiCalendar />,
      href: "/admin/wynajmy",
    },
  ];

  return (
    <>
      {/* MOBILE TOPBAR */}
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-zinc-200 bg-white/80 backdrop-blur-md px-4 py-4">
        <Logo size={"text-2xl"} />
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-xl p-2 transition hover:bg-zinc-100"
        >
          <FaBars className="text-2xl text-black" />
        </button>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 z-50 h-screen w-72 bg-white shadow-2xl
          transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex h-full flex-col justify-between p-5">
          {/* TOP */}
          <div>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <Logo size={"text-2xl"} />

                <p className="text-sm text-zinc-500">Panel administratora</p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl p-2 transition hover:bg-zinc-100"
              >
                <IoClose className="text-2xl text-zinc-700" />
              </button>
            </div>

            <div className="space-y-2">
              {sideBarItems.map((item) => (
                <div key={item.id} onClick={() => setIsOpen(false)}>
                  <SideBarItemComponent item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM */}
          <PrimaryButton onClick={() => {}}>Wyloguj się</PrimaryButton>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden h-screen w-64 flex-col justify-between border-r border-zinc-200 bg-white p-5 md:flex">
        <div>
          <div className="mb-10">
            <Logo size={"text-2xl"} />

            <p className="text-sm text-zinc-500">Panel administratora</p>
          </div>

          <div className="space-y-2">
            {sideBarItems.map((item) => (
              <SideBarItemComponent key={item.id} item={item} />
            ))}
          </div>
        </div>

        <PrimaryButton onClick={logOutUser}>Wyloguj się</PrimaryButton>
      </aside>
    </>
  );
}
