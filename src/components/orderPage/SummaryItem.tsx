export default function SummaryItem({ label, value }: { label: string; value: number }) {
    return (
        <div className="flex justify-between mb-4">
            <p className="text-gray-600">{label}</p>
            <p className="font-semibold">{value} PLN</p>
        </div>
    );
}