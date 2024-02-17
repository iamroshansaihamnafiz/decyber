import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WeOffer from "@/components/WeOffer/WeOffer";
import Footer from "@/components/Footer/Footer";
import StatisticsSection from "@/components/StatisticsSection/StatisticsSection";
import Banner from "@/components/Banner/Banner";
import WhyUs from "@/components/WhyUs/WhyUs";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <WeOffer/>
            <StatisticsSection/>
            <Banner/>
            <WhyUs/>
            <Testimonial/>
            <Footer/>
        </>
    );
}
