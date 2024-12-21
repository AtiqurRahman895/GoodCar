import { useEffect, useState } from "react";
import Select from "react-select";
import { ReactSVG } from "react-svg";

const AppoinmentSection = () => {
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date();
        const nextWeek = new Date();
        tomorrow.setDate(today.getDate() + 1);
        nextWeek.setDate(today.getDate() + 8);

        // Format dates to YYYY-MM-DD
        const formatDate = (date) => date.toISOString().split('T')[0];

        setMinDate(formatDate(tomorrow));
        setMaxDate(formatDate(nextWeek));
    }, []);

    const appointmentTimeList = [
        "09:00 AM",
        "10:00 AM",
        "12:00 AM",
        "03:00 PM",
        "05:00 PM",
        "07:00 PM",
        "09:00 PM",
    ];

    const ServiceNameList=[
            { value: 'General Auto Repair & Maintenance', label: 'General Auto Repair & Maintenance' },
            { value: 'Transmission Repair & Replacement', label: 'Transmission Repair & Replacement' },
            { value: 'Tire Repair and Replacement', label: 'Tire Repair and Replacement' },
            { value: 'State Emissions Inspection', label: 'State Emissions Inspection' },
            { value: 'Break Job / Break Services', label: 'Break Job / Break Services' },
            { value: 'Electrical Diagnostics', label: 'Electrical Diagnostics' },
            { value: 'Fuel System Repairs', label: 'Fuel System Repairs' },
            { value: 'Starting and Charging Repair', label: 'Starting and Charging Repair' },
            { value: 'Steering and Suspension Work', label: 'Steering and Suspension Work' },
            { value: 'Emission Repair Facility', label: 'Emission Repair Facility' },
            { value: 'Wheel Alignment', label: 'Wheel Alignment' },
            { value: 'Computer Diagaonstic Testing', label: 'Computer Diagaonstic Testing' },
            { value: 'Fuel System Repair', label: 'Fuel System Repair' },
            { value: 'Exhaust System Repair', label: 'Exhaust System Repair' },

    ]
    return (
        <section className={`py-20 bg-[url(https://i.ibb.co.com/gmj5DCF/appointment.jpg)] bg-right bg-fixed`}>
            <div className="container flex flex-col md:flex-row items-start gap-8 md:gap-4 text-white">
                <div className="">
                    <div className="xs:w-[90%] xl:w-[70%]">
                        {/* <h6 className="text-custom-primary font-bold">Book Now</h6> */}
                        <h2 className="">Make Your Appointment</h2>
                        <p className="">Get expert repair service for your car with a scheduled appointment for just $40. This fee excludes service and repair charges.</p>
                        <div className="flex gap-4 items-center pt-6">
                            <ReactSVG src="./bannerSvg/Phone.svg" className='w-12 text-custom-primary'/>
                            <div className="">
                                <p className="text-16">Need Any Help?</p>
                                <h5 className="">01400447787</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 xs:p-8 bg-black w-full md:max-w-lg space-y-6">
                    <h2 className="">Book Now!</h2>
                    <form className="card-body p-0 space-y-4">

                        <div className="flex gap-3 flex-wrap [&_div]:min-w-44">

                            <div className="form-control flex-1">
                                {/* <label htmlFor="name" className="label">
                                    <span className="">Name</span>
                                </label> */}
                                <input type='text' name="name" id="name" placeholder="Name" className="input input-ghost input-bordered" minLength={3} required />
                            </div>

                            <div className="form-control flex-1">
                                {/* <label htmlFor="email" className="label">
                                    <span className="">Email</span>
                                </label> */}
                                <input type="email" name="email" id="email" placeholder="Email" className="input input-ghost input-bordered" required />
                            </div>

                        </div>

                        <div className="flex gap-3 flex-wrap [&_div]:min-w-44">
                            <div className="form-control flex-1">
                                {/* <label htmlFor="date" className="label">
                                    <span className="">Appoinment Date</span>
                                </label> */}
                                <input type='date' min={minDate} max={maxDate} name="date" id="date" placeholder="Appoinment Date" className="input input-ghost input-bordered" required />
                            </div>

                            <div className="form-control flex-1">
                                {/* <label htmlFor="time" className="label w-fit">
                                    <span className="">Appoinment Time</span>
                                </label> */}
                                <select name="time" id="time" placeholder="Appoinment Time" className="select select-ghost select-bordered" required>
                                    <option value={""} selected disabled hidden>Appoinment Time</option>

                                    {appointmentTimeList.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}

                                </select>
                            </div>

                        </div>

                
                        <div className="flex-1">
                            {/* <label htmlFor="services" className="label w-fit">
                                <span className="">Services</span>
                            </label> */}
                            <Select name="services" id="services" options={ServiceNameList} placeholder="Services" isSearchable isMulti required  styles={{
                                container:(base,state)=>({
                                    ...base,
                                    color:"white",
                                }),
                                control:(base)=>({
                                    ...base,
                                    color:"white",
                                    backgroundColor:"transparent",
                                    paddingBlock:"0.4rem",
                                    border:"1px solid #353535",
                                    borderRadius:"7px",
                                    // outline:state.menuIsOpen?"white":"#353535",
                                }),
                                input:(base)=>({
                                    ...base,
                                    color:"white",

                                }),
                                placeholder:(base)=>({
                                    ...base,
                                    color:"#9ca3ac",
                                }),
                                indicatorsContainer:(base,state)=>({
                                    ...base,
                                    color:state.isFocused&&"white",
                                    fontSize: "14px",
                                }),
                                multiValue:(base,state)=>({
                                    ...base,
                                    color:"black",
                                    backgroundColor:"white",
                                }),
                                menu:(base)=>({
                                    ...base,
                                    backgroundColor:"white",
                                    color:"black",
                                    // outline:state.menuIsOpen?"white":"#353535",
                                }),
                                option:(base,state)=>({
                                    ...base,
                                    backgroundColor:state.isFocused||state.isSelected?"#faced5":"transparent",
                                    color:state.isSelected?"black":'black',
                                }),
                            }}>
                                
                            </Select>
                        </div>
                
                        <div className="mt-6">
                            <button className="formSubmitBtn">Submit</button>
                        </div>
            
                
                    </form>
                
                </div>

            </div>
        </section>
    );
};

export default AppoinmentSection;