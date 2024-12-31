import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GoArrowRight } from "react-icons/go";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import Slider from "react-slick";
import ReactStars from "react-stars";
import useScreenWidth from "../../Hooks/useScreenWidth";
import TopReviewCard from "./TopReviewCard";

const ReviewsSection = () => {
    const screenWidth = useScreenWidth();
    const [slideToShow, setSlideToShow] = useState(1);

    const averageRating=4.5
    const totalReviews=408
    const topReviewList=[
        {
            review_link:"https://maps.app.goo.gl/KLWqKhGXg4oDJDsz6",
            reviewer:"Imthyas Ahmed Shirajee",
            rating:5,
            review:`Amazing service as usual. I have been going to this place for about 3 years now for my maintenance check ups. The team is excellent and will sort out every issue your car has. Experts for hybrid cars.`,

        },
        {
            review_link:"https://maps.app.goo.gl/Kh2kKQzf3eHq3dYu8",
            reviewer:"Rajin Mustafa Dipraw",
            rating:4,
            review:`Good behaviour and good service all over... The location is backwards road to the workshop is very bad. But their service will definitely create a positive vibe in your mind.
The workshop manager Mr. Sabbir is a gentleman feel free to ask him the queries you need to know about your car.`,

        },
        {
            review_link:"https://maps.app.goo.gl/7AJeeUgpFBUgCcgZ7",
            reviewer:"Maqsud Chy",
            rating:5,
            review:`Your car will be great hands if you come here no doubt.Yes, you can find this place to be moderately expensive but quality of service matters most. And you can check your hybrid battery health percentage.`,

        },
        {
            review_link:"https://maps.app.goo.gl/wuDN8P87xAKQTLhH9",
            reviewer:"Mahdee Arif",
            rating:5,
            review:`Always trusted when it comes to give quality service...
But the road towards the workshop isn't good at all, don't follow google maps to go there after entering into Basila...
Ask any local person to know about the road...`,

        },
        {
            review_link:"https://maps.app.goo.gl/i1xoPyeN71FTqrUt9",
            reviewer:"Asif Hossain",
            rating:5,
            review:`Very very good for Hybrid cars also for regular cars. The owner has a huge passion for car which let him learn a lots of things. This make the Service level more higher than the others.`,

        },
        {
            review_link:"https://maps.app.goo.gl/rZxfwKHjb4ieJHYq5",
            reviewer:"Md.Sohanur Rahman",
            rating:5,
            review:`i-WorksBD is a well establish vehicle repair workshop.Though it located Bosila green city far from city, it's repair quality is very good. The behaviour of the management and technician are very good and repair maintain charge also very cheap than others. In a nutshell, it’s a super workshop for vehicles repair.`,

        },
    ]


    useEffect(() => {
        if (screenWidth >= 1280) {
        setSlideToShow(3);
        } else if (screenWidth >= 768) {
        setSlideToShow(2);
        } else {
        setSlideToShow(1);
        }
    }, [screenWidth]);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        // speed: 500,
        slidesToShow: slideToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
      };

    return (
        <section className='py-16 '>
            <div className="container space-y-8">
                <div className="bg-[rgba(121,121,121,.3)] p-6 rounded-md flex flex-col justify-between items-center md:flex-row gap-6">
                    <div className="grid justify-items-center md:justify-items-start">
                        <div className="flex items-center gap-2 text-white">
                            <FcGoogle className="text-3xl" />
                            <h4>Excellent on Google</h4>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-x-2 text-white">
                            <ReactStars
                                count={5}
                                value={averageRating} 
                                size={16} 
                                edit={false} 
                                isHalf={true} 
                                halfIcon={<IoStarHalf />} 
                                emptyIcon={<IoStarOutline />} 
                                fullIcon={<IoStar />} 
                                color1="rgba(232, 9, 46, 0.3)" 
                                color2="#e8092e" 
                            />
                            <span>
                                <b>{averageRating}</b> out of 5 based on {totalReviews} Reviews
                            </span>
                        </div>

                    </div>

                        <a href="https://search.google.com/local/writereview?placeid=ChIJzfZLo3m_VTcRbMKm1ELxleM"
                         target="_blank" type="button" className='primaryButton activePrimaryButton !py-2.5 flex items-center 
                         justify-center [&_svg]:hover:ml-1'>
                            Review Us On Google <GoArrowRight />
                        </a>
                    
                </div>

                <div className="sm:px-[10%] md:px-0">
                    <Slider className="slick-slider" {...settings}>
                        {topReviewList.map((review, index) => (
                            <TopReviewCard key={index} review={review} />
                        ))}
                    </Slider>
                </div>

                <div className="text-center flex justify-center font-bold">
                    <a href="https://search.google.com/local/reviews?placeid=ChIJzfZLo3m_VTcRbMKm1ELxleM" 
                     target="_blank"  type="button" className='primaryButton activePrimaryButton !py-2.5 flex 
                     items-center justify-center [&_svg]:hover:ml-1'>
                        More Google Reviews <GoArrowRight />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ReviewsSection;