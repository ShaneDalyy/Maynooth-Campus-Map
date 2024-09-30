import React from "react";
import { Link, useNavigation } from "react-router-dom";
import "./CampusDashboard.css";
import AuthDetails from "../Components/AuthDetails.jsx";


export default function CampusDashboard() {
 
    const nav = useNavigation();

    return (
    <div className="container">
      <header>
        <img
          src="https://logos-download.com/wp-content/uploads/2021/01/Maynooth_University_Logo.png"
          alt="Campus Logo"
          id="logo"
        />
        <h1>Campus Map DashBoard</h1>
        <p>Welcome, { <AuthDetails/> } </p>

      </header>

      <div className="dashboard">
        {/* 使用Link组件来链接到不同的页面 */}
        <Link to="/weather">
          <div className="card">
            <img src="/imgs/weather.jpg" alt="Weather" />
            <p>Weather</p>
          </div>
        </Link>

        <Link to="/map">
          <div className="card">
            <img src="/imgs/map.jpg" alt="Map" />
            <p>Map</p>
          </div>
        </Link>

        <Link to="/events">
          <div className="card">
            <img src="/imgs/event.jpeg" alt="Events" />
            <p>Events</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
