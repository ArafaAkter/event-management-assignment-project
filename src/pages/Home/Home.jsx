import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import ExtraSection from "../ExtraSection/ExtraSection";
import OtherService from "../OtherService/OtherService";

const Home = () => {
    const services = useLoaderData()
    return (
    <div>
        <Banner></Banner>
        <Services services={services}></Services>
        <ExtraSection></ExtraSection>
        <OtherService></OtherService>
        <Footer></Footer>
    </div> 
    );
};

export default Home;