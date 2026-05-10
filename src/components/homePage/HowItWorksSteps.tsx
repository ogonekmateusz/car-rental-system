import Grid from "../shared/Grid";
import SectionContainer from "../shared/SectionContainer";
import { FaSearch } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import HowItWorksStep from "./HowItWorksStep";

const steps = [
  {
    id: 1,
    title: "Wybierz Model",
    description:
      "Przejrzyj naszą ofertę online i wybierz auto, które spełnia Twoje oczekiwania.",
    icon: <FaSearch size={24} className="text-blue-600" />,
  },
  {
    id: 2,
    title: "Rezerwacja",
    description:
      "Określ termin i miejsce odbioru. System automatycznie potwierdzi dostępność.",
    icon: <FaRegCalendarCheck size={24} className="text-blue-600" />,
  },
  {
    id: 3,
    title: "Odbierz Kluczyki",
    description:
      "Nasz concierge dostarczy auto pod same drzwi. Ciesz się jazdą bez zmartwień.",
    icon: <FaKey size={24} className="text-blue-600 " />,
  },
];

export default function HowItWorksSteps() {
  return (
    <section className="mt-10 md:mt-15 lg:mt-20">
      <SectionContainer className="text-center">
        <Grid cols="grid-cols-1 md:grid-cols-3" gap="gap-15">
          {steps.map((step) => (
            <HowItWorksStep key={step.id} {...step} />
          ))}
        </Grid>
      </SectionContainer>
    </section>
  );
}
