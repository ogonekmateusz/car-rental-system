export default function CarFilterButton({
  title,
  isActive,
}: {
  title: string;
  isActive: boolean;
}) {
  return (
    <button
      className={`font-medium py-1.5 px-5 rounded-full cursor-pointer ${isActive ? "bg-black text-white" : "bg-gray-200 text-black hover:bg-black hover:text-white transition-colors duration-300"}`}
    >
      {title}
    </button>
  );
}
