import { Helmet } from 'react-helmet-async';
import HomeHeroSection from './HomeHeroSection';

const Home = () => {
    return (
        <main className='space-y-16'>
            <Helmet>
                <title>Home | GOOD CAR</title>
            </Helmet>
            <HomeHeroSection/>
        </main>
        
    );
};

export default Home;