import { Helmet } from 'react-helmet-async';
import HomeHeroSection from './HomeHeroSection';
import ServicesSection from './ServicesSection';

const Home = () => {
    return (
        <main className='space-y-16'>
            <Helmet>
                <title>Home | GOOD CAR</title>
            </Helmet>
            <HomeHeroSection/>
            <ServicesSection/>
        </main>
        
    );
};

export default Home;