import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { ReactSVG } from "react-svg";

const ServiceCard = ({service}) => {
    return (
        <div className={`px-6 py-11 bg-cover bg-no-repeat bg-center grid items-center`} style={{backgroundImage:`url(${service.image})`}}>
            <div className="h-fit space-y-1 text-white">
                <p>Service and Repair</p>
                <h4 className="">{service.short_name}</h4>
                <div className="flex justify-between items-baseline">
                    <Link to={`/service/${service._id}`} className="text-custom-primary cursor-pointer py-2 flex items-center gap-1 font-bold [&_svg]:hover:ml-1">
                        View Details <GoArrowRight /> 
                    </Link>
                    <ReactSVG src={service.svg} className="w-20 text-custom-primary" />
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;