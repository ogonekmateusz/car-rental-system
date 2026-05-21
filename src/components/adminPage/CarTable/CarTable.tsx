import type { Car } from "../../../types/car.ts";
import { returnCar, deleteCar } from "../../../api/cars.ts";
import CarTableRow from "./CarTableRow.tsx";
import Pagination from "./Pagination.tsx";

interface CarTableProps {
  cars: Car[];
  totalFilteredCount: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onRefresh: () => void;
}

export default function CarTable({
  cars,
  totalFilteredCount,
  currentPage,
  itemsPerPage,
  onPageChange,
  onRefresh,
}: CarTableProps) {
  const totalPages = Math.ceil(totalFilteredCount / itemsPerPage);

  const handleReturn = async (carId: number) => {
    const isReturned = await returnCar(carId);
    if (isReturned) {
      onRefresh();
    }
  };

  const handleDelete = async (carId: number) => {
    const isConfirmed = window.confirm("Czy chcesz usunąć ten samochód?");
    if (isConfirmed) {
      const isDeleted = await deleteCar(carId);
      if (isDeleted) {
        onRefresh();
      }
    }
  };

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              <th className="p-4 text-xs font-semibold uppercase text-gray-400">
                Samochód
              </th>
              <th className="p-4 text-xs font-semibold uppercase text-gray-400">
                Typ
              </th>
              <th className="p-4 text-xs font-semibold uppercase text-gray-400">
                Status
              </th>
              <th className="p-4 text-xs font-semibold uppercase text-gray-400">
                Stawka dzienna
              </th>
              <th className="p-4 text-xs font-semibold uppercase text-gray-400 text-right">
                Akcje
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {cars.map((car) => (
              <CarTableRow
                key={car.id}
                car={car}
                onReturn={handleReturn}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
