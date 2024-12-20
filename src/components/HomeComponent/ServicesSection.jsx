import { Link } from "react-router-dom";
import ServiceCard from "./serviceCard";

const ServicesSection = () => {
    const servicesList=[
        // {
        //     name:"Performance Upgrade",
        //     pageTitle: "Performance Upgrade",
        //     image: "https://i.ibb.co.com/0JfQprp/performance.jpg",
        //     svgUrl:"./serviceSvg/Performance.svg",
        //     link:"Performance-Upgrade",
        // },
        {
            name:"Transmission",
            pageTitle: "Transmission Repair & Service",
            image: "https://i.ibb.co.com/2sXcvJL/transmission.jpg",
            svgUrl:"./serviceSvg/Transmission.svg",
            link:"Transmission",
        },
        {
            name:"Break",
            pageTitle: "Break Repair & Service",
            image: "https://i.ibb.co.com/9szWN9L/break.jpg",
            svgUrl:"./serviceSvg/Break.svg",
            link:"Break",
        },
        {
            name:"Engine",
            pageTitle: "Engine Repair & Service",
            image: "https://i.ibb.co.com/SVxxZw1/engine.jpg",
            svgUrl:"./serviceSvg/Engine.svg",
            link:"Engine",
        },
        {
            name:"Tyre & Wheels",
            pageTitle: "Tyre & Wheels Repair",
            image: "https://i.ibb.co.com/wWL6kLk/tyre.jpg",
            svgUrl:"./serviceSvg/Tyre.svg",
            link:"Tyre-&-Wheels",
        },
        {
            name:"Denting & Painting",
            pageTitle: "Painting & Denting Repair",
            image: "https://i.ibb.co.com/59dP3Bv/painting.jpg",
            svgUrl:"./serviceSvg/Painting.svg",
            link:"Denting-&-Painting",
        },
        {
            name:"Air Conditioner",
            pageTitle: "Air Conditioner Repair & Service",
            image: "https://i.ibb.co.com/8D0BXTh/ac.jpg",
            svgUrl:"./serviceSvg/AC.svg",
            link:"AC",
        },

    ]
    return (
        <section className="py-16">
            <div className="container space-y-8">
                <div className="text-center font-bold">
                    <h6 className="text-custom-primary">What We Do</h6>
                    <h2 className="text-black">Our Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        servicesList.map((service,index)=>(
                            <ServiceCard key={index} service={service} />
                        ))
                    }

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;