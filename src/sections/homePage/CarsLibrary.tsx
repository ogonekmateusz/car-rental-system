import { useState } from "react";
import SectionContainer from "../../components/shared/SectionContainer";
import Grid from "../../components/shared/Grid";
import CarFilterButton from "../../components/homePage/CarFilterButton";
import { useFetch } from "../../hooks/useFetch";
import { getCars} from "../../api/cars";
import type { Car } from "../../types/car";
import CarCard from "../../components/homePage/CarCard";
import PrimaryButton from "../../components/shared/PrimaryButton";

const INITIAL_LIMIT = 6;

export default function CarsLibrary() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string>("Wszystkie");

  //fetch aut
  const cars = useFetch<Car[]>(getCars) ?? [];

  //fetch kategorii nadwozia aut
  const categories: string[] = [];
  cars.forEach((car) => {
    if (!categories.includes(car.body_type)) categories.push(car.body_type);
  });

  //nowa tablica aut po zastosowaniu filtra
  const filteredCars =
    activeFilter === "Wszystkie"
      ? cars
      : cars.filter((car) => car.body_type === activeFilter);

  //auta do wyświetlenia (wszystkie lub ograniczone do INITIAL_LIMIT)
  const visibleCars = showAll
    ? filteredCars
    : filteredCars.slice(0, INITIAL_LIMIT);
  const hasMore = filteredCars.length > INITIAL_LIMIT;

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
                onClick={() => {
                  setActiveFilter("Wszystkie");
                  setShowAll(false);
                }}
              />
              {categories.map((type) => (
                <CarFilterButton
                  key={type}
                  title={type}
                  isActive={activeFilter === type}
                  onClick={() => {
                    setActiveFilter(type);
                    setShowAll(false);
                  }}
                />
              ))}
            </div>
          </Grid>
        </div>
        <div className="mt-10">
          <Grid cols="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCars.map((car) => (
              <div key={car.id} className="rounded-lg p-4">
                <CarCard car={car} />
              </div>
            ))}
          </Grid>
          {hasMore && (
            <div className="flex justify-center mt-10">
              <PrimaryButton onClick={() => setShowAll((prev) => !prev)}>
                {showAll ? "ZWIŃ" : `POKAŻ WSZYSTKIE (${filteredCars.length})`}
              </PrimaryButton>
            </div>
          )}
        </div>
      </SectionContainer>
    </div>
  );
}
