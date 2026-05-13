import Navbar from "../components/homePage/Navbar.tsx";
import OrderForm from "../components/orderPage/orderForm.tsx";
import Footer from "../sections/homePage/Footer.tsx";
export default function orderPage() {
    return (
        <div>
            <Navbar />
            <section className="bg-gray-50">
                <OrderForm/>
            </section>
            <Footer/>
        </div>
    )
}
