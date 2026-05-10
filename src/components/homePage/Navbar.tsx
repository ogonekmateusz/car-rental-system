import PrimaryButton from "../shared/PrimaryButton";
import RowBetween from "../shared/RowBetween";
import SectionContainer from "../shared/SectionContainer";
import scrollToHash from "../../utils/scrollToHash";
import Logo from "../shared/Logo";

export default function Navbar() {
  return (
    <div className="bg-white py-5 shadow">
      <SectionContainer>
        <RowBetween>
          <Logo size="text-2xl lg:text-3xl " />
          <PrimaryButton onClick={() => scrollToHash("#offer")}>
            Wypożycz teraz
          </PrimaryButton>
        </RowBetween>
      </SectionContainer>
    </div>
  );
}
