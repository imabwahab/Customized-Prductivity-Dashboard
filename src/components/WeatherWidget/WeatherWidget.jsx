import React, { useEffect, useState } from "react";
import "./WeatherWidget.css"; // Add your CSS styles here

const WeatherWidget = ({ city = "Lahore" }) => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "ecae25b050a0e89e4dd0c38a49f942ed"; // Replace this with your actual API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await res.json();
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
          icon: data.weather[0].icon,
          city: data.name,
        });
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    };

    fetchWeather();
  }, [city]);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="weather-widget">
      <h3>{weather.city}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={weather.condition}
      />
      <p>{weather.temp}°C – {weather.condition}</p>
    </div>
  );
};

export default WeatherWidget;
