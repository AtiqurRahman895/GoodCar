import { Link, useLocation } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { GoArrowRight } from "react-icons/go";

const ServicesSection = () => {
  const location = useLocation();

  const servicesList = [
    // {
    //     name:"Performance Upgrade",
    //     pageTitle: "Performance Upgrade",
    //     image: "https://i.ibb.co.com/NpS7T3c/performance.jpg",
    //     svg:"./serviceSvg/Performance.svg",
    //     link:"Performance-Upgrade",
    // },
    {
      name: "Transmission",
      pageTitle: "Transmission Repair & Service",
      image: "https://i.ibb.co.com/09q7twb/transmission.jpg",
      svg: "./serviceSvg/Transmission.svg",
      link: "Transmission",
    },
    {
      name: "Break",
      pageTitle: "Break Repair & Service",
      image: "https://i.ibb.co.com/NTWc3k6/breaking.jpg",
      svg: "./serviceSvg/Break.svg",
      link: "Break",
    },
    {
      name: "Engine",
      pageTitle: "Engine Repair & Service",
      image: "https://i.ibb.co.com/MVczhgC/engine.jpg",
      svg: "./serviceSvg/Engine.svg",
      link: "Engine",
    },
    {
      name: "Tyre & Wheels",
      pageTitle: "Tyre & Wheels Repair",
      image: "https://i.ibb.co.com/JmqfLC5/tyre.jpg",
      svg: "./serviceSvg/Tyre.svg",
      link: "Tyre-&-Wheels",
    },
    {
      name: "Denting & Painting",
      pageTitle: "Painting & Denting Repair",
      image: "https://i.ibb.co.com/PgcSh2q/painting.jpg",
      svg: "./serviceSvg/Painting.svg",
      link: "Denting-&-Painting",
    },
    {
      name: "Air Conditioner",
      pageTitle: "Air Conditioner Repair & Service",
      image: "https://i.ibb.co.com/zPbgzzT/ac.jpg",
      svg: "./serviceSvg/AC.svg",
      link: "AC",
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container space-y-8">
        {
          location.pathname === "/" && 
          <div className="text-center font-bold">
            <h6 className="text-custom-primary">What We Do</h6>
            <h2 className="text-black">Our Services</h2>
          </div>
        }


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-1 ">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {location.pathname === "/" && 
          <div className="text-center flex justify-center font-bold">
              <Link to={"/services"} type="button" className='primaryButton activePrimaryButton !py-3 flex items-center justify-center [&_svg]:hover:ml-1'>See all services <GoArrowRight /></Link>
          </div>
        }

        {/* {location.pathname === "/" && 
          <div className="text-center flex justify-center font-bold">
            <Link
              to={"/services"}
              className="text-custom-primary w-fit flex items-center justify-center [&_svg]:hover:ml-1"
            >
              <h6>See all services</h6> <GoArrowRight />
            </Link>
          </div>
        } */}

      </div>
    </section>
  );
};

export default ServicesSection;
