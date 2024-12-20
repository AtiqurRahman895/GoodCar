import { Helmet } from 'react-helmet-async';
import HomeHeroSection from './HomeHeroSection';
import ServicesSection from './ServicesSection';
import AdditionalServicesSction from './AdditionalServicesSction';

const Home = () => {
    return (
        <main className=''>
            <Helmet>
                <title>Home | GOOD CAR</title>
            </Helmet>
            <HomeHeroSection/>
            <ServicesSection/>
            <AdditionalServicesSction/>
        </main>
        
    );
};

export default Home;