
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';


const HomeBanner = () => {
    const cardInfoList=[
        {
            text: "Call us",
            link:"tel:+8801400447787",
            svg: "./bannerSvg/Phone.svg",
            info:"01400447787",
        },
        {
            text: "Drop an email",
            link:"mailto:goodcar@gmail.com",
            svg: "./bannerSvg/Email.svg",
            info:"goodcar@gmail.com",
        },
        {
            text: "Our Location",
            link:"http://maps.apple.com/?q=av.+Washington+165,+NY+CA+54003",
            svg: "./bannerSvg/Location.svg",
            info:"D-44 Dhamrai, Dhaka",
        },
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {
                cardInfoList.map((cardInfo,index)=>(
                    <Link key={index} to={cardInfo.link} target={index!==0?"_blank":""}
                     className="relative overflow-hidden bg-white hover:bg-custom-primary 
                    [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                        
                        <ReactSVG src={cardInfo.svg} className='w-16 text-custom-primary mb-2'/>
                        <h5 className='text-black'>{cardInfo.text}</h5>
                        <p>{cardInfo.info}</p>
                        <ReactSVG src={cardInfo.svg} className='absolute -right-1 -bottom-1 opacity-20 w-32'/>
                    </Link>
                ))
            }

            {/* <Link to={"tel:+8801400447787"} className="relative overflow-hidden bg-white hover:bg-custom-primary [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                <TbPhoneCall className='text-7xl text-custom-primary' />
                <h5 className='text-black'>Call us</h5>
                <p>01400447787</p>
                <BiSolidPhoneCall className='absolute -right-2.5 -bottom-4 opacity-20 text-9xl'/>

            </Link>

            <Link to={"mailto:goodcar@gmail.com"} target='_blank' className="relative overflow-hidden bg-white hover:bg-custom-primary [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                <TbMailOpened className='text-7xl text-custom-primary' />
                <h5 className='text-black'>Email us</h5>
                <p>goodcar@gmail.com</p>

                <IoIosMailOpen className='absolute -right-3 -bottom-2 opacity-20 text-9xl'/>
            </Link>

            <Link to={"http://maps.apple.com/?q=av.+Washington+165,+NY+CA+54003"} target='_blank' className="relative overflow-hidden bg-white hover:bg-custom-primary [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                <GrMapLocation className='text-7xl text-custom-primary' />
                <h5 className='text-black'>Our address</h5>
                <p>D-44 Dhamrai, Dhaka</p>

                <FaMapLocationDot className='absolute right-0 -bottom-2 opacity-20 text-9xl'/>

            </Link> */}

        </div>
    );
};

export default HomeBanner;