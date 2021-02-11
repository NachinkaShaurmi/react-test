import React from "react";


const PatientInfo = (props) => {
  return (
    <div className="patientInfo ">
      <table className="table table-striped infoTable">
        <thead>
          <tr>
            <th>{props.header}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ФИО: {props.patient[1]}</td>
          </tr>
          <tr>
            <td>Возраст: {props.patient[3]} ({props.patient[0]})</td>
          </tr>
          <tr>
            <td>Диагноз: {props.patient[2]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PatientInfo;
