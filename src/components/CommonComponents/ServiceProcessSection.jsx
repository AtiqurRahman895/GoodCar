import { GoArrowRight } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import { ReactSVG } from "react-svg";

const ServiceProcessSection = () => {
  const location = useLocation();

  const processList = [
    {
      svg: "./processSvg/Appointment.svg",
      title: "Book an Appointment",
      text: "Easily schedule your visit online for a faster and smoother service experience.",
      number: "01",
    },
    {
      svg: "./processSvg/Car.svg",
      title: "Or just Visit Anytime",
      text: "You can also visit our workshop anytime during business hours. No appointment needed.",
      number: "01",
    },
    {
      svg: "./processSvg/Car Repair.svg",
      title: "Get the Vehicle Repaired",
      text: "Our expert technicians will carefully inspect and repair your vehicle with precision.",
      number: "02",
    },
    {
      svg: "./processSvg/Certified.svg",
      title: "Ready for Pickup",
      text: "Once fully serviced, your vehicle will be ready for you to pick up from our workshop.",
      number: "03",
    },
  ];

  return (
    <section
      className={`py-16`}
      style={{
        background: `${
          location.pathname === "/"
            ? "linear-gradient(0deg, rgba(255,255,255,1) 33%, rgba(30,30,30,1) 48%)"
            : "white"
        }`,
      }}
    >
      <div className="container space-y-8">
        <div className="text-center font-bold">
          <h6 className="text-custom-primary">How We Work</h6>
          <h2
            className={`${
              location.pathname === "/" ? "text-white" : "text-black"
            }`}
          >
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {processList.map((process, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-custom-primary
                             [&>*]:text-white px-6 py-12 sm:py-16 space-y-2 rounded-md duration-500"
            >
              <ReactSVG src={process.svg} className="w-16 " />
              <h4 className="">{process.title}</h4>
              <p>{process.text}</p>
              <h1 className="mb-0 pb-0 absolute right-0 bottom-0 opacity-20 text-7xl">
                {process.number}
              </h1>
            </div>
          ))}
        </div>

        {location.pathname === "/" && (
          <div className="text-center flex justify-center font-bold">
            <a
              href="#AppointmentSection"
              type="button"
              className="primaryButton activePrimaryButton mt-4"
            >
              Book Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceProcessSection;
