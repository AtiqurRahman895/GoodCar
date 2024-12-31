import { Helmet } from "react-helmet-async";
import CommonHeroSection from "../CommonComponents/CommonHeroSection";
import AdditionalServicesSction from "../CommonComponents/AdditionalServicesSction";
import ServiceProcessSection from "../CommonComponents/ServiceProcessSection";
import AppoinmentSection from "../CommonComponents/AppoinmentSection";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TransferLists } from "../../Contexts/TransferLists";
import Loading from "../AuthenticationComponent/Loading";
import ServiceDetailsSection from "./ServiceDetailsSection";

const Service = () => {
    const {_id}= useParams()
    const {loading, notFound, mainServices}= useContext(TransferLists)
    const [service, setService] = useState(null);

    useEffect(() => {
        if (mainServices && _id) {
            const filteredService = mainServices.filter((service) => service._id === _id);
            if (filteredService.length > 0) {
                setService(filteredService[0]);
            } else {
                setService(null);
            }
        }
    }, [_id, mainServices]);


  return (
    <main className="">
      <Helmet>
        <title>{service?.service_name||"Service"} | GOOD CAR</title>
      </Helmet>
      {loading ? (
            <Loading />
          ) : (
            <>
              {notFound ? (
                <div className="m-20 grid justify-items-center gap-3">
                  <img
                    src={"./notFound.svg"}
                    alt={`not available`}
                    className="w-[200px]"
                  />
                  <h3 className="font-extrabold text-center text-custom-primary">
                      Unable to load service page!
                  </h3>
                </div>
              ) : (
                <>

                <CommonHeroSection
                    heroImage={service?.image}
                    heroTitle={service?.service_name}
                />

                <section className="pt-10 pb-16">
                    <div className="container grid sm:block lg:flex space-y-8">
                        
                        <div tabIndex={0} className={`join join-vertical flex-shrink-0 w-full order-last sm:order-first sm:w-52 z-20 sm:float-start sm:mr-8 sm:mb-3`} >
                            {
                                mainServices.map(((service,index)=>(
                                    <Link to={`/service/${service._id}`} key={index} className={`${_id===service._id?"bg-custom-primary hover:bg-custom-primary text-white":"bg-transparent hover:bg-custom-half-primary text-black-font hover:text-custom-primary"} btn join-item border hover:scale-100 leading-normal h-fit p-2 border-custom-primary hover:border-custom-primary`}>{service.service_name}</Link>
                                )))
                            }
                        </div>
                        <ServiceDetailsSection mainServices={mainServices} service={service} />
                    </div>
                </section>
                

                <AdditionalServicesSction />
                <ServiceProcessSection />
                <AppoinmentSection />
                </>
              )}
            </>
        )}

    </main>
  );
};

export default Service;
