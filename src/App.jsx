import styles from "./App.module.css";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import Home from "./views/Home";
import City from "./views/City";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/city" element={<City />} />
        </Routes>

        {/* bottom navbar */}
        <nav>
          <Link to="/">
            <MdHomeFilled className={styles.icon} />
          </Link>
          <Link to="/City">
            <CiSearch className={styles.icon} />
          </Link>
        </nav>
      </BrowserRouter>
    </div>
  );
}
