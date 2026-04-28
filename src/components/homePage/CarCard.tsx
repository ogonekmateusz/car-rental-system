import type { Car } from "../../types/car";
import PrimaryButton from "../shared/PrimaryButton";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div
      className={`relative bg-white shadow-sm border overflow-hidden ${
        car.is_rented ? "border-gray-200" : "border-gray-100"
      }`}
    >
      {car.is_rented && (
        <div className="absolute top-9 -right-8 z-20 rotate-45 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-10 py-1 shadow-md">
          Niedostępny
        </div>
      )}

      <div
        className={`flex items-center justify-center ${car.is_rented ? "grayscale opacity-50" : ""}`}
      >
        <img
          src={car.image_url}
          alt={car.model}
          className="object-contain h-full w-full transition-all duration-300"
        />
      </div>

      <div
        className={`p-4 flex flex-col gap-3 ${car.is_rented ? "opacity-50" : ""}`}
      >
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-xl font-semibold leading-tight">
            {car.brand} {car.model}
          </h4>
          <div className="text-right shrink-0">
            <span className="text-blue-600 font-bold text-lg">
              {car.price} PLN
            </span>
            <span className="text-gray-400 text-sm block">/doba</span>
          </div>
        </div>

        <p className="text-xs tracking-widest text-gray-400 uppercase">
          {car.fuel_type} • {car.horsepower} KM
        </p>

        {car.is_rented ? (
          <div className="mt-7 flex items-center gap-2 border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-400">
            <svg
              className="w-4 h-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
            Pojazd aktualnie wypożyczony
          </div>
        ) : (
          <PrimaryButton className="mt-7" onClick={() => {}}>
            WYPOŻYCZ TERAZ
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
