import css from "./Weather_output.module.css";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";


function Weather_output({ data }) {
  //  Agar data null hai (initially), toh kuch mat render karo
  if (!data) {
    return (
      <div className="text-center mt-5 d-flex justify-content-center">
        <h5 className={`${css.pretext} rounded w-50`}>
          Search any city to get weather info 🌤️
        </h5>
      </div>
    );
  }

  // ✅ Sunrise & Sunset time readable format me
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  // ✅ Weather icon
  const icon = data.weather?.[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <div className={`${css.weather_output} gap-2`}>
      <h4 className="d-flex justify-content-center">
        <MdLocationPin color="#4e4376" size={20}/>
        {data.name},{data.sys.country}
      </h4>

      {/* Sunrise & Sunset */}
      <div className="d-flex justify-content-between align-items-center w-100">
        <div className="d-flex align-items-center gap-2">
          <FiSunrise size={30} color="black" />
          <div className="d-flex flex-column justify-content-center">
            <span>{sunrise}</span>
            <small>Sunrise</small>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <FiSunset size={30} color="black" />
          <div className="d-flex flex-column justify-content-center text-end">
            <span>{sunset}</span>
            <small>Sunset</small>
          </div>
        </div>
      </div>

      {/* Weather Icon */}
      <img src={iconUrl} alt="Weather Icon" className="object-fit-contain w-50 h-75" />

      {/* Temperature */}
      <p className="fs-4 fw-bold">{Math.round(data.main.temp)}°C</p>

      {/* Description */}
      <h5>Weather: {data.weather?.[0]?.main}</h5>

      {/* Humidity & Wind */}
      <div className="d-flex justify-content-around w-100">
        <div className="d-flex align-items-center gap-2">
          <img
            src="./humidity.png"
            alt="humidity"
            className="object-fit-contain"
            width="40"
          />
          <p className="mb-0 fw-bolder">
            <span>{data.main.humidity}%</span> <br />
            Humidity
          </p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <img
            src="./wind.png"
            alt="wind"
            className="object-fit-contain"
            width="40"
          />
          <p className="mb-0 fw-bolder">
            <span>{data.wind.speed} km/h</span> <br />
            Wind Speed
          </p>
        </div>
      </div>
    </div>
  );
}

export default Weather_output;
