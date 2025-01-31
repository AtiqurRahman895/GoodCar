const useConvertDateToISO = () => {
  const convertToISO = (dateString) => {
    if (!dateString) return null;

    try {
      // Split the date and time
      const [date, time] = dateString.split(", ");
      const timeWithoutPeriod = time.replace(/AM|PM/, "").trim();

      // Split hours and minutes
      let [hours, minutes] = timeWithoutPeriod.split(":");
      hours = parseInt(hours, 10);
      minutes = parseInt(minutes || "0", 10); // Handle missing minutes

      // Adjust for AM/PM
      if (time.includes("PM") && hours !== 12) {
        hours += 12; // Convert PM to 24-hour format
      } else if (time.includes("AM") && hours === 12) {
        hours = 0; // Handle midnight
      }

      // Create a Date object
      const dateTime = new Date(`${date}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`);
      return dateTime;
    } catch (error) {
      console.error("Invalid date format:", dateString, error);
      return null;
    }
  };

  return convertToISO;
};

export default useConvertDateToISO;
