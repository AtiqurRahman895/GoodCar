import { useEffect, useState } from "react";

const AppointmentDateTimeInput = ({date,setDate,time,setTime}) => {
    const [minDate, setMinDate] = useState('');
    const [maxDate, setMaxDate] = useState('');


    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date();
        const nextWeek = new Date();

        tomorrow.setDate(today.getDate()+1);
        nextWeek.setDate(today.getDate() + 7);
        // today.setDate(today.getDate());
        

        // Format dates to YYYY-MM-DD
        const formatDate = (d) => d.toISOString().split('T')[0];

        setMinDate(formatDate(today));
        setMaxDate(formatDate(nextWeek));
    }, []);

    // const appointmentTimeList = [
    //     {start:"09:00 AM",expire:"09:30 AM"},
    //     {start:"10:00 AM",expire:"10:30 AM"},
    //     {start:"12:00 PM",expire:"12:30 PM"},
    //     {start:"03:00 PM",expire:"03:30 PM"},
    //     {start:"05:00 PM",expire:"05:30 PM"},
    //     {start:"07:00 PM",expire:"07:30 PM"},
    //     {start:"09:00 PM",expire:"09:30 PM"},
    // ];

    const appointmentTimeList = [
        "09:00 AM",
        "10:00 AM",
        "12:00 PM",
        "03:00 PM",
        "05:00 PM",
        "07:00 PM",
        "09:00 PM",
    ];



    // console.log(typeof time)

    return (
        <div className="flex gap-3 flex-wrap [&_div]:min-w-44">
            <div className="form-control flex-1 w-full">
                <label htmlFor="date" className="label">
                    <span className="">Appointment Date</span>
                </label>
                <input type='date' onChange={(e)=>setDate(e.target.value)} value={date} min={minDate} max={maxDate} name="date" id="date" className="input input-ghost input-bordered w-full" required />
            </div>

            <div className="form-control flex-1">
                <label htmlFor="time" className="label w-fit">
                    <span className="">Appointment Time</span>
                </label>
                <select onChange={(e)=>setTime(e.target.value)} value={time} name="time" id="time" className="select select-ghost select-bordered" required>
                    <option value={''} disabled hidden>Pick Time</option>

                    {appointmentTimeList.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                    ))}

                </select>
            </div>

        </div>
    );
};

export default AppointmentDateTimeInput;