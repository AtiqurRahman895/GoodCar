
const StatusInput = ({status,setStatus}) => {

    const appointmentStatusList = [
        "Scheduled","In Progress","Completed","Expired",
    ];


    return (

        <div className="form-control">
            <label htmlFor="status" className="label w-fit">
                <span className="">Appointment Status</span>
            </label>
            <select onChange={(e)=>setStatus(e.target.value)} value={status} name="status" id="status" className="select select-ghost select-bordered" required>
                <option value={''} disabled hidden>Pick status</option>

                {appointmentStatusList.map((Status, index) => (
                    <option key={index} value={Status}>{Status}</option>
                ))}

            </select>
        </div>

    );
};

export default StatusInput;