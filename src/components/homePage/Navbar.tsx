import PrimaryButton from "../shared/PrimaryButton";
import RowBetween from "../shared/RowBetween";
import SectionContainer from "../shared/SectionContainer";
import scrollToHash from "../../utils/scrollToHash";

export default function Navbar() {
  return (
    <div className="bg-white py-5 shadow">
      <SectionContainer>
        <RowBetween>
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-tighter">
            DRIVE
          </h1>
          <PrimaryButton onClick={() => scrollToHash("#offer")}>
            Wypożycz teraz
          </PrimaryButton>
        </RowBetween>
      </SectionContainer>
    </div>
  );
}
