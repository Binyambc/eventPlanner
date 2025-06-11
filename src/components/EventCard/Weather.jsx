import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import styles from "./EventCard.module.css";

const Weather = ({ geo }) => {
  const [weather, setWeather] = useState({});
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${geo[0]}&lon=${geo[1]}&appid=${apiKey}`;
  const { get, loading } = useAxios();

  // console.log("API KEY:", import.meta.env.VITE_WEATHER_API_KEY);

  useEffect(() => {
    if (!apiKey) {
      console.error("Weather API key is missing.");
      return;
    }
    if (geo.length === 2) {
      const fetchWeather = async () => {
        const weatherData = await get(apiUrl);
        setWeather(weatherData);
        // console.log(weatherData);
      };
      fetchWeather();
    }
  }, [geo]);
  if (loading || !weather.weather || !weather.main)
    return <p>Loading weather forecast.....</p>;
  return (
    <div className={styles.weatherContainer}>
      <p>{weather.weather[0].description}</p>
      <p>{weather.main.temp}°C</p>
      <p>💧 {weather.main.humidity}%</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className={styles.weatherIcon}
      />
    </div>
  );
};

export default Weather;
