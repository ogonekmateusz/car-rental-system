import FormField from "../../components/shared/FormField";
import FormSection from "../../components/orderPage/FormSection";
import Grid from "../../components/shared/Grid";
import PrimaryButton from "../../components/shared/PrimaryButton";
import { useEffect, useState } from "react";
import { rentCar } from "../../api/cars.ts";
import { useNavigate } from "react-router-dom";

export default function OrderForm({
  carId,
  setNumberOfDays,
}: {
  setNumberOfDays: (days: number) => void;
  carId: number;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    rentStartDate: "",
    rentEndDate: "",
  });
  const navigate = useNavigate();
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

  const validateForm = () => {
    if (!form.name.trim()) {
      return "Podaj imię i nazwisko";
    }

    if (!form.phone.trim()) {
      return "Podaj numer telefonu";
    }

    if (!form.email.trim()) {
      return "Podaj adres email";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return "Niepoprawny adres email";
    }

    const phoneRegex = /^[0-9+\s-]{7,20}$/;

    if (!phoneRegex.test(form.phone)) {
      return "Niepoprawny numer telefonu";
    }

    if (!form.rentStartDate) {
      return "Wybierz datę odbioru";
    }

    if (!form.rentEndDate) {
      return "Wybierz datę zwrotu";
    }

    return validateDates(form.rentStartDate, form.rentEndDate);
  };

  useEffect(() => {
    if (!form.rentStartDate || !form.rentEndDate) return;

    const startDate = new Date(form.rentStartDate);
    const endDate = new Date(form.rentEndDate);

    const diff = endDate.getTime() - startDate.getTime();

    const days = Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));

    setNumberOfDays(days);
  }, [form.rentStartDate, form.rentEndDate, setNumberOfDays]);

  const handleRent = async () => {
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    await rentCar({
      name: form.name,
      email: form.email,
      phone: form.phone,
      carId,
      dateFrom: form.rentStartDate,
      dateTo: form.rentEndDate,
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      rentStartDate: "",
      rentEndDate: "",
    });

    setNumberOfDays(1);
    navigate("/sukces");
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

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form className="mt-10 space-y-10" onSubmit={(e) => e.preventDefault()}>
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
          onClick={handleRent}
          className="bg-blue-600 w-full shadow-sm py-3 md:py-2 lg:w-fit disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-70 "
          disabled={
            !form.name ||
            !form.email ||
            !form.phone ||
            !form.rentStartDate ||
            !form.rentEndDate
          }
        >
          POTWIERDŹ WYNAJEM
        </PrimaryButton>
      </form>
    </section>
  );
}
