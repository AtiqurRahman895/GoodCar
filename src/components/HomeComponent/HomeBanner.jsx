import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';


const HomeBanner = () => {
    const cardInfoList=[
        {
            link:"tel:+8801400447787",
            svg: "./bannerSvg/Phone.svg",
            info:"01400447787",
        },
        {
            link:"mailto:goodcar@gmail.com",
            svg: "./bannerSvg/Email.svg",
            info:"goodcar@gmail.com",
        },
        {
            link:"http://maps.apple.com/?q=av.+Washington+165,+NY+CA+54003",
            svg: "./bannerSvg/Location.svg",
            info:"D-44 Dhamrai, Dhaka",
        },
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {
                cardInfoList.map((cardInfo,index)=>(
                    <Link key={index} to={cardInfo.link}
                     className="relative overflow-hidden bg-white hover:bg-custom-primary 
                    [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                        
                        <ReactSVG src={cardInfo.svg} className='w-16 text-custom-primary mb-2'/>
                        <h5 className='text-black'>Call us</h5>
                        <p>{cardInfo.info}</p>
                        <ReactSVG src={cardInfo.svg} className='absolute -right-1 -bottom-1 opacity-20 w-32'/>
        
                    </Link>
                ))
            }

        </div>
    );
};

export default HomeBanner;