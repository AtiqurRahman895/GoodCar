import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AdditionalServicesSction = () => {
    const additionalServices=[
        "General Auto Repair & Maintenance",
        "Transmission Repair & Replacement",
        "Tire Repair and Replacement",
        "State Emissions Inspection",
        "Break Job / Break Services",
        "Electrical Diagnostics",
        "Fuel System Repairs",
        "Starting and Charging Repair",
        "Steering and Suspension Work",
        "Emission Repair Facility",
        "Wheel Alignment",
        "Computer Diagaonstic Testing",
        "Fuel System Repair",
        "Exhaust System Repair",
    ]


    return (
        <section className="py-16 bg-black bg-[url('https://i.ibb.co.com/1MGzpC9/addtional-Service.jpg')] text-white bg-cover bg-no-repeat bg-center" >
            <div className="container space-y-12">
                <div className="text-center font-bold">
                    <h6 className="text-custom-primary">We Also Do</h6>
                    <h2 className="">Additional Services</h2>
                </div>

                <div className="w-fit md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 ">
                        {additionalServices?.map((service,index)=>(
                            <h5 key={index} className="flex gap-2">
                                <IoMdCheckmarkCircleOutline className="text-custom-primary text-3xl font-normal" />
                                {service}
                            </h5>
                        ))}

                </div>
            </div>
        </section>
    );
};

export default AdditionalServicesSction;