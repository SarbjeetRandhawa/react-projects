import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const week_days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dateinaweek = new Date().getDay();
  const forecast_days = week_days
    .slice(dateinaweek, week_days.length)
    .concat(week_days.slice(0, dateinaweek));

  console.log(forecast_days);

  if (!data || !data.list) {
    return <div></div>;
  }

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icon/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="icon-small"
                  />
                  <label className="day">{forecast_days[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-detail-grid">
                <div className="daily-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure}hPa</label>
                </div>
                <div className="daily-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-grid-item">
                  <label>CLouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-grid-item">
                  <label>Speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-grid-item">
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
[];
