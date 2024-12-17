import heroVideo from '../../assets/heroVideo.mp4'
// import heroImage from '../../assets/heroImage.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiMouse } from 'react-icons/gi';
import Slider from 'react-slick';
const HomeHeroSection = () => {
    const slideContent=[
        {
            title:"Reliable Car Repair Services Near You!",
            subtext:"Quality work and outstanding service to keep your car running smoothly",
        },
        {
            title:"We Repair All Brands, Even Vintage Cars!",
            subtext:"Superior workmanship for both modern and classic vehicles.",
        },
        {
            title:"Leading Car Engineering Experts!",
            subtext:"Exceptional workmanship, backed by unmatched quality and confidence",
        },
    ]

    const slideSettings = {
        dots: false,
        arrows:false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };
    return (
        <section className=''>
            <div className="relative w-full max-w-[1504px] bg-black overflow-hidden">
            <video className='min-h-full min-w-full object-cover absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10' preload='auto' autoPlay muted loop poster="https://i.ibb.co.com/Hn206Qj/hero-Image.png">
                <source src={heroVideo} type="video/mp4" />
            </video>
                <div className="relative z-20">
                    <Slider {...slideSettings}>
                        {
                            slideContent.map((slide,index)=>(
                                <div key={index} className="h-[50svh] sm:h-[65svh] lg:h-[85svh] hero-overlay bg-opacity-15">
                                    <div className="sectionHeaderWidth text-center h-[100%] flex flex-col justify-center items-center gap-2 text-white">
                                        <h1 className="">{slide.title}</h1>
                                        <h5 className="px-6 sectionHeaderSubtextWidth">{slide.subtext}</h5>
                                        <div className="hidden lg:grid justify-items-center mt-20">
                                            <GiMouse className="text-4xl"/>
                                            <p className="text-xs">Scroll Down</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>
        </section>
    );
};

export default HomeHeroSection;