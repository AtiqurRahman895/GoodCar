import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AdditionalServicesSction = () => {
    const firstSetOfAdditionalServices=[
        "General Auto Repair & Maintenance",
        "Transmission Repair & Replacement",
        "Tire Repair and Replacement",
        "State Emissions Inspection",
        "Break Job / Break Services",
        "Electrical Diagnostics",
        "Fuel System Repairs",
    ]

    const secondSetOfAdditionalServices=[
        "Starting and Charging Repair",
        "Steering and Suspension Work",
        "Emission Repair Facility",
        "Wheel Alignment",
        "Computer Diagaonstic Testing",
        "Fuel System Repair",
        "Exhaust System Repair",
    ]

    return (
        <section className="py-16 bg-black text-white mb-6">
            <div className="container space-y-12">
                <div className="text-center font-bold">
                    <h6 className="text-custom-primary">We Also Do</h6>
                    <h2 className="">Additional Services</h2>
                </div>

                <div className="w-fit md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
                    <div className="grid gap-6 w-fit">
                        {firstSetOfAdditionalServices?.map((service,index)=>(
                            <h6 key={index} className="flex gap-2">
                                <IoMdCheckmarkCircleOutline className="text-custom-primary text-2xl" />
                                {service}
                            </h6>
                        ))}
                    </div>
                    <div className="grid gap-6 w-fit">
                        {secondSetOfAdditionalServices?.map((service,index)=>(
                            <h6 key={index} className="flex gap-2">
                                <IoMdCheckmarkCircleOutline className="text-custom-primary text-2xl" />
                                {service}
                            </h6>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdditionalServicesSction;