import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormField from "../components/shared/FormField";
import Logo from "../components/shared/Logo.tsx";
import PrimaryButton from "../components/shared/PrimaryButton.tsx";
import { loginUser } from "../api/admin.ts";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      setError("Wypełnij wszystkie pola");
      return;
    }

    try {
      setLoading(true);

      const user = await loginUser({
        email: form.email,
        password: form.password,
      });

      if (user) {
        window.location.href = "/admin";
      }
    } catch {
      setError("Nieprawidłowy email lub hasło");
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-5">
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

            {error && (
              <div className="text-sm text-red-500 text-center bg-red-50 border border-red-200 rounded-md p-2">
                {error}
              </div>
            )}

            <PrimaryButton
              className="w-full"
              onClick={() => {}}
              disabled={loading}
            >
              {loading ? "Logowanie..." : "Zaloguj się"}
            </PrimaryButton>
          </form>

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
