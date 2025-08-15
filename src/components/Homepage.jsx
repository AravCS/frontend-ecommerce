import Header from "../components/Header.jsx";
import Body from "../components/Body.jsx";
import Carousel from "../components/Carousel.jsx";
import Policies from "../components/Policies.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";

export default function Homepage({ mockItems }) {
    return (
        <>
            <Header />
            <Body />
            <Carousel mockItems={mockItems} />
            <Policies />
            <Newsletter />
            <Footer />
        </>
    );
}
