import { Link } from "react-router-dom";
import Logo from "../components/shared/Logo";

type EmptyStatePageProps = {
  title: string;
  description?: string;
  linkTo?: string;
  linkLabel?: string;
  showLogo?: boolean;
};

export default function StatePage({
  title,
  description,
  linkTo = "/",
  linkLabel = "Powrót na stronę główną",
  showLogo = true,
}: EmptyStatePageProps) {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-linear-to-tr from-black via-zinc-900 to-black px-6">
      <div className="text-center max-w-md flex flex-col items-center gap-6">
        {showLogo && (
          <Logo size="text-4xl lg:text-5xl" className="text-white" />
        )}

        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        )}

        {linkTo && linkLabel && (
          <Link
            to={linkTo}
            className="text-white/70 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-white"
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
