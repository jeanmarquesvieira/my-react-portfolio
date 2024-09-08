import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { LanguageSource } from "./LanguageSource";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Spotify from "./components/Spotify";
import Contacts from "./components/Contacts";
import Pomodoro from "./components/Pomodoro";
import FinancialTracker from "./components/FinancialTracker";

function Jmv() {
  return (
    <LanguageSource>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/spotify" element={<Spotify />} />
        <Route path="/projects/pomodoro" element={<Pomodoro />} />
        <Route
          path="/projects/financial-tracker"
          element={<FinancialTracker />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </LanguageSource>
  );
}

export default Jmv;
