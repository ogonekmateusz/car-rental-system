import AdminPanelSection from "../../components/shared/AdminPanelSection.tsx";
import CarStats from "../../components/adminPage/CarStats.tsx";
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
  const cars = useFetch<Car[]>(getCars) ?? [];
  const totalCars = cars.length;
  const rentedCars = cars.filter((car) => car.is_rented).length;
  const availableCars = totalCars - rentedCars;
  const totalValue = cars.reduce((sum, car) => sum + car.price, 0);

  const statsData = [
    {
      title: "Cała flota",
      value: totalCars,
      icon: <IoCarSportOutline />,
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
      value: `${totalValue.toLocaleString("pl-PL")} zł`,
      icon: <IoCashOutline className="text-emerald-500" />,
    },
  ];

  return (
    <AdminPanelSection
      header={"Zarządzanie Flotą"}
      sectionHeadingButtonTitle={"+ DODAJ NOWY SAMOCHÓD"}
      sectionHeadingOnClick={() => {}}
      topText={"system zarządzania"}
    >
      <CarStats stats={statsData} />
    </AdminPanelSection>
  );
}
