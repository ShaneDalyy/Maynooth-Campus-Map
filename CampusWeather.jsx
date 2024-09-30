import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CampusWeather.css";

export default function CampusWeather() {
  // API key for OpenWeatherMap
  let api_key = "cd2664cf621ec9dc02b8612f38822811";

  // State for storing the weather icon URL
  const [wicon, setWicon] = useState("/imgs/cloud.png");

  // Function to fetch weather data and update the UI
  const search = async (cityName = "") => {
    // Determine city name either from function argument or input field
    const city = cityName || document.getElementsByClassName("cityInput")[0].value;
    if (city === "") return;

    // Construct URL for API call
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;

    // Fetch weather data from API
    let response = await fetch(url);
    let data = await response.json();

    // Update UI with fetched data
    const humidity = document.getElementsByClassName("W_humidity-percent");
    const wind = document.getElementsByClassName("W_wind-rate");
    const temperature = document.getElementsByClassName("W_weather-temp");
    const location = document.getElementsByClassName("W_weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "℃";
    location[0].innerHTML = data.name;

    // Update weather icon based on fetched data
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon("/imgs/clear.png");
    } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon("/imgs/cloud.png");
    } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon("/imgs/drizzle.png");
    } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
      setWicon("/imgs/drizzle.png");
    } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon("/imgs/rain.png");
    } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
      setWicon("/imgs/rain.png");
    } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
      setWicon("/imgs/snow.png");
    } else {
      setWicon("/imgs/clear.png");
    }
  }

  // useEffect to automatically fetch Maynooth weather data on component mount
  useEffect(() => {
    search("Maynooth");
  }, []);

  // Render the component UI
  return (
    <>
      <div className="W_container">
        <div className="W_top-bar">
          <input type="text" className="cityInput" placeholder="Search" />
          <div className="W_button-container">
            <div className="W_search-icon" onClick={() => search()}>
              <img src="/imgs/search.png" alt="" />
            </div>
            <Link to="/">
              <div className="W_back-button">
                <button className="W_turn-back-button">Turn Back</button>
              </div>
            </Link>
          </div>
        </div>

        <div className="W_weather-image">
          <img src={wicon} alt="" />
        </div>
        <div className="W_weather-temp">24℃</div>
        <div className="W_weather-location">Maynooth</div>
        <div className="W_data-container">
          <div className="W_element">
            <img src="/imgs/humidity.png" alt="" className="W_icon" />
            <div className="w_data">
              <div className="W_humidity-percent">64%</div>
              <div className="W_text">Humidity</div>
            </div>
          </div>
          <div className="W_element">
            <img src="/imgs/wind.png" alt="" className="W_icon" />
            <div className="w_data">
              <div className="W_wind-rate">18 km/h</div>
              <div className="W_text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
