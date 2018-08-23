import React from 'react'

import Typography from '@material-ui/core/Typography'

const SelectedPatientDetails = props => (
  <div>
    <Typography
      component='h1'
      className={props.heading}
    >
      {props.patient.patient_full_name}
    </Typography>
    <Typography
      component='h1'
      className={props.patientDetails}
    >
      {props.patient.gender} |
      {props.patient.age}
    </Typography>
    <Typography
      component='h1'
      className={props.patientDetails}
    >
      {props.patient.mobile}
    </Typography>
  </div>
)

export default SelectedPatientDetails
