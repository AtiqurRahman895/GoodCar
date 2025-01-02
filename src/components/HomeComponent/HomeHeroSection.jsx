import heroVideo from "../../assets/heroVideo.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeBanner from "./HomeBanner";
import { useRef } from "react";
import useBannerHeightWidth from "../../Hooks/useBannerHeightWidth";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HomeHeroSection = () => {
  const BannerRef = useRef(null);
  const { screenWidth, bannerSectionHeight } = useBannerHeightWidth({
    BannerRef,
  });

  const slideContent = [
    {
      title: "Reliable Car Repair Services Near You!",
      subtext:
        "Quality work and outstanding service to keep your car running smoothly",
    },
    {
      title: "We Repair All Brands, Even Vintage Cars!",
      subtext: "Superior workmanship for both modern and classic vehicles.",
    },
    {
      title: "Leading Car Engineering Experts!",
      subtext:
        "Exceptional workmanship, backed by unmatched quality and confidence",
    },
  ];

  const slideSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <section
      className=""
      style={{
        paddingBottom: `${
          bannerSectionHeight -
          bannerSectionHeight / (screenWidth >= 1024 ? 3 : 7)
        }px`,
      }}
    >
      <div className="relative w-full mx-auto">
        <video
          className="min-h-full min-w-full object-cover absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
          preload="auto"
          autoPlay
          muted
          loop
          poster="https://i.ibb.co.com/Hn206Qj/hero-Image.png"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="relative z-20">
          <Slider {...slideSettings}>
            {slideContent.map((slide, index) => (
              <div
                key={index}
                className="h-[100svh] hero-overlay bg-opacity-15"
              >
                <div className="sectionHeaderWidth text-center h-[100%] flex flex-col justify-center items-center gap-2 text-white">
                  <h1 className="">{slide.title}</h1>

                  <a
                    href="#AppointmentSection"
                    type="button"
                    className="primaryButton activePrimaryButton mt-4"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </Slider>

          <div
            ref={BannerRef}
            className="container absolute left-[50%] translate-x-[-50%] "
            style={{
              bottom: `-${
                bannerSectionHeight -
                bannerSectionHeight / (screenWidth >= 1024 ? 1.5 : 4)
              }px`,
            }}
          >
            <Fade delay={1000} duration={1000} direction="up" triggerOnce>
              <HomeBanner />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
