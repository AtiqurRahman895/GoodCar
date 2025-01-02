const PhoneNumberInput = ({phoneError,setPhoneError,phone,setPhone}) => {

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        if (/^\+?[\d-]*$/.test(value)) {
            if (value.length >= 11 && value.length <= 15) {
                setPhoneError(false);  
            } else {
                setPhoneError("Phone number must be between 11 and 15 digits!");
            }
        } else {
            setPhoneError("Phone number can only contain digits, hyphens, and an optional + at the beginning!");
        }
    };

    return (
        <div className="form-control flex-1 ">
            <label htmlFor="phone" className="label">
                <span className="">Phone Number</span>
            </label>
            <input type="text" onChange={handlePhoneChange} value={phone} name="phone" id="phone" className="input input-ghost input-bordered" required />
            {/* <span className="text-custom-primary text-xs ">{phoneError}</span> */}
        </div>
    );
};

export default PhoneNumberInput;