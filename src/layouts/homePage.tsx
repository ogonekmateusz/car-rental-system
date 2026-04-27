import Navbar from "../components/homePage/Navbar";
import Hero from "../sections/homePage/Hero";

export default function homePage() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-50">
        <Hero />
      </div>
    </div>
  );
}
