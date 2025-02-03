import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../AuthenticationComponent/Loading";
import CommonHeroSection from "../CommonComponents/CommonHeroSection";
import useScreenWidth from "../../Hooks/useScreenWidth";
import Masonry from "react-responsive-masonry";
import AppointmentCard from "../MyAppointmentsComponent/AppointmentCard";
import useSecureAxios from "../../Hooks/useSecureAxios";

const AllAppointments = () => {
    const secureAxios = useSecureAxios();
    const { user } = useContext(AuthContext);

    const screenWidth = useScreenWidth();
    const [columnsCount, setColumnsCount] = useState();

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const heroImage = "https://i.ibb.co.com/GVsN2Kt/Appointments-Page.jpg";
    const heroTitle = "All Appointments";

    useEffect(() => {
        if (screenWidth >= 768) {
          setColumnsCount(2);
        } else {
          setColumnsCount(1);
        }
    }, [screenWidth]);

    useEffect(() => {
      
      const params={sort:{_id:-1}}
      
      secureAxios.get("/Allappointments",{params})
        .then((res) => {
            if(res.data.length === 0) {
                setAppointments([])
                setNotFound(true);
            } else {
                setAppointments(res.data);
                setNotFound(false);
            }
        })
        .catch((error) => {
            console.error("Error finding appointments:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [user?.email,loading]);

    return (
        <main className="">
            <Helmet>
                <title>My Appointments | GOOD CAR</title>
            </Helmet>

            {loading ? (
            <Loading />
            ) : (
                <>
                <CommonHeroSection
                    heroImage={heroImage}
                    heroTitle={heroTitle}
                />
                {notFound ? (
                    <div className="m-20 grid justify-items-center gap-3">
                        <img
                            src={"./notFound.svg"}
                            alt={`not available`}
                            className="w-[200px]"
                        />
                        <h3 className="font-extrabold text-center text-custom-primary">
                            No one booked any appointments yet or Unable to load appointments!
                        </h3>
                    </div>
                ) : (
                    <>
                    <section className="py-16 bg-white">
                        {/* <div className="container"> */}
                        <Masonry columnsCount={columnsCount} className="container">
                            {
                                appointments.map((appointment,index)=>(
                                    <AppointmentCard key={index} appointment={appointment} setLoading={setLoading} />
                                ))
                            }
                        </Masonry>
                        {/* </div> */}
                    </section>
                    
                    </>
                )}
                </>
            )}

        </main>
    );
};

export default AllAppointments;