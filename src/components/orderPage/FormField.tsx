import InputLabel from "./InputLabel";

interface FormFieldProps {
  title: string;
  type?: string;
  placeholder?: string;
}

export default function FormField({
  title,
  type = "text",
  placeholder,
}: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <InputLabel title={title} />

      <input
        type={type}
        placeholder={placeholder}
        className="border-b w-full py-2 outline-none border-gray-300 focus:border-black transition-colors"
      />
    </div>
  );
}