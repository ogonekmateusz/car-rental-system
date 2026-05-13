interface InputLabelProps {
  title: String;
}

export default function InputLabel({ title }: InputLabelProps) {
  return (
    <p className="text-sm text-gray-400 tracking-wide font-medium">{title}</p>
  );
}
