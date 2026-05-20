import type { SideBarItem } from "../../types/sideBarItem";
import { MdOutlineDashboard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import PrimaryButton from "../shared/PrimaryButton";

export default function Sidebar() {
  const sideBarItems: SideBarItem[] = [
    {
      id: 1,
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      href: "",
      active: true,
    },
    {
      id: 2,
      name: "Flota",
      icon: <FaCar />,
      href: "",
      active: false,
    },
    {
      id: 3,
      name: "Wynajmy",
      icon: <CiCalendar />,
      href: "",
      active: false,
    },
    {
      id: 4,
      name: "Ustawienia",
      icon: <CiSettings />,
      href: "",
      active: false,
    },
  ];
  return (
    <aside className="bg-white h-screen w-48 flex flex-col justify-between p-4">
      <div className=" space-y-3">
        {sideBarItems.map((item) => (
          <div
            className={`cursor-pointer flex space-x-3 rounded-md px-3 py-2.5 items-center text-sm
    transition-colors duration-300 ease-out
    ${
      item.active
        ? "bg-black text-white"
        : "text-gray-800 hover:bg-black hover:text-white"
    }`}
          >
            <span>{item.icon}</span> <span>{item.name}</span>
          </div>
        ))}
      </div>
      <PrimaryButton onClick={() => {}}>Wyloguj się</PrimaryButton>
    </aside>
  );
}
