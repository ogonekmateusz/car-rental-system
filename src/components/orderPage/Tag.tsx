export default function Tag({ text }: { text: string }) {
    return (
        <span className="bg-gray-100 px-3 py-1 text-xs text-gray-500 rounded-md uppercase">
            {text}
        </span>
    );
}