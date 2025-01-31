import { useContext, useEffect, useState } from "react";
import AppointmentDateTimeInput from "./AppointmentDateTimeInput";
import MultiSelectOptions from "./MultiSelectOptions";
import PhoneNumberInput from "./PhoneNumberInput";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { TransferLists } from "../../Contexts/TransferLists";

import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {setAppointmentCredentials}=useContext(TransferLists)

  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState();
  const [phoneError, setPhoneError] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    if (user?.displayName && user?.email) {
      setName(user.displayName);
      setEmail(user.email);
    }
  }, [user?.displayName, user?.email]);
  // console.log( email );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.warning(
        "Currently you are not Logged in. Login first to book an appointment!"
      );
      return;
    } else if (
      !name ||
      !email ||
      !phone ||
      !date ||
      !time ||
      services.length === 0
    ) {
      toast.warning("Please fill out all fields correctly!");
      return;
    } else if (phoneError) {
      toast.warning(phoneError);
      return;
    }
    const selectedServiceValues = services.map((service) => service.value);

    const appointmentCredentials = {
      name,
      phone,
      email,
      date,
      time,
      services: selectedServiceValues,
      status: "Scheduled",
    };
    // console.log(appointmentCredentials)
    setAppointmentCredentials(appointmentCredentials)
    navigate("/payment")

  };

  return (
    <form onSubmit={handleSubmit} className="card-body p-0 ">
      <div className="flex gap-3 flex-wrap [&_div]:min-w-44">
        <div className="form-control flex-1">
          <label htmlFor="name" className="label">
            <span className="">Name</span>
          </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={user?.displayName || name}
            readOnly={user}
            name="name"
            id="name"
            className="input input-ghost input-bordered"
            minLength={3}
            required
          />
        </div>

        <PhoneNumberInput
          phoneError={phoneError}
          setPhoneError={setPhoneError}
          phone={phone}
          setPhone={setPhone}
        />
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="">Email</span>
        </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={user?.email || email}
          readOnly={user}
          name="email"
          id="email"
          className="input input-ghost input-bordered"
          required
        />
      </div>

      <AppointmentDateTimeInput
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
      />

      <MultiSelectOptions setServices={setServices} services={services} />

      <div className="mt-6">
        <button className="formSubmitBtn">Checkout</button>
      </div>
    </form>
  );
};

export default AppointmentForm;
