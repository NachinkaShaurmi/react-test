import React from "react";
import Patient from "./Patient/Patient";

const PatientListTable = (props) => {
  let isPresent = props.active ? props.patientsPresent : props.patientsQuitting;

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>№ ИБ</th>
          <th>ФИО</th>
          <th>{props.active ? "Палата" : "Причина выбытия"}</th>
        </tr>
      </thead>
      <tbody>
        {!isPresent
          ? null
          : isPresent.map((patient, i) => (
              <Patient
                birthDate = {patient.birthDate}
                patrName = {patient.patrName}
                diagnosis = {patient.diagnosis}
                handleClick = {props.handleClick}
                index={i + 1}
                key={i}
                active={props.active}
                firstName={patient.firstName}
                lastName={patient.lastName}
                bedNumber={patient.bedNumber}
                cause={patient.cause}
              />
            ))}
      </tbody>
    </table>
  );
};

export default PatientListTable;
