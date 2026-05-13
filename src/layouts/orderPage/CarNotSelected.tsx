import { Link } from "react-router-dom";
import Logo from "../../components/shared/Logo.tsx";

export default function CarNotSelected() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-black via-zinc-900 to-black px-6">
      <div className="text-center max-w-md flex flex-col items-center gap-6">
        <Logo size={`text-4xl lg:text-5xl`} className={`text-white`} />

        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Samochód nie został wybrany
        </h1>

        <p className="text-white/60 text-sm md:text-base">
          Aby kontynuować, wybierz pojazd z listy dostępnych samochodów.
        </p>

        <Link
          to="/"
          className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
        >
          <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-white">
            Powrót na stronę główną
          </span>

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
