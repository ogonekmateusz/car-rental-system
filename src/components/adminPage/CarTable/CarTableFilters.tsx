import { useState } from "react";
import {
  IoSearchOutline,
  IoFilterOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";

interface CarTableFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  availableBodyTypes: string[];
  selectedBodyType: string | null;
  onBodyTypeSelect: (type: string | null) => void;
}

export default function CarTableFilters({
  searchQuery,
  onSearchChange,
  availableBodyTypes,
  selectedBodyType,
  onBodyTypeSelect,
}: CarTableFiltersProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-5 border-b border-gray-100 flex justify-between items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-900">Lista Pojazdów</h2>

      <div className="flex items-center gap-3">
        <div className="relative">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Szukaj modelu..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium ${
              selectedBodyType
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 text-gray-700"
            }`}
          >
            <IoFilterOutline />
            {selectedBodyType ? `Filtruj: ${selectedBodyType}` : "Filtruj"}
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-20">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">
                  Typ nadwozia
                </div>

                <button
                  onClick={() => {
                    onBodyTypeSelect(null);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex justify-between items-center"
                >
                  Wszystkie
                  {selectedBodyType === null && (
                    <IoCheckmarkOutline className="text-blue-500" />
                  )}
                </button>

                {availableBodyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      onBodyTypeSelect(type);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex justify-between items-center"
                  >
                    {type}
                    {selectedBodyType === type && (
                      <IoCheckmarkOutline className="text-blue-500" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
