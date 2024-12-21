import { ReactSVG } from "react-svg";

const ServiceProcess = () => {
    const processList=[
        {
            svg:"./processSvg/Appointment.svg",
            title:"Book an Appointment",
            text:"Schedule your visit online for a smoother and faster experience with us.",
            number:"01"
        },
        {
            svg:"./processSvg/Car.svg",
            title:"Or just Walk-In Anytime",
            text:"You can also visit our store anytime during business hours. No booking needed.",
            number:"01"

        },
        {
            svg:"./processSvg/Car Repair.svg",
            title:"Get the Vehicle Repaired",
            text:"Our experts will handle your repair needs with care and efficiency.",
            number:"02"

        },
        {
            svg:"./processSvg/Certified.svg",
            title:"Ready for Delivery",
            text:"Description: Once repaired, collect your device or choose our delivery service.",
            number:"03"

        },
    ]

    return (
        <section className="py-16 mb-6 bg-black">
            <div className="container space-y-8">
                <div className="text-center font-bold">
                    <h6 className="text-custom-primary">How We Work</h6>
                    <h2 className="text-white">Our Process</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        processList.map((process,index)=>(
                            
                            <div key={index} className="relative overflow-hidden bg-white
                             hover:bg-custom-primary [&>*]:hover:text-white px-6 py-12 sm:py-16 space-y-2 rounded-md duration-500">
                                
                                <ReactSVG src={process.svg} className='w-16 text-custom-primary'/>
                                <h4 className="text-black">{process.title}</h4>
                                <p>{process.text}</p>
                                <h1 className='mb-0 pb-0 absolute right-0 bottom-0 opacity-20 text-7xl'>{process.number}</h1>
                                    
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;