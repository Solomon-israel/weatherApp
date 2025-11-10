import styles from "./App.module.css";
import { Link, Route, Routes, useNavigate } from "react-router";
import Home from "./views/Home";
import City from "./views/City";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const apiKey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const route = useNavigate();

  async function getWeather(e) {
    e.preventDefault();
    try {
      const cityData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      let data = await cityData.json();
      console.log("✔ fetched weather details", data);

      setWeather(data);
      route("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.app}>
      <Routes>
        weather
        <Route path="/" element={<Home weather={weather} />} />
        <Route
          path="/city"
          element={
            <City city={city} setCity={setCity} fetchWeatherData={getWeather} />
          }
        />
      </Routes>

      {/* bottom navbar */}
      <nav>
        <div className={styles.navContainer}>
          <Link to="/">
            <MdHomeFilled className={styles.icon} />
          </Link>
          <Link to="/City">
            <CiSearch className={styles.icon} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
