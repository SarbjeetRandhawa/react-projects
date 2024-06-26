import React from "react";
import "./currentweather.css";

const currentweather = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data &&  <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.city}</p>
            <p className="description">{data.weather[0].description}</p>
          </div>
          <img
            src={`icon/${data.weather[0].icon}.png`}
            alt="weather"
            className="weather-icon"
          />
        </div>

        <div className="bottom">
          <p className="temp">{Math.round(data.main.temp)}°C</p>

          <div className="details">
            <div className="parameter-row">
              
              <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Feels Like</span>
              <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Wind </span>
              <span className="parameter-value">{data.wind.speed}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Humidity</span>
              <span className="parameter-value">{data.main.humidity}</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Pressure</span>
              <span className="parameter-value">{data.main.pressure}</span>
            </div>
          </div>
        </div>
      </div>}
      
    </div>
  );
};

export default currentweather;
