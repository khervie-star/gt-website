import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ChurchHistory, Contact, Homepage } from "./pages";
import { Layout } from "./components";
import { WeeklyProgrammes } from "./pages/Programmes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about/church-history" element={<ChurchHistory />} />

          <Route
            path="/programmes/weekly-programmes"
            element={<WeeklyProgrammes />}
          />
          <Route path="/programmes/calendar" element={<WeeklyProgrammes />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
