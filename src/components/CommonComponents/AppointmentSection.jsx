import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import AppointmentForm from "../AppointmentFormComponent/AppointmentForm";


const AppointmentSection = () => {

    return (
        <section id="AppointmentSection" className={`py-20 bg-[url(https://i.ibb.co.com/gmj5DCF/appointment.jpg)] bg-right bg-fixed`}>
            <div className="container flex flex-col md:flex-row items-start gap-8 md:gap-4 text-white">
                <div className="">
                    <div className="xs:w-[90%] xl:w-[70%]">
                        {/* <h6 className="text-custom-primary font-bold">Book Now</h6> */}
                        <h2 className="">Book Your Appointment</h2>
                        <p className="">Get expert repair service for your car with a scheduled appointment for just $40. This fee excludes service and repair charges.</p>
                        <Link to={"tel:+8801400447787"} className="w-fit flex gap-4 items-center pt-6 hover:scale-[1.01]">
                            <ReactSVG src="./bannerSvg/Phone.svg" className='w-12 text-custom-primary'/>
                            <div className="">
                                <p className="text-16">Need Any Help?</p>
                                <h5 className="">01400447787</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="p-6 xs:p-8 bg-black w-full md:max-w-lg space-y-6">
                    <h2 className="">Book Now!</h2>
                    <AppointmentForm />
                
                </div>

            </div>
        </section>
    );
};

export default AppointmentSection;