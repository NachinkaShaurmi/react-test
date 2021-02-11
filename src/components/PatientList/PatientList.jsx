import React from "react";
import PatientListHead from "./PatientListHead/PatientListHead";
import PatientListTable from "./PatientListTable/PatientListTable";

const PatientList = (props) => {

  const presentsLength = props.patientsPresent ? props.patientsPresent.length : 0
  const quittingLength = props.patientsQuitting ? props.patientsQuitting.length : 0

  return (
    <div className="patientList">
      <PatientListHead
       handleChange={props.handleChange}
       active={props.active}
       presentsLength={presentsLength}
       quittingLength={quittingLength}

      />
      <PatientListTable
        handleClick = {props.handleClick}
        active={props.active}
        patientsPresent={props.patientsPresent}
        patientsQuitting={props.patientsQuitting}
      />
    </div>
  );
};

export default PatientList;
