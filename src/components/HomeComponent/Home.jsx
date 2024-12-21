import { Helmet } from 'react-helmet-async';
import HomeHeroSection from './HomeHeroSection';
import ServicesSection from './ServicesSection';
import AdditionalServicesSction from './AdditionalServicesSction';
import ServiceProcessSection from './ServiceProcessSection';
import AppoinmentSection from './AppoinmentSection';

const Home = () => {
    return (
        <main className=''>
            <Helmet>
                <title>Home | GOOD CAR</title>
            </Helmet>
            <HomeHeroSection/>
            <ServicesSection/>
            <AdditionalServicesSction/>
            <ServiceProcessSection/>
            <AppoinmentSection/>
        </main>
    );
};

export default Home;