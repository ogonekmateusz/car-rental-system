import RowBetween from "../../components/shared/RowBetween";
import SectionContainer from "../../components/shared/SectionContainer";
import Logo from "../../components/shared/Logo";

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white">
      <SectionContainer>
        <RowBetween className="flex-col items-start gap-3 md:flex-row md:items-center md:gap-0">
          <Logo size="text-xl lg:text-3xl" />

          <p className="text-sm text-gray-400">
            © 2026 Drive. Wszystkie prawa zastrzeżone.
          </p>
        </RowBetween>
      </SectionContainer>
    </footer>
  );
}
