import type { Car } from "../../types/car";
import PrimaryButton from "../shared/PrimaryButton";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white shadow-sm border border-gray-100">
      <div className="flex items-center justify-center ">
        <img
          src={car.image_url}
          alt={car.model}
          className="object-contain h-full w-full"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-xl font-semibold leading-tight">
            {car.brand} {car.model}
          </h4>
          <div className="text-right shrink-0">
            <span className="text-blue-600 font-bold text-lg">{car.price}</span>
            <span className="text-blue-600 font-bold text-lg"> PLN</span>
            <span className="text-gray-400 text-sm">/doba</span>
          </div>
        </div>

        <p className="text-xs tracking-widest text-gray-400 uppercase">
          {car.fuel_type} • {car.horsepower} KM
        </p>

    

        <PrimaryButton className="mt-7" onClick={() => {}}>WYPOŻYCZ TERAZ</PrimaryButton>
      </div>
    </div>
  );
}
