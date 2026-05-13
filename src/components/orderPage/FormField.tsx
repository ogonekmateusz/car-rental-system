import InputLabel from "./InputLabel";

interface FormFieldProps {
  title: string;
  name: string;
  type?: "text" | "email" | "tel" | "date" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function FormField({
  title,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <InputLabel title={title} />

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          py-2
          border-b border-gray-300
          outline-none
          transition-colors
          focus:border-black
        "
      />
    </div>
  );
}
