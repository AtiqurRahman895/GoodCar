import { Helmet } from "react-helmet-async";
import CommonHeroSection from "../CommonComponents/CommonHeroSection";
import ServicesSection from "../CommonComponents/ServicesSection";
import AdditionalServicesSction from "../CommonComponents/AdditionalServicesSction";
import ServiceProcessSection from "../CommonComponents/ServiceProcessSection";
import AppoinmentSection from "../CommonComponents/AppoinmentSection";

const Services = () => {
  const heroImage ="https://i.ibb.co.com/NpS7T3c/performance.jpg"
  const heroTitle = "Our Services";
  const heroSubTitle = "What We Do";
  return (
    <main className="">
      <Helmet>
        <title>Services | GOOD CAR</title>
      </Helmet>
      <CommonHeroSection
        heroImage={heroImage}
        heroTitle={heroTitle}
        heroSubTitle={heroSubTitle}
      />
      <ServicesSection />
      <AdditionalServicesSction />
      <ServiceProcessSection />
      <AppoinmentSection />
    </main>
  );
};

export default Services;
