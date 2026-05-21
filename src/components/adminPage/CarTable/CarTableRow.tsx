import { useState, useRef } from "react";
import type { Car } from "../../../types/car.ts";
import {
  IoEllipsisHorizontal,
  IoArrowBackOutline,
  IoTrashOutline,
} from "react-icons/io5";

interface CarTableRowProps {
  car: Car;
  onReturn: (carId: number) => Promise<void>;
  onDelete: (carId: number) => Promise<void>;
}

export default function CarTableRow({
  car,
  onReturn,
  onDelete,
}: CarTableRowProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const handleToggleMenu = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.right - 192,
      });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="p-4">
        <div className="flex items-center gap-4">
          <img
            src={car.image_url || "https://placehold.co/60x40"}
            alt=""
            className="w-16 h-11 object-cover rounded-md"
          />
          <div>
            <div className="font-bold text-gray-950">
              {car.brand} {car.model}
            </div>
            <div className="text-xs text-gray-400">
              VIN: {car.id * 1111} • {car.body_type}
            </div>
          </div>
        </div>
      </td>

      <td className="p-4">
        <span className="px-2 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-500">
          {car.fuel_type === "Electric" ? "Elektryczny" : car.body_type}
        </span>
      </td>

      <td className="p-4">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${car.is_rented ? "bg-blue-600" : "bg-green-500"}`}
          />
          <span
            className={`text-sm font-medium ${car.is_rented ? "text-blue-600" : "text-green-600"}`}
          >
            {car.is_rented ? "Wynajęty" : "Dostępny"}
          </span>
        </div>
      </td>

      <td className="p-4 font-bold text-gray-950">
        {car.price.toLocaleString("pl-PL")} PLN
      </td>

      <td className="p-4 text-right relative">
        <button
          ref={buttonRef} // Przypisujemy ref do przycisku
          onClick={handleToggleMenu}
          className="p-2 text-gray-400 hover:text-gray-600"
        >
          <IoEllipsisHorizontal />
        </button>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Zmiana z absolute na fixed + dynamiczne style z pozycją */}
            <div
              style={{ top: `${coords.top}px`, left: `${coords.left}px` }}
              className="fixed mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-20 text-left"
            >
              {car.is_rented ? (
                <button
                  onClick={() => {
                    onReturn(car.id);
                    setIsMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 text-sm text-blue-600 hover:bg-gray-50 flex items-center gap-2 font-medium"
                >
                  <IoArrowBackOutline /> Zwróć z wynajmu
                </button>
              ) : (
                <div className="px-4 py-2 text-xs text-gray-400 italic">
                  Brak akcji
                </div>
              )}

              <hr className="my-1 border-gray-100" />

              <button
                onClick={() => {
                  onDelete(car.id);
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2 font-medium"
              >
                <IoTrashOutline /> Usuń samochód
              </button>
            </div>
          </>
        )}
      </td>
    </tr>
  );
}
