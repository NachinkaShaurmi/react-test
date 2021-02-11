import React from 'react'

const Patient = (props) => {
  const fullName = props.firstName + ' ' + props.lastName + ' ' + props.patrName
  return (
    <tr onClick={() => props.handleClick(props.birthDate, fullName, props.diagnosis)}>
      <td>{props.index}</td>
      <td>{fullName}</td>
      <td>{props.active ? props.bedNumber : props.cause}</td>
    </tr>
  )
}

export default Patient