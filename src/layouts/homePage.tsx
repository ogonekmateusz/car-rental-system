import Navbar from "../components/homePage/Navbar";
import Hero from "../sections/homePage/Hero";
import Stats from "../sections/homePage/Stats";
import CarsLibrary from "../sections/homePage/CarsLibrary";

export default function homePage() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">
        <Hero />
        <Stats />
        <CarsLibrary />
      </div>
    </div>
  );
}
