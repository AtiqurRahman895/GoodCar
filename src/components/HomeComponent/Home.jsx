import { Helmet } from "react-helmet-async";
import HomeHeroSection from "./HomeHeroSection";
import ServicesSection from "../CommonComponents/ServicesSection";
import ServiceProcessSection from "../CommonComponents/ServiceProcessSection";
import AppointmentSection from "../CommonComponents/AppointmentSection";
import AboutSection from "./AboutSection";
import ReviewsSection from "./ReviewsSection";
import RecentBlogsSection from "./RecentBlogsSection";

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
      <RecentBlogsSection />
      <AppointmentSection />
    </main>
  );
};

export default Home;
