import { useState } from "react";
import SectionContainer from "../../components/shared/SectionContainer";
import Grid from "../../components/shared/Grid";
import CarFilterButton from "../../components/homePage/CarFilterButton";
import { useFetch } from "../../hooks/useFetch";
import { getCars } from "../../api/cars";
import type { Car } from "../../types/car";

export default function CarsLibrary() {
  const cars = useFetch<Car[]>(getCars) ?? [];
  const [activeFilter, setActiveFilter] = useState<string>("Wszystkie");

  const categories: string[] = [];
  cars.forEach((car) => {
    if (!categories.includes(car.body_type)) {
      categories.push(car.body_type);
    }
  });

  const filteredCars =
    activeFilter === "Wszystkie"
      ? cars
      : cars.filter((car) => car.body_type === activeFilter);


  return (
    <div className="py-15 md:py-20 lg:py-25">
      <SectionContainer>
        <div>
          <Grid cols="grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center gap-4 md:gap-6">
              <h3 className="text-4xl md:text-5xl font-medium md:font-semibold">
                Nasza Flota
              </h3>
              <p className="text-gray-600 text-lg">
                Wybierz model dopasowany do Twojego stylu życia i poczuj
                wyjątkowe emocje na drodze.
              </p>
            </div>
            <div className="justify-start flex flex-wrap items-center md:justify-end gap-4 md:gap-6">
              <CarFilterButton
                title="Wszystkie"
                isActive={activeFilter === "Wszystkie"}
                onClick={() => setActiveFilter("Wszystkie")}
              />
              {categories.map((type) => (
                <CarFilterButton
                  key={type}
                  title={type}
                  isActive={activeFilter === type}
                  onClick={() => setActiveFilter(type)}
                />
              ))}
            </div>
          </Grid>
        </div>
      </SectionContainer>
    </div>
  );
}
