import { useState } from "react";
import AdminPanelSection from "../../components/shared/AdminPanelSection.tsx";
import Stats from "../../components/shared/Stats.tsx";
import TableFilters from "../../components/shared/TableFilters.tsx";
import DataTable from "../../components/shared/DataTable.tsx";
import CarTableRow from "../../components/adminPage/CarTableRow.tsx";
import AddCarModal from "../../components/adminPage/AddCarModal.tsx";
import { useFetch } from "../../hooks/useFetch.ts";
import { getCars, returnCar, deleteCar } from "../../api/cars.ts";
import type { Car } from "../../types/car.ts";
import {
  IoCarSportOutline,
  IoCheckmarkCircleOutline,
  IoKeyOutline,
  IoCashOutline,
} from "react-icons/io5";

export default function Cars() {
  const [refreshKey, setRefreshKey] = useState(0);
  const cars = useFetch<Car[]>(getCars, [refreshKey]) ?? [];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const bodyTypesList = [
    ...new Set(cars.map((c) => c.body_type).filter(Boolean)),
  ] as string[];

  const statsData = [
    {
      title: "Cała flota",
      value: cars.length,
      icon: <IoCarSportOutline className="text-blue-500" />,
    },
    {
      title: "Dostępne",
      value: cars.filter((c) => !c.is_rented).length,
      icon: <IoCheckmarkCircleOutline className="text-green-600" />,
    },
    {
      title: "Wypożyczone",
      value: cars.filter((c) => c.is_rented).length,
      icon: <IoKeyOutline className="text-orange-500" />,
    },
    {
      title: "Wartość floty",
      value: `${cars.reduce((s, c) => s + c.price, 0)} zł`,
      icon: <IoCashOutline className="text-emerald-500" />,
    },
  ];

  let filtered = cars;
  if (searchQuery)
    filtered = filtered.filter((c) =>
      `${c.brand} ${c.model}`.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  if (selectedBodyType)
    filtered = filtered.filter((c) => c.body_type === selectedBodyType);

  const currentItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleReturn = async (carId: number) => {
    if (await returnCar(carId)) setRefreshKey((k) => k + 1);
  };
  const handleDelete = async (carId: number) => {
    if (
      window.confirm("Czy chcesz usunąć ten samochód?") &&
      (await deleteCar(carId))
    )
      setRefreshKey((k) => k + 1);
  };

  return (
    <AdminPanelSection
      header="Zarządzanie Flotą"
      sectionHeadingButtonTitle="+ DODAJ NOWY SAMOCHÓD"
      sectionHeadingOnClick={() => setIsModalOpen(true)}
      topText="system zarządzania"
    >
      <div className="flex flex-col gap-8">
        <Stats stats={statsData} />
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <TableFilters
            title="Lista Pojazdów"
            searchQuery={searchQuery}
            onSearchChange={(v) => {
              setSearchQuery(v);
              setCurrentPage(1);
            }}
            searchPlaceholder="Szukaj modelu..."
            filterOptions={bodyTypesList}
            selectedFilter={selectedBodyType}
            onFilterSelect={(t) => {
              setSelectedBodyType(t);
              setCurrentPage(1);
            }}
            filterLabel="Typ nadwozia"
          />
          <DataTable
            items={currentItems}
            totalFilteredCount={filtered.length}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            columns={["Samochód", "Typ", "Status", "Stawka dzienna", "Akcje"]}
            renderRow={(car) => (
              <CarTableRow
                key={car.id}
                car={car}
                onReturn={handleReturn}
                onDelete={handleDelete}
              />
            )}
          />
        </div>
      </div>
      {isModalOpen && (
        <AddCarModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => setRefreshKey((k) => k + 1)}
        />
      )}
    </AdminPanelSection>
  );
}
