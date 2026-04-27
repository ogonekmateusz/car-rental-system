import Navbar from "../components/homePage/Navbar";
import Hero from "../sections/homePage/Hero";
import Stats from "../sections/homePage/Stats";

export default function homePage() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">
        <Hero />
        <Stats />
      </div>
    </div>
  );
}
