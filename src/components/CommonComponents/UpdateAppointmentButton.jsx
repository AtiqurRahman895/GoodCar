import { CgPen } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const UpdateAppointmentButton = ({_id,buttonClass,iconClass}) => {
    return (
        <>
          <Link
            to={`/update_appointment/${_id}`}
            className={`UpdateAppointmentButton text-white hover:text-[black] hover:bg-white border rounded-md !border-white !inline-block ${buttonClass}`}
          >
            <CgPen className={`${iconClass}`} />
          </Link>
          <Tooltip
            anchorSelect=".UpdateAppointmentButton"
            className="!bg-white !text-black"
          >
            Update this Appointment!
          </Tooltip>
        </>
    );
};

export default UpdateAppointmentButton;