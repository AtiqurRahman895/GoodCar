import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import { toast } from "react-toastify";
import Loading from "../AuthenticationComponent/Loading";
import CommonHeroSection from "../CommonComponents/CommonHeroSection";
import AppointmentCard from "./AppointmentCard";
import useScreenWidth from "../../Hooks/useScreenWidth";
import Masonry from "react-responsive-masonry";

const MyAppointments = () => {
    const navigate = useNavigate();
    const {secureAxios}= useAxios()
    const { user,logoutUser } = useContext(AuthContext);

    const screenWidth = useScreenWidth();
    const [columnsCount, setColumnsCount] = useState();

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    const heroImage = "https://i.ibb.co.com/GVsN2Kt/Appointments-Page.jpg";
    const heroTitle = "Your Appointments";

    useEffect(() => {
        if (screenWidth >= 768) {
          setColumnsCount(2);
        } else {
          setColumnsCount(1);
        }
    }, [screenWidth]);

    useEffect(() => {
      
      const params={email:user?.email,sort:{_id:-1}}
      
      secureAxios.get("/appointments",{params})
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
            if (error.status === 401 || error.status === 403) {
              logoutUser();
              toast.error(error.response.data.message);
              navigate("/login");
            }
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
                            You have not booked any appointments yet!
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

export default MyAppointments;