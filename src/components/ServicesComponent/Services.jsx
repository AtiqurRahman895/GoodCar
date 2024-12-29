import { Helmet } from "react-helmet-async";
import CommonHeroSection from "../CommonComponents/CommonHeroSection";
import ServicesSection from "../CommonComponents/ServicesSection";
import AdditionalServicesSction from "../CommonComponents/AdditionalServicesSction";
import ServiceProcessSection from "../CommonComponents/ServiceProcessSection";
import AppoinmentSection from "../CommonComponents/AppoinmentSection";

const Services = () => {
  const headerTitle = "Our Services";
  const headerSubTitle = "What We Do";
  return (
    <main className="">
      <Helmet>
        <title>Services | GOOD CAR</title>
      </Helmet>
      <CommonHeroSection
        headerTitle={headerTitle}
        headerSubTitle={headerSubTitle}
      />
      <ServicesSection />
      <AdditionalServicesSction />
      <ServiceProcessSection />
      <AppoinmentSection />
    </main>
  );
};

export default Services;
