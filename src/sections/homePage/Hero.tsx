import Grid from "../../components/shared/Grid";
import PrimaryButton from "../../components/shared/PrimaryButton";
import SectionContainer from "../../components/shared/SectionContainer";
import scrollToHash from "../../utils/scrollToHash";

export default function Hero() {
  return (
    <div className="min-h-[60vh] py-12 md:py-18 lg:py-20">
      <SectionContainer>
        <Grid cols="grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6">
            <p className="uppercase text-blue-700 font-semibold tracking-widest text-sm">
              premium car rental
            </p>
            <h1 className="text-5xl lg:text-6xl text-center lg:text-left lg:font-semibold leading-tight">
              Definicja luksusu w każdym detalu.
            </h1>
            <p className="text-gray-600 text-center lg:text-left text-lg lg:text-xl leading-relaxed max-w-lg lg:max-w-none">
              Odkryj naszą wyselekcjonowaną flotę najbardziej ekskluzywnych
              samochodów na świecie. Wynajmij pasję, poczuj prestiż.
            </p>
            <div className="mt-2">
              <PrimaryButton
                onClick={() => scrollToHash("#offer")}
                className="font-medium w-full lg:w-fit py-3"
              >
                PRZEGLĄDAJ FLOTĘ
              </PrimaryButton>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 lg:mt-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnb3L2Hagg2xgiiJ6noehwUCfv24yLvHuvEiugeg085Rs4o8JalaCpMkK9BFWS_QHKTZKFaPzH7a8yJEOhkJqaJNfxPCG1YGtAeHdv-fhxsVO_dA5m55U2VTuoQ1CLSxzcU9glXxsVQN3QiPQBqbjA0wAGCt19GNFFSbvO7P1JpI6X1O9y4QD0PbNg5drItmBRPeF4E1EzR26fdXek9r_wF8cZQ9FI8ZAbi32QceaqMCePdgOUqjVezbvCaSpfGi55MX-m9Bqf9uI"
              alt="Hero Car"
              className="w-full max-h-70 lg:max-h-full md:max-h-90 lg:max-w-130 object-cover rounded-lg shadow-lg"
            />
          </div>
        </Grid>
      </SectionContainer>
    </div>
  );
}
