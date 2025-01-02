import UpdateAppointmentForm from "./UpdateAppointmentForm";


const UpdateAppointment = () => {
    return (
        <section className="mt-16">
            <div className="container hero flex items-center justify-center">

                <div className="fromWrapper max-w-lg">
                    <h1 className="text-5xl font-bold">Update now!</h1>
                    <UpdateAppointmentForm />

                </div>
            </div>
        </section>
    );
};

export default UpdateAppointment;