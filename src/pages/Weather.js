import { useState } from "react";
import { Button } from "react-bootstrap";

const api = {
  key: "44f3f6958c6e4851d9da75a9fae460a8",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [errorMessage, setNewError] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found. Please enter a valid city name.");
        }
        return res.json();
      })
      .then((result) => {
        setWeather(result);
      })
      .catch((error) => {
        console.error("Failed:", error.message);
        setNewError(error.message);
      })
      .finally(() => {
        setSearch("");
      });
  };

  return (
    <section className="weather-api">
      <h1>Check the weather before your trip</h1>

      {/* Search box */}
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button type="submit" className="primary-button">
          Search
        </Button>
      </form>

      {/* Error message rendering */}
      {errorMessage && <p className="error-message" >{errorMessage}</p>}

      {/* Weather forecast results */}
      {Object.keys(weather).length !== 0 && weather.main && weather.weather && (
        <div className="weather-results">
          <h3>{weather.name}</h3>
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