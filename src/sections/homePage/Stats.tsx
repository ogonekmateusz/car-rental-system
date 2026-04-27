import SectionContainer from "../../components/shared/SectionContainer";
import { getCarCount } from "../../api/cars.js";
import { useFetch } from "../../hooks/useFetch.js";
import Stat from "../../components/homePage/Stat.js";
import Grid from "../../components/shared/Grid.js";

interface Statistic {
  id: number;
  title: String;
  subTitle: String;
}

export default function Stats() {
  const carCount = useFetch<number>(getCarCount);

  const pageStats: Statistic[] = [
    {
      id: 1,
      title: "500+",
      subTitle: "Zadowolonych klientów",
    },
    {
      id: 2,
      title: carCount !== null ? carCount.toString() : "Ładowanie...",
      subTitle: "Luksusowych Aut",
    },
    {
      id: 3,
      title: "0%",
      subTitle: "Ukrtytych Kosztów",
    },
    {
      id: 4,
      title: "24/7",
      subTitle: "Obsługa Klienta",
    },
  ];
  return (
    <div className="py-12 md:py-18 lg:py-20">
      <SectionContainer className="text-center md:text-left">
        <Grid
          cols={"grid-cols-2 md:grid-cols-4"}
          gap={"gap-6 md:gap-8 lg:gap-10"}
        >
          {pageStats.map((stat) => (
            <Stat key={stat.id} stat={stat} />
          ))}
        </Grid>
      </SectionContainer>
    </div>
  );
}
