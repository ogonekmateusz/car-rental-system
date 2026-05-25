import { useState } from "react";
import {
  IoSearchOutline,
  IoFilterOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";

interface TableFiltersProps {
  title: string;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filterOptions: string[];
  selectedFilter: string | null;
  onFilterSelect: (value: string | null) => void;
  filterLabel?: string;
}

export default function TableFilters({
  title,
  searchQuery,
  onSearchChange,
  searchPlaceholder = "Szukaj...",
  filterOptions,
  selectedFilter,
  onFilterSelect,
  filterLabel = "Filtruj",
}: TableFiltersProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="p-5 border-b border-gray-100 flex justify-between items-center gap-4">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

      <div className="flex items-center gap-3">
        <div className="relative">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm font-medium ${
              selectedFilter
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-gray-200 text-gray-700"
            }`}
          >
            <IoFilterOutline />
            {selectedFilter ? `${filterLabel}: ${selectedFilter}` : filterLabel}
          </button>

          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-20">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">
                  {filterLabel}
                </div>
                <button
                  onClick={() => {
                    onFilterSelect(null);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex justify-between items-center"
                >
                  Wszystkie
                  {selectedFilter === null && (
                    <IoCheckmarkOutline className="text-blue-500" />
                  )}
                </button>
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      onFilterSelect(option);
                      setIsDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex justify-between items-center"
                  >
                    {option}
                    {selectedFilter === option && (
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
