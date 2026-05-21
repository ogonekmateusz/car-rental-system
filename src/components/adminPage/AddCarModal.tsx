import { useState } from "react";
import { addCar } from "../../api/cars.ts";
import { IoCloseOutline } from "react-icons/io5";
import PrimaryButton from "../shared/PrimaryButton.tsx";

interface AddCarModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddCarModal({ onClose, onSuccess }: AddCarModalProps) {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [bodyType, setBodyType] = useState("SUV");
  const [fuelType, setFuelType] = useState("Petrol");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!brand || !model || !price) {
      alert("Wypełnij podstawowe pola (Marka, Model, Cena)!");
      return;
    }

    const success = await addCar({
      brand,
      model,
      body_type: bodyType,
      fuel_type: fuelType,
      price: Number(price),
      image_url: imageUrl,
    });

    if (success) {
      onSuccess();
      onClose();
    } else {
      alert("Coś poszło nie tak przy dodawaniu samochodu.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-10 relative border border-gray-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          <IoCloseOutline />
        </button>

        <h3 className="text-xl font-bold text-gray-950 mb-6">
          Dodaj nowy samochód
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
              Marka
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="np. Audi"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
              Model
            </label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder="np. A4"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-black"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
                Nadwozie
              </label>
              <select
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-black"
              >
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Kombi">Kombi</option>
                <option value="Coupe">Coupe</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
                Paliwo
              </label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-black"
              >
                <option value="Petrol">Benzyna</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Elektryczny</option>
                <option value="Hybrid">Hybryda</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
              Cena za dzień (PLN)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="np. 250"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
              Link do zdjęcia
            </label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:border-black"
            />
          </div>

          <PrimaryButton onClick={() => {}}>Zapisz pojazd</PrimaryButton>
        </form>
      </div>
    </div>
  );
}
