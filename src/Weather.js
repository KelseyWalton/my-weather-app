import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [cityName, setCityName] = useState(null);

  function displayTemperature(response) {
    setLoaded(true);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCityName(city);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f62ff249a72da3b34cec98a655e25650&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city"
        onChange={updateCity}
      ></input>
      <input type="submit" className="search-button" value="search"></input>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            <strong>{cityName}</strong>
          </li>
          <li>
            <strong>Temperature:</strong> {Math.round(temperature)}
          </li>
          <li>
            <strong>Description:</strong> {description}{" "}
          </li>
          <li>
            <strong>Humidity: </strong>
            {humidity}{" "}
          </li>
          <li>
            <strong>Wind: </strong>
            {Math.round(wind)}{" "}
          </li>
          <li>
            <img src={icon} alt=""></img>
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
