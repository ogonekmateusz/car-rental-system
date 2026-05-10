import RowBetween from "../../components/shared/RowBetween";
import SectionContainer from "../../components/shared/SectionContainer";
import Logo from "../../components/shared/Logo";

export default function Footer() {
  return (
    <footer className="py-8 bg-black text-white">
      <SectionContainer>
        <RowBetween>
          <Logo size="text-2xl lg:text-3xl" />
          <p className="text-sm text-gray-400">
            © 2026 Drive. Wszystkie prawa zastrzeżone.
          </p>
        </RowBetween>
      </SectionContainer>
    </footer>
  );
}
