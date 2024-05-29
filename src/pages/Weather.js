import { useState } from "react";
import { Button } from "react-bootstrap";

const api = {
  key: "44f3f6958c6e4851d9da75a9fae460a8",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };

  return (
    <section className="weather-api">
      <h1>Check the weather before your trip</h1>

      {/* Search box */}
      <div>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button className="primary-button" onClick={searchPressed}>
          Search
        </Button>
      </div>

      {Object.keys(weather).length !== 0 && (
        <div className="weather-results">
          <p>{weather.name}</p>
          <p>{Math.floor(weather.main.temp)} °C</p>
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
        </div>
      )}
      <div className="weather-img"></div>
    </section>
  );
};

export default Weather;
