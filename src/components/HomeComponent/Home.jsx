import { Helmet } from "react-helmet-async";
import HomeHeroSection from "./HomeHeroSection";
import ServicesSection from "../CommonComponents/ServicesSection";
import ServiceProcessSection from "../CommonComponents/ServiceProcessSection";
import AppoinmentSection from "../CommonComponents/AppoinmentSection";
import AboutSection from "./AboutSection";
import ReviewsSection from "./ReviewsSection";

const Home = () => {
  return (
    <main className="">
      <Helmet>
        <title>Home | GOOD CAR</title>
      </Helmet>
      <HomeHeroSection />
      <AboutSection />
      <ServicesSection />
      <ServiceProcessSection />
      <ReviewsSection />
      <AppoinmentSection />
    </main>
  );
};

export default Home;
