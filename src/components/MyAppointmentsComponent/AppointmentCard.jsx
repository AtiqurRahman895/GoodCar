import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { IoMdTime } from "react-icons/io";
import { HiOutlineCalendarDateRange, HiOutlinePhone, HiOutlineUserCircle } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaArrowsSpin } from "react-icons/fa6";
import Timer from "./Timer";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { TransferLists } from "../../Contexts/TransferLists";
import UpdateAppointmentButton from "../CommonComponents/UpdateAppointmentButton";
import { TbTransactionDollar } from "react-icons/tb";

const AppointmentCard = ({appointment,setLoading}) => {
    const { user } = useContext(AuthContext);
    const {adminUsers}=useContext(TransferLists)
    const {secureAxios}= useAxios()
    const cardRef= useRef(null)
    const [bgColor, setBgColor] =useState('')
    const {_id, name, phone, email, date, time, services, status,transaction_id}=appointment
    
    // console.log(appointment)


    useEffect(()=>{
        if(status==="Scheduled"){
            setBgColor("bg-[#e8092e]")

        }else if(status==="In Progress"){
            setBgColor("bg-[#1D9BF0]")

        }else if(status==="Completed"){
            setBgColor("bg-[#28a745]")

        }else{
            setBgColor("bg-[#1e1e1e]")
        }
    },[])

    // const handleTimeOut=(()=>{
    //     setLoading(true)
    //     secureAxios.put('/expireAppointment',{user_email:user?.email,_id})
    //     .then(()=>{
    //         toast.warning(`Your appointment on ${date} has been expaired!`)
    //     })
    //     .catch((error)=>{
    //         console.error("Failed to update appoinment status:", error);
    //     })
    //     .finally(()=>{
    //       setLoading(false);
    //     })
    // })

    const handleTimeOut = useCallback(() => {
        setLoading(true);
        secureAxios.put('/expireAppointment', { user_email: user?.email, _id })
            .then(() => {
                toast.warning(`Your appointment on ${date} has expired!`);
            })
            .catch((error) => {
                console.error("Failed to update appointment status:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [setLoading, secureAxios, user?.email, _id, date]);

    return (
        <div ref={cardRef} className={`${bgColor} text-white p-6 rounded-md space-y-2 mb-6 md:mx-2 relative`}>

            <h5 className="flex gap-1 items-center">
                <FaArrowsSpin className="" />
                Status: {status}
            </h5>

            {
                status==="Scheduled" && <Timer date={date} time={time} handleTimeOut={handleTimeOut} />
            }
            
            <div className="flex items-center gap-2 flex-wrap">
                <div className="flex gap-1 items-center">
                    <HiOutlineCalendarDateRange />
                    <b className="">{date}</b>
                </div>
                <div className="flex gap-1 items-center">
                    <IoMdTime className="" />
                    <b className="">{time.start}</b>
                </div>
            </div>

            {
                adminUsers?.includes(user?.email)&&
                <>
                    <UpdateAppointmentButton _id={_id} buttonClass={`p-1.5 absolute top-0 right-0 mr-4 !mt-4}`} iconClass={"text-lg"}/>
                    
                    <div className="">
                        <div className="flex gap-1 items-center">
                            <HiOutlineUserCircle className="" />
                            <p className="">{name}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <HiOutlinePhone className="" />
                            <p className="">{phone}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <TfiEmail className="text-sm mr-0.5" />
                            <p className="">{email}</p>
                        </div>
                    </div>
                </>
            }


            <div className="">
                <h5 className="flex gap-1 items-center">
                    <MdOutlineMiscellaneousServices className="" />
                    Services:
                </h5>
                <ol className="">
                    {
                        services.map((service,index)=>(
                            <li key={index} className="">{service}</li>
                        ))
                    }
                </ol>

            </div>

            <div className="flex flex-col items-center text-center px-2">
                <b className="flex gap-1 items-center">
                    <TbTransactionDollar className="" />
                    Transaction id: 
                </b>
                <p className="text-xs font-medium">{transaction_id}</p>
            </div>





            
        </div>
    );
};

export default AppointmentCard;