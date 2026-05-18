import { useState } from "react";
import FormField from "../components/shared/FormField";
import Logo from "../components/shared/Logo.tsx";
import PrimaryButton from "../components/shared/PrimaryButton.tsx";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  return (
    <section className="w-full h-screen flex items-center justify-center bg-linear-to-tr from-black via-zinc-900 to-black px-6">
      <div className="w-full max-w-sm space-y-6">
        <div className="text-center">
          <Logo size="text-3xl" className="text-white" />
        </div>

        <div className="bg-white rounded-lg px-8 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.6)] space-y-7">
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-zinc-900">
              Logowanie do Panelu
            </h1>
            <p className="text-sm text-zinc-400">
              Wprowadź swoje dane, aby kontynuować
            </p>
          </div>

          <div className="space-y-5">
            <FormField
              title="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="admin@drive.pl"
            />
            <FormField
              title="Hasło"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>

          <PrimaryButton className="w-full" onClick={() => console.log(form)}>
            Zaloguj się
          </PrimaryButton>

          <p
            className="text-center text-sm text-zinc-400 hover:text-black transition-colors cursor-pointer"
            onClick={() => navigate("/")}
          >
            ← Wróć do strony głownej
          </p>
        </div>
      </div>
    </section>
  );
}
