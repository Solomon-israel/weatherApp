import { FaCloudSunRain, FaWind } from "react-icons/fa";
import styles from "../App.module.css";
import { WiRaindrop, WiTime5 } from "react-icons/wi";
import { MdLightMode } from "react-icons/md";
import { IoWater } from "react-icons/io5";

export default function Home({ weather }) {
  function convertKelToCel(k) {
    let celcius = k - 273.15;
    return celcius;
  }

  if (weather.length === 0) {
    return <h1>No weather available, search for any city</h1>;
  }

  return (
    <div className={styles.container}>
      <h3>{weather.name}</h3>
      <div className={styles.bannerImage}>
        <div className={styles.cloudImage}>
          <img src="/images/cloudy.png" alt="sun" />
        </div>

        <h1> {convertKelToCel(weather.main.temp).toFixed(1)} ºC</h1>
        <p>{weather?.weather[0].description}</p>
      </div>

      <div className={styles.weatherSection}>
        <div className={styles.wind}>
          <FaWind className={styles.windIcon} />
          <p>{weather.main.humidity} km/hr</p>
        </div>
        <div className={styles.wind}>
          <IoWater className={styles.windIcon} />
          <p>02%</p>
        </div>
        <div className={styles.wind}>
          <MdLightMode className={styles.windIcon} />
          <p>8hr</p>
        </div>
      </div>
      {/* </div> */}

      <div className={styles.hourlyForecast}>
        <div className={styles.time}>
          <WiTime5 />
          <p>Hourly Forecast</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <FaCloudSunRain style={{ fontSize: "30px" }} />
            <p>Now</p>
            <p>29ºC</p>
          </div>
          <div className={styles.card}>
            <FaCloudSunRain style={{ fontSize: "30px" }} />
            <p>Now</p>
            <p>29ºC</p>
          </div>
          <div className={styles.card}>
            <FaCloudSunRain style={{ fontSize: "30px" }} />
            <p>Now</p>
            <p>29ºC</p>
          </div>
          <div className={styles.card}>
            <FaCloudSunRain style={{ fontSize: "30px" }} />
            <p>Now</p>
            <p>29ºC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
