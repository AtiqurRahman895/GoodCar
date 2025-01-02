import { useState } from "react";
import useConvertDateToISO from "../../Hooks/useConvertDateToISO";
import Countdown from "react-countdown";

const Timer = ({ date, time, handleTimeOut }) => {
  const convertToISO = useConvertDateToISO();
  const [extraTime, setExtraTime] = useState(false);
//   const [extraTime, setExtraTime] = useState(false);

  const startAt = convertToISO(`${date}, ${time.start}`);
  const expireAt = convertToISO(`${date}, ${time.expire}`);


  const initialRenderer = ({ days, hours, minutes, seconds }) => (
    <h5>
      {days} d {hours} h {minutes} m {seconds} s
    </h5>
  );

  const extraRenderer = ({ hours, minutes, seconds }) => (
    <h5>
      Expire in {hours}:{minutes}:{seconds}
    </h5>
  );

  const handleSecondComplete = () => {
    handleTimeOut();
  };

  return (
    <div>
      {!extraTime ? (
        <Countdown
          key="initial"
          date={startAt}
          renderer={initialRenderer}
          onComplete={() => setExtraTime(true)}
        />
      ) : (
        <Countdown
          key="expire"
          date={expireAt}
          renderer={extraRenderer}
          onComplete={handleSecondComplete}
        />
      )}
    </div>
  );
};

export default Timer;
