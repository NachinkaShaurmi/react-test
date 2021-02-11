import React, { useState, useEffect } from "react";
import loadData from "./api/api";
import "./App.css";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import PatientList from "./components/PatientList/PatientList";

const API_PRESENTS = "./data/presentList.json";
const API_QUITTING = "./data/quittingList.json";

function App() {
  const [active, setActive] = React.useState(true);
  const [patientsPresent, setPatientsPresent] = React.useState();
  const [patientsQuitting, setPatientsQuitting] = React.useState();
  const [patientTarget, setpatientTarget] = React.useState([]);

  const handleChange = (e) => {
    if (e.target.dataset.value === "present") setActive(true);
    if (e.target.dataset.value === "quitting") setActive(false);
  };

  const handleClick = (date, name, diagnosis) => {
    const ms = Date.parse(date)
    const age = Math.floor((Date.now() - ms) / (24 * 3600 * 365.25 * 1000))
    setpatientTarget([date, name, diagnosis, age])
  };

  useEffect(() => {
    loadData(API_PRESENTS, setPatientsPresent);
    loadData(API_QUITTING, setPatientsQuitting);
  }, []);

  return (
    <div className="App">
      <PatientInfo header="Информация о пациенте" patient={patientTarget}/>
      <PatientList
        handleClick = {handleClick}
        handleChange={handleChange}
        active={active}
        patientsPresent={patientsPresent}
        patientsQuitting={patientsQuitting}
      />
    </div>
  );
}

export default App;
