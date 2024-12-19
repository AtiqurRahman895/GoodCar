import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaMapLocationDot } from 'react-icons/fa6';
import { GrMapLocation } from 'react-icons/gr';
import { IoIosMailOpen } from 'react-icons/io';
import { TbMailOpened, TbPhoneCall } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <Link to={"tel:+8801400447787"} className="relative overflow-hidden bg-white hover:bg-custom-primary [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                <TbPhoneCall className='text-7xl text-custom-primary' />
                <h4 className='text-black'>Call us</h4>
                <p>01400447787</p>

                <BiSolidPhoneCall className='absolute -right-2.5 -bottom-4 opacity-20 text-9xl'/>
            </Link>

            <Link to={"mailto:goodcar@gmail.com"} target='_blank' className="relative overflow-hidden bg-white hover:bg-custom-primary [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                <TbMailOpened className='text-7xl text-custom-primary' />
                <h4 className='text-black'>Email us</h4>
                <p>goodcar@gmail.com</p>

                <IoIosMailOpen className='absolute -right-3 -bottom-2 opacity-20 text-9xl'/>
            </Link>

            <Link to={"http://maps.apple.com/?q=av.+Washington+165,+NY+CA+54003"} target='_blank' className="relative overflow-hidden bg-white hover:bg-custom-primary [&>*]:hover:text-white px-6 py-12 lg:py-16 rounded-md duration-500">
                <GrMapLocation className='text-7xl text-custom-primary' />
                <h4 className='text-black'>Our address</h4>
                <p>D-44 Dhamrai, Dhaka</p>

                <FaMapLocationDot className='absolute right-0 -bottom-2 opacity-20 text-9xl'/>

            </Link>

        </div>
    );
};

export default HomeBanner;