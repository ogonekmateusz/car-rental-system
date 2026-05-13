import Navbar from "../components/homePage/Navbar";
import Hero from "../sections/homePage/Hero";
import Stats from "../sections/homePage/Stats";
import CarsLibrary from "../sections/homePage/CarsLibrary";
import HowItWorks from "../sections/homePage/HowItWorks";
import Footer from "../sections/homePage/Footer";

export default function homePage() {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-50">
        <Hero />
        <Stats />
        <CarsLibrary />
      </section>
      <section className="bg-gray-100">
        <HowItWorks />
      </section>
      <Footer />
    </div>
  );
}
