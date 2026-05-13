import FormField from "../../components/orderPage/FormField";
import FormSection from "../../components/orderPage/FormSection";
import Grid from "../../components/shared/Grid";
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useEffect, useState } from "react";

export default function OrderForm({
  setNumberOfDays,
}: {
  setNumberOfDays: (days: number) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    rentStartDate: "",
    rentEndDate: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateDates = (start: string, end: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const startDate = new Date(start);
    const endDate = new Date(end);

    if (startDate < today) {
      return "Data odbioru nie może być w przeszłości";
    }

    if (endDate < startDate) {
      return "Data zwrotu nie może być wcześniejsza niż odbiór";
    }

    return null;
  };

  useEffect(() => {
    if (form.rentStartDate && form.rentEndDate) {
      const validationError = validateDates(
        form.rentStartDate,
        form.rentEndDate,
      );

      if (validationError) {
        setError(validationError);
        return;
      }

      setError(null);

      const startDate = new Date(form.rentStartDate);
      const endDate = new Date(form.rentEndDate);

      const diff = endDate.getTime() - startDate.getTime();
      const days = Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));

      setNumberOfDays(days);
    }
  }, [form.rentStartDate, form.rentEndDate, setNumberOfDays]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (error) return;

    console.log("FORM:", form);
  };

  return (
    <section>
      <div className="space-y-3">
        <h3 className="text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left">
          Wynajmij swój pojazd
        </h3>

        <p className="max-w-xl text-gray-600 text-center lg:text-left text-lg lg:text-xl leading-relaxed">
          Uzupełnij dane, aby sfinalizować rezerwację.
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form className="mt-10 space-y-10" onSubmit={handleSubmit}>
        <FormSection title="DANE OSOBOWE">
          <FormField
            title="Imię i Nazwisko"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
          />

          <Grid cols="grid-cols-1 md:grid-cols-2">
            <FormField
              title="Numer telefonu"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+48 000 000 000"
            />

            <FormField
              title="Adres e-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jan.kowalski@example.com"
            />
          </Grid>
        </FormSection>

        <FormSection title="SZCZEGÓŁY WYNAJMU">
          <Grid cols="grid-cols-1 md:grid-cols-2">
            <FormField
              title="Data odbioru"
              name="rentStartDate"
              type="date"
              value={form.rentStartDate}
              onChange={handleChange}
            />

            <FormField
              title="Data zwrotu"
              name="rentEndDate"
              type="date"
              value={form.rentEndDate}
              onChange={handleChange}
            />
          </Grid>
        </FormSection>

        <PrimaryButton
          onClick={() => {}}
          className="bg-blue-600 w-full shadow-sm py-3 md:py-2 lg:w-fit"
          disabled={!!error}
        >
          POTWIERDŹ WYNAJEM
        </PrimaryButton>
      </form>
    </section>
  );
}
