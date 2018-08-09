import React from 'react'

import Grid from '@material-ui/core/Grid'

import PatientDetailsCard from '../../components/PatientDetailsCard'
import MultipleCardLoader
  from '../../components/activityIndicator/loader/cardLoader/MultipleCardLoader'
import ActivityIndicator from '../../components/activityIndicator/index'

const PatientDetailsCardWrapper = props => (
  <Grid container spacing={24} className={props.patientDetailsCardWrapper}>
    <ActivityIndicator
      isLoading={props.isLoading}
      LoaderComp={<MultipleCardLoader />}
    >
      {props.payload.map(patientDetail => {
        return (
          <Grid item xs={6}>
            <PatientDetailsCard patientDetail={patientDetail} />
          </Grid>
        )
      })}
    </ActivityIndicator>
  </Grid>
)

export default PatientDetailsCardWrapper
