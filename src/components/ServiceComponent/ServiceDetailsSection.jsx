
const ServiceDetailsSection = ({service}) => {
    console.log(typeof service?.svg, service?.svg)
    return (
        <div className="itsLongDispriction">
            <p>{service?.short_discription}</p>
            <div className="">
                <img src={service?.svg} className="w-52 sm:float-right text-custom-primary mx-auto sm:ml-4" />
                <div className="">
                    <h4>Why is {service?.service_name} Important?</h4>
                    <p>{service?.why_important}</p>
                </div>
                
            </div>
            
            <h4 className="flex gap-2">Why Good Car for {service?.service_name}?</h4>
            <div className="" dangerouslySetInnerHTML={{__html:service?.why_us}} />
            <h4>Our Services Include:</h4>
            <div className="" dangerouslySetInnerHTML={{__html:service?.includes}} />
        </div>
    );
};

export default ServiceDetailsSection;