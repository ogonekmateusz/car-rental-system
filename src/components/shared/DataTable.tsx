import React from "react";
import Pagination from "./Pagination.tsx";

interface DataTableProps<T> {
  items: T[];
  totalFilteredCount: number;
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  columns: string[];
  renderRow: (item: T) => React.ReactNode;
  emptyMessage?: string;
}

export default function DataTable<T>({
  items,
  totalFilteredCount,
  currentPage,
  itemsPerPage,
  onPageChange,
  columns,
  renderRow,
  emptyMessage = "Brak wyników.",
}: DataTableProps<T>) {
  const totalPages = Math.ceil(totalFilteredCount / itemsPerPage);

  return (
    <div className="relative">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100">
              {columns.map((col) => (
                <th
                  key={col}
                  className="p-4 text-xs font-semibold uppercase text-gray-400"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.length > 0 ? (
              items.map((item, i) => (
                <React.Fragment key={i}>{renderRow(item)}</React.Fragment>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="p-12 text-center text-sm text-gray-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
