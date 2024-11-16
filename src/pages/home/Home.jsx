import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Good from "../../components/Good";
import AppRes from "../../components/AppRes";
import MuchMore from "../../components/MuchMore";
import Flexible from "../../components/Flexible";
import Payment from "../../components/Payment";
import Increase from "../../components/Increase";
import Visibility from "../../components/Visibility";
import ManyOther from "../../components/ManyOther";
import Why from "../../components/Why";
import Testimonial from "../../components/Testimonial";
import Discover from "../../components/Discover";
import Faqs from "../../components/Faqs";
import Rates from "../../components/Rates";


const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Good />
            <AppRes />
            <MuchMore />
            <Flexible />
            <Payment />
            <Increase />
            <Visibility />
            <ManyOther />
            <Why />
            <Testimonial />
            <Discover />
            <Rates />
            <Faqs />
            <Footer />
        </>
    );
};

export default Home;