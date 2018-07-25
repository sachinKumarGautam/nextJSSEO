import React from 'react'

import Grid from '@material-ui/core/Grid'

import PatientDetailsCard from '../../components/PatientDetailsCard'

const PatientDetailsCardWrapper = props => (
  <Grid container spacing={24} className={props.patientDetailsCardWrapper}>
    {
      props.payload.map(patientDetail => {
        return (
          <Grid item xs={6} onClick={props.savePatientSelected.bind(this, patientDetail)}>
            <PatientDetailsCard
              openPatientFormModal={props.openPatientFormModal}
              patientDetail={patientDetail}
            />
          </Grid>
        )
      })
    }
  </Grid>
)

export default PatientDetailsCardWrapper
