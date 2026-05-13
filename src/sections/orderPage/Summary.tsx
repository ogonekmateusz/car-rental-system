import type { Car } from "../../types/car.ts";
import Tag from "../../components/orderPage/Tag.tsx"
import SummaryItem from "../../components/orderPage/SummaryItem.tsx";

export default function Summary({ car, numberOfDays }: { car: Car, numberOfDays: number }) {
    const days = numberOfDays;

    const rentalCost = car.price * days;
    const insuranceCost = 300;
    const serviceFee = 150;

    const total = rentalCost + insuranceCost + serviceFee;

    return (
        <section className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-[420px] space-y-6">

            <h3 className="text-2xl font-semibold">
                Podsumowanie wyboru
            </h3>

            <img
                src={car.image_url}
                alt={car.model}
                className="w-full h-[200px] object-cover rounded-xl"
            />

            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-semibold leading-tight">
                        {car.brand} {car.model}
                    </h2>

                    <div className="text-right">
                        <p className="text-2xl font-bold">
                            {car.price} PLN
                        </p>
                        <p className="text-gray-400 text-xs uppercase">
                            / dzień
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <Tag text={car.body_type} />
                    <Tag text={car.fuel_type} />
                    <Tag text={`${car.horsepower} KM`} />
                </div>
            </div>

            <hr className={`bg-gray-200 border-0 h-px`}/>


            <div>
                <SummaryItem
                    label={`Wynajem (${days} dni)`}
                    value={rentalCost}
                />
                <SummaryItem
                    label="Ubezpieczenie Premium"
                    value={insuranceCost}
                />
                <SummaryItem
                    label="Opłata serwisowa"
                    value={serviceFee}
                />
            </div>

            <hr className={`bg-gray-200 border-0 h-px`}/>

            <div className="flex justify-between items-center p-4 rounded-xl">
                <h3 className="text-xl font-bold">Razem</h3>
                <p className="text-3xl font-bold text-blue-600">
                    {total} PLN
                </p>
            </div>
        </section>
    );
}