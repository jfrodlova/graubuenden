import { useState } from "react";
import { Button } from "react-bootstrap";

const api = {
  key: "44f3f6958c6e4851d9da75a9fae460a8",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
      setWeather(result);
      setSearch(""); 
    })
    .catch(error => console.error('error', error));

    
  };

  return (
    <section className="weather-api">
      <h1>Check the weather before your trip</h1>

      {/* Search box */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button className="primary-button" onClick={handleSubmit}>
          Search
        </Button>
      </form>

      {Object.keys(weather).length !== 0 && (
        <div className="weather-results">
          <h3>{weather.name}</h3>
          <p>{Math.floor(weather.main.temp)} °C</p>
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>
          {/* <div>{weather.weather[0].icon}</div> */}
        </div>
      )}
      <div className="weather-img"></div>
    </section>
  );
};

export default Weather;