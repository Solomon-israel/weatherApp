import { FaSearchPlus } from "react-icons/fa";
import styles from "../App.module.css";

export default function City({ city, setCity, fetchWeatherData }) {
  return (
    <form onSubmit={fetchWeatherData}>
      <h1>Search City Page</h1>
      <div className={styles.searchCity}>
        <input
          type="text"
          placeholder="type in your city in this area"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* {city} */}
        <button>
          <FaSearchPlus style={{ fontSize: "25px" }} />
        </button>
      </div>
    </form>
  );
}
