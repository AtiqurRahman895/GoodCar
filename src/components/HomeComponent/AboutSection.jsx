import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutSection = () => {
    const keyPoints=[
        "Repairs for all car brands.",
        "Experienced car engineering experts",
        "Multiple convenient service locations.",
        "Free and accurate diagnostics.",
        "Genuine parts for lasting results.",
    ]
    return (
        <section className="pb-16 lg:pb-10 bg-black">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-x-6 items-center">
                <div className="aboutImages duration-500">
                    <img src={`https://i.ibb.co.com/sV5XWmW/about-Image1.jpg`} alt="" className="aboutImage1 hover:z-10 translate-y-[15%] hover:border-r-[15px] hover:border-b-[15px]" />
                    <img src={`https://i.ibb.co.com/5ssbBNx/about-Image2.jpg`} alt="" className="aboutImage2 float-end -translate-y-[15%] hover:border-l-[15px] hover:border-t-[15px] " />
                </div>

                <div className="space-y-6">
                    <div className="font-bold">
                        <h6 className="text-custom-primary">About Us</h6>
                        <h2 className={`${location.pathname==="/"?"text-white":"text-black"}`}>Good Car <br /> Service & Repair</h2>
                    </div>
                        <p>
                            We are your trusted partner for all automotive needs. We specialize in providing
                             top-notch car repair and maintenance services to ensure your vehicle performs at
                             its best. Our dedicated team of experienced car engineers is committed to delivering
                             excellent service with a focus on quality and reliability.
                        </p>
                        
                        <div className="text-white space-y-2">
                            <h6 className="text-custom-primary font-bold">What set us apart:</h6>
                            {
                                keyPoints.map((point,index)=>(
                                    <div key={index} className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-custom-primary" />
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