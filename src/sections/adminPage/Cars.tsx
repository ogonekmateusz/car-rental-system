import { useState } from "react";
import AdminPanelSection from "../../components/shared/AdminPanelSection.tsx";
import CarStats from "../../components/adminPage/CarStats.tsx";
import CarTableFilters from "../../components/adminPage/CarTable/CarTableFilters.tsx";
import CarTable from "../../components/adminPage/CarTable/CarTable.tsx";
import AddCarModal from "../../components/adminPage/AddCarModal.tsx"; // <-- Nowy import
import { useFetch } from "../../hooks/useFetch.ts";
import { getCars } from "../../api/cars.ts";
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

  const [isModalOpen, setIsModalOpen] = useState(false); // <-- Stan otwarcia modala
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBodyType, setSelectedBodyType] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const bodyTypesList: string[] = [];
  cars.forEach((car) => {
    if (car.body_type && !bodyTypesList.includes(car.body_type)) {
      bodyTypesList.push(car.body_type);
    }
  });

  const totalCars = cars.length;
  const rentedCars = cars.filter((car) => car.is_rented === true).length;
  const availableCars = cars.filter((car) => car.is_rented === false).length;

  let totalValue = 0;
  cars.forEach((car) => {
    totalValue += car.price;
  });

  const statsData = [
    {
      title: "Cała flota",
      value: totalCars,
      icon: <IoCarSportOutline className="text-blue-500" />,
    },
    {
      title: "Dostępne",
      value: availableCars,
      icon: <IoCheckmarkCircleOutline className="text-green-600" />,
    },
    {
      title: "Wypożyczone",
      value: rentedCars,
      icon: <IoKeyOutline className="text-orange-500" />,
    },
    {
      title: "Wartość floty",
      value: `${totalValue} zł`,
      icon: <IoCashOutline className="text-emerald-500" />,
    },
  ];

  let filteredCars = cars;

  if (searchQuery !== "") {
    filteredCars = filteredCars.filter((car) => {
      const fullName = `${car.brand} ${car.model}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    });
  }

  if (selectedBodyType !== null) {
    filteredCars = filteredCars.filter((car) => {
      return car.body_type === selectedBodyType;
    });
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCarsItems = filteredCars.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  return (
    <AdminPanelSection
      header={"Zarządzanie Flotą"}
      sectionHeadingButtonTitle={"+ DODAJ NOWY SAMOCHÓD"}
      sectionHeadingOnClick={() => setIsModalOpen(true)} // <-- Zmienione na otwarcie modala
      topText={"system zarządzania"}
    >
      <div className="flex flex-col gap-8">
        <CarStats stats={statsData} />

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <CarTableFilters
            searchQuery={searchQuery}
            onSearchChange={(value) => {
              setSearchQuery(value);
              setCurrentPage(1);
            }}
            availableBodyTypes={bodyTypesList}
            selectedBodyType={selectedBodyType}
            onBodyTypeSelect={(type) => {
              setSelectedBodyType(type);
              setCurrentPage(1);
            }}
          />

          <CarTable
            cars={currentCarsItems}
            totalFilteredCount={filteredCars.length}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
            onRefresh={() => setRefreshKey(refreshKey + 1)}
          />
        </div>
      </div>

      {/* Renderowanie modala */}
      {isModalOpen && (
        <AddCarModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => setRefreshKey(refreshKey + 1)}
        />
      )}
    </AdminPanelSection>
  );
}
