import type { Rental } from "../../types/Rental.ts";
import {
  IoCalendarOutline,
  IoPersonOutline,
  IoCarSportOutline,
} from "react-icons/io5";

function formatDate(d: string | null) {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function status(r: Rental): { label: string; dot: string; text: string } {
  if (r.returned_at)
    return { label: "Zwrócony", dot: "bg-gray-400", text: "text-gray-500" };
  if (new Date(r.date_to) < new Date())
    return { label: "Po terminie", dot: "bg-red-500", text: "text-red-600" };
  return { label: "Aktywny", dot: "bg-green-500", text: "text-green-600" };
}

export default function RentalTableRow({ rental }: { rental: Rental }) {
  const s = status(rental);
  return (
    <tr className="hover:bg-gray-50">
      {/* Klient */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <IoPersonOutline className="text-blue-500" />
          </div>
          <div>
            <div className="font-bold text-gray-950">
              {rental.client_name ?? `Klient #${rental.client_id}`}
            </div>
            <div className="text-xs text-gray-400">
              {rental.client_email ?? "—"}
            </div>
          </div>
        </div>
      </td>

      {/* Samochód */}
      <td className="p-4">
        <div className="flex items-center gap-3">
          {rental.car_image_url ? (
            <img
              src={rental.car_image_url}
              alt=""
              className="w-16 h-11 object-cover rounded-md"
            />
          ) : (
            <div className="w-16 h-11 rounded-md bg-gray-100 flex items-center justify-center">
              <IoCarSportOutline className="text-gray-400" />
            </div>
          )}
          <div>
            <div className="font-bold text-gray-950">
              {rental.car_brand && rental.car_model
                ? `${rental.car_brand} ${rental.car_model}`
                : `Auto #${rental.car_id}`}
            </div>
            <div className="text-xs text-gray-400">
              {rental.car_body_type ?? "—"}
            </div>
          </div>
        </div>
      </td>

      {/* Okres */}
      <td className="p-4">
        <div className="flex items-center gap-1.5 text-sm text-gray-600">
          <IoCalendarOutline className="text-gray-400" />
          {formatDate(rental.date_from)} – {formatDate(rental.date_to)}
        </div>
      </td>

      {/* Zwrot */}
      <td className="p-4 text-sm text-gray-500">
        {formatDate(rental.returned_at)}
      </td>

      {/* Status */}
      <td className="p-4">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${s.dot}`} />
          <span className={`text-sm font-medium ${s.text}`}>{s.label}</span>
        </div>
      </td>
    </tr>
  );
}
