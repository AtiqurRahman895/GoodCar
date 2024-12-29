import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import aboutImage1 from "../../assets/aboutImage1.jpg"
import aboutImage2 from "../../assets/aboutImage2.jpg"

const AboutSection = () => {
    const keyPoints=[
        "Repair all brands car",
        "We have leading car engineering exparts",
        "Offers multiple services & free diagnosis",
        "We have multiple car repair locations",
        "Original products",
    ]
    return (
        <section className="pb-16 lg:pb-10 bg-black">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-x-6 items-center">
                <div className="aboutImages duration-500">
                    <img src={aboutImage1} alt="" className="aboutImage1 hover:z-10 translate-y-[15%] hover:border-r-[15px] hover:border-b-[15px]" />
                    <img src={aboutImage2} alt="" className="aboutImage2 float-end -translate-y-[15%] hover:border-l-[15px] hover:border-t-[15px] " />
                </div>

                <div className="space-y-6">
                    <div className="font-bold">
                        <h6 className="text-custom-primary">About Us</h6>
                        <h2 className={`${location.pathname==="/"?"text-white":"text-black"}`}>Good Car <br /> Service & Repair</h2>
                    </div>
                        <p>
                            Car repair quisque sodales dui ut varius vestibulum drana tortor turpis porttiton 
                            tellus eu euismod nisl massa ut odio in the miss volume placerat urna, a lacinia 
                            eros nunta urna mauris, vehicula rutrum tempus in the interdum felis.
                        </p>
                        <div className="text-white">
                            {
                                keyPoints.map((point,index)=>(
                                    <div key={index} className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-custom-primary font-normal" />
                                        <b className="">
                                            {point}
                                        </b>
                                    </div>
                                ))
                            }
                        </div>

                </div>
            </div>            
        </section>
    );
};

export default AboutSection;