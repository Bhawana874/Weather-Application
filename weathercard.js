import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherDetails, wind } = weather;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p><strong>{weatherDetails[0].main}</strong> - {weatherDetails[0].description}</p>
      <p>🌡️ Temp: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬️ Wind: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
