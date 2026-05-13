import FormField from "../../components/orderPage/FormField";
import FormSection from "../../components/orderPage/FormSection";

import Grid from "../../components/shared/Grid";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SectionContainer from "../../components/shared/SectionContainer";

export default function OrderForm() {
  return (
    <section className="py-10 md:py-15 lg:py-20">
      <SectionContainer>
        <div className="space-y-3">
          <h3 className="text-4xl lg:text-5xl font-semibold leading-tight text-center lg:text-left">
            Wynajmij swój pojazd
          </h3>

          <p className="max-w-xl text-gray-600 text-center lg:text-left text-lg lg:text-xl leading-relaxed">
            Uzupełnij poniższe dane, aby sfinalizować rezerwację wybranego
            modelu klasy premium.
          </p>
        </div>

        <form className="mt-10 space-y-10">
          <FormSection title="DANE OSOBOWE">
            <FormField title="Imię i Nazwisko" placeholder="Jan Kowalski" />

            <Grid cols="grid-cols-1 md:grid-cols-2">
              <FormField
                title="Numer telefonu"
                type="tel"
                placeholder="+48 000 000 000"
              />

              <FormField
                title="Adres e-mail"
                type="email"
                placeholder="jan.kowalski@example.com"
              />
            </Grid>
          </FormSection>

          <FormSection title="SZCZEGÓŁY WYNAJMU">
            <Grid cols="grid-cols-1 md:grid-cols-2">
              <FormField title="Data odbioru" type="date" />

              <FormField title="Data zwrotu" type="date" />
            </Grid>
          </FormSection>
          <PrimaryButton
            className="bg-blue-600 w-full shadow-sm py-3 md:py-2 md:w-fit"
            onClick={() => {}}
          >
            POTWIERDŹ WYNAJEM
          </PrimaryButton>
        </form>
      </SectionContainer>
    </section>
  );
}
