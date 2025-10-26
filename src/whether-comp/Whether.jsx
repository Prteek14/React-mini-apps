import { useState, useEffect } from "react";
import Weather_output from "./Weather_output";
import css from "./Whether.module.css";
import { FaSearchLocation } from "react-icons/fa";

function Whether() {
  const [city, setCity] = useState(""); // input ke liye
  const [searchCity, setSearchCity] = useState(""); // jis city ka data fetch hoga
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // ✅ jab searchCity change hoga tab API call chalegi
  useEffect(() => {
    if (!searchCity) return;

    const fetchWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          alert("❌ City not found!");
          setWeatherData(null);
        }
      } catch (error) {
        alert("⚠️ Error fetching weather: " + (error.message || error));
        setWeatherData(null);
      }
    };

    fetchWeather();
  }, [searchCity, apiKey]);

  // ✅ button click hone par search trigger
  const handleSearch = () => {
    if (city.trim() === "") {
      alert("Please enter a city name!");
      return;
    }
    setSearchCity(city.trim());
    setCity(""); // input clear karo
  };

  // ✅ disable scroll on this screen
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={css.whether}>
      {/* Input box */}
      <div
        className={`d-flex justify-content-center align-items-center ${css.searchBox}`}
      >
        <div className="input-group w-50 mt-2 h-25">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={`form-control rounded-start-pill border-3 border-primary ${css.custom_input}`}
            placeholder="Enter City Name"
          />
          <button
            type="button"
            className="btn btn-primary rounded-end-pill"
            onClick={handleSearch}
          >
            <FaSearchLocation color="black" size={23} />
          </button>
        </div>
      </div>

      {/* ✅ Weather data pass */}
      <Weather_output data={weatherData} />
    </div>
  );
}

export default Whether;
