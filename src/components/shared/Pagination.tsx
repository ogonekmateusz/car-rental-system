import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end items-center gap-1">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border rounded-lg bg-white text-gray-500 disabled:opacity-50"
      >
        <IoChevronBackOutline />
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
            number === currentPage
              ? "bg-black text-white"
              : "bg-white border text-gray-700"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className="p-2 border rounded-lg bg-white text-gray-500 disabled:opacity-50"
      >
        <IoChevronForwardOutline />
      </button>
    </div>
  );
}
