import css from "./Calcoutput.module.css";
import { IoGift } from "react-icons/io5";

function Calcoutput({ age }) {
  // format nextBirthday to readable string
  const nextBdayStr = age.nextBirthday
    ? new Date(age.nextBirthday).toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <>
      {/* Current Age */}
      <div className="border-top border-black p-3 text-center">
        <p className="fs-5 fw-bolder">Your Current Age</p>
        <h3>
          {age.years} Years, {age.months} Months, {age.days} Days
        </h3>
      </div>

      {/* Total Days / Months / Weeks / Hours Cards */}
      <div className={`${css.midcontainer} `}>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{age.totalDays}</h5>
            <p className="card-text">Total Days</p>
          </div>
        </div>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{age.totalMonths}</h5>
            <p className="card-text">Total Months</p>
          </div>
        </div>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{age.totalWeeks}</h5>
            <p className="card-text">Total Weeks</p>
          </div>
        </div>
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{age.totalHours}</h5>
            <p className="card-text">Total Hours</p>
          </div>
        </div>
      </div>

      {/* Next Birthday */}
      <div className="border-top border-black p-3 text-center ">
        <p className="fs-5 d-flex align-items-center justify-content-center gap-2">
          <IoGift size={22} />
          Next B'day
        </p>
        <p className="fs-4 fw-bolder">{nextBdayStr}</p>
        <p className="border border-2 border-black rounded m-auto fs-5 w-50 p-2 fw-semibold">
          {age.daysLeft} days to go, turning {age.years + 1}
        </p>
      </div>
    </>
  );
}

export default Calcoutput;
