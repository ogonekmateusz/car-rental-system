import { Link } from "react-router-dom";
import type { SideBarItem } from "../../types/sideBarItem";

type Props = {
  item: SideBarItem;
};

export default function SideBarItemComponent({ item }: Props) {
  return (
    <Link
      to={"/" + item.href}
      className={`cursor-pointer flex space-x-3 rounded-md px-3 py-2.5 items-center text-sm
      transition-colors duration-300 ease-out
      ${
        item.active
          ? "bg-black text-white"
          : "text-gray-800 hover:bg-black hover:text-white"
      }`}
    >
      <span>{item.icon}</span>
      <span>{item.name}</span>
    </Link>
  );
}
