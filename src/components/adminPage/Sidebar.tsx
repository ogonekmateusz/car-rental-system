import type { MenuItem } from "../../types/menuItem";
import { MdOutlineDashboard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
export default function Sidebar() {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Dashboard",
      icon: <MdOutlineDashboard />,
      href: "",
    },
    {
      id: 2,
      name: "Flota",
      icon: <FaCar/>,
      href: "",
    },
    {
      id: 3,
      name: "Wynajmy",
      icon: <CiCalendar/>,
      href: "",
    },
    {
      id: 4,
      name: "Ustawienia",
      icon: <CiSettings />,
      href: "",
    },
  ];
  return "h";
}
