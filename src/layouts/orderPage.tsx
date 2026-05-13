import Navbar from "../components/homePage/Navbar.tsx";
import OrderForm from "../sections/orderPage/OrderForm.tsx";
import Footer from "../sections/homePage/Footer.tsx";
import SectionContainer from "../components/shared/SectionContainer.tsx";
import type { Car } from "../types/car.ts";
import Summary from "../sections/orderPage/Summary.tsx";
import { useLocation } from "react-router-dom";

export default function OrderPage() {
    const location = useLocation();
    const car = location.state?.car as Car;

    if (!car) {
        return <div>Brak danych auta</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <SectionContainer>
                <section className="py-16 flex-1">
                    <div className="flex flex-col gap-12 lg:flex-row  lg:gap-40">
                            <div className="w-full max-w-[700px]">
                                <OrderForm />
                            </div>

                            <div className="w-full flex justify-center lg:justify-end lg:max-w-[420px]">
                                <Summary car={car} />
                            </div>
                        </div>
                </section>
            </SectionContainer>
            <Footer />
        </div>
    );
}