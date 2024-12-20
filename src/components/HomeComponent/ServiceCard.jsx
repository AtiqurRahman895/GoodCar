import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({service}) => {
    return (
        <div className={`px-6 py-11 bg bg-cover bg-no-repeat bg-center grid items-center`} style={{backgroundImage:`url(${service.image})`}}>
            <div className="h-fit space-y-1">
                <p>Service and Repair</p>
                <h5 className="text-white">{service.name}</h5>
                <div className="flex justify-between items-baseline">
                    <Link to={`/service/${service.link}`} className="text-custom-primary cursor-pointer py-2 flex items-center gap-1 font-bold">
                        View Details <GoArrowRight /> 
                    </Link>
                    <img src={service.svgUrl} alt="" className="w-20" />
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;