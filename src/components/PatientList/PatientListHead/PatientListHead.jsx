import React from "react";

const PatientListHead = (props) => {
  return (
    <div className="patientListHead">
      <span data-value="present" onClick={(e) => props.handleChange(e)} className={props.active ? 'active' : null}>
        ПРИСУТСТВУЮТ({props.presentsLength}) 
      </span>
      <span data-value="quitting" onClick={(e) => props.handleChange(e)} className={!props.active ? 'active' : null}>
        ВЫБЫВШИЕ({props.quittingLength})
      </span>
    </div>
  );
};

export default PatientListHead;
