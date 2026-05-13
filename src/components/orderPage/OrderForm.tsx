import SectionContainer from "../shared/SectionContainer";

export default function OrderForm() {
    return (
        <section className="py-10 md:py-15 lg:py-20">
            <SectionContainer>
            <h3 className="text-4xl lg:text-5xl text-center lg:text-left font-semibold leading-tight">
                Wynajmij swój pojazd
            </h3>
            <p className="text-gray-600 text-center lg:text-left text-lg lg:text-xl leading-relaxed max-w-xl lg:max-w-lg">
                Uzupełnij poniższe dane, aby sfinalizować rezerwację wybranego modelu klasy premium.
            </p>
            </SectionContainer>
        </section>
    );
}