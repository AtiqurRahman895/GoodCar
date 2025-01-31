import { useContext, useEffect, useState } from "react";
import AppointmentDateTimeInput from "../AppointmentFormComponent/AppointmentDateTimeInput";
import MultiSelectOptions from "../AppointmentFormComponent/MultiSelectOptions";
import PhoneNumberInput from "../AppointmentFormComponent/PhoneNumberInput";
import { toast } from "react-toastify";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import StatusInput from "./StatusInput";

const UpdateAppointmentForm = () => {
  const appointment = useLoaderData();
  const navigate = useNavigate();
  const { secureAxios } = useAxios();
  const { user, logoutUser } = useContext(AuthContext);

  const [name, setName] = useState(appointment?.name);
  const [email, setEmail] = useState(appointment?.email);
  const [phone, setPhone] = useState(appointment?.phone);
  const [phoneError, setPhoneError] = useState(false);
  const [date, setDate] = useState(appointment?.date);
  const [time, setTime] = useState(appointment?.time);
  const [services, setServices] = useState([]);
  const [status, setStatus] = useState(appointment?.status);

  useEffect(() => {
    if (appointment?.services) {
      const initialServices = appointment.services.map((service) => ({
        value: service,
        label: service,
      }));
      setServices(initialServices);
    }
  }, [appointment?.services]);

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
      _id: appointment?._id,
      name,
      phone,
      email,
      date,
      time,
      services: selectedServiceValues,
      status,
    };
    // console.log(appointmentCredentials)

    secureAxios
      .put("/UpdateAppointment", appointmentCredentials)
      .then(() => {
        e.target.reset();
        toast.success(`You have successfully updated an appointment!`);
        navigate(-1)
      })
      .catch((error) => {
        if (error.status === 401 || error.status === 403) {
          logoutUser();
          toast.error(error.response.data.message);
          navigate("/login");
        }
        console.error("Error updating an appointment:", error);
        toast.error(
          error.response?.data?.message || `Failed to update an appointment!`
        );
      });
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
            value={appointment?.name}
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
          value={appointment?.email}
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

      <StatusInput status={status} setStatus={setStatus} />

      <div className="mt-6">
        <button className="formSubmitBtn">Checkout</button>
      </div>
    </form>
  );
};

export default UpdateAppointmentForm;
