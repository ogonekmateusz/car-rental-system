import { useState } from "react";
import AdminPanelSection from "../../components/shared/AdminPanelSection.tsx";
import Stats from "../../components/shared/Stats.tsx";
import TableFilters from "../../components/shared/TableFilters.tsx";
import DataTable from "../../components/shared/DataTable.tsx";
import RentalTableRow from "../../components/adminPage/RentalTableRow.tsx";
import { useFetch } from "../../hooks/useFetch.ts";
import { getRentals } from "../../api/rentals.ts";
import type { Rental } from "../../types/Rental.ts";
import {
  IoCarSportOutline,
  IoCheckmarkCircleOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from "react-icons/io5";

function rentalStatus(r: Rental) {
  if (r.returned_at) return "returned";
  if (new Date(r.date_to) < new Date()) return "overdue";
  return "active";
}

const STATUS_LABELS: Record<string, string> = {
  active: "Aktywny",
  overdue: "Po terminie",
  returned: "Zwrócony",
};

export default function Rentals() {
  const rentals = useFetch<Rental[]>(getRentals, []) ?? [];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const statsData = [
    {
      title: "Wszystkie wynajmy",
      value: rentals.length,
      icon: <IoCarSportOutline className="text-blue-500" />,
    },
    {
      title: "Aktywne",
      value: rentals.filter((r) => rentalStatus(r) === "active").length,
      icon: <IoCheckmarkCircleOutline className="text-green-600" />,
    },
    {
      title: "Po terminie",
      value: rentals.filter((r) => rentalStatus(r) === "overdue").length,
      icon: <IoTimeOutline className="text-red-500" />,
    },
    {
      title: "Klientów",
      value: new Set(rentals.map((r) => r.client_id)).size,
      icon: <IoPeopleOutline className="text-emerald-500" />,
    },
  ];

  let filtered = rentals;
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter((r) =>
      `${r.car_brand ?? ""} ${r.car_model ?? ""} ${r.client_name ?? ""}`
        .toLowerCase()
        .includes(q),
    );
  }
  if (selectedStatus)
    filtered = filtered.filter((r) => rentalStatus(r) === selectedStatus);

  const currentItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <AdminPanelSection
      header="Wynajmy"
      sectionHeadingButtonTitle=""
      sectionHeadingOnClick={() => {}}
      topText="system zarządzania"
    >
      <div className="flex flex-col gap-8">
        <Stats stats={statsData} />
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <TableFilters
            title="Lista Wynajmów"
            searchQuery={searchQuery}
            onSearchChange={(v) => {
              setSearchQuery(v);
              setCurrentPage(1);
            }}
            searchPlaceholder="Szukaj klienta lub auta..."
            filterOptions={Object.keys(STATUS_LABELS)}
            selectedFilter={selectedStatus}
            onFilterSelect={(t) => {
              setSelectedStatus(t);
              setCurrentPage(1);
            }}
            filterLabel="Status"
          />
          <DataTable
            items={currentItems}
            totalFilteredCount={filtered.length}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            columns={["Klient", "Samochód", "Okres wynajmu", "Zwrot", "Status"]}
            renderRow={(rental) => (
              <RentalTableRow key={rental.id} rental={rental} />
            )}
          />
        </div>
      </div>
    </AdminPanelSection>
  );
}
