import React from 'react'

import Grid from '@material-ui/core/Grid'

import PatientDetailForm from '../patientDetails/PatientDetailForm'
import PatientDetailsCard from '../../components/PatientDetailsCard'

const PatientDetails = props => (
  <Grid container spacing={24} className={props.patientDetailsWrapper}>
    <Grid item xs={12}>
      <PatientDetailForm
        isCartPage={props.isCartPage}
        closePatientFormModal={props.closePatientFormModal}
        openPatientFormDialog={props.openPatientFormDialog}
        patientFormState={props.patientDetailsState}
        customerState={props.customerState}
        submitPatientDetailsLoading={props.submitPatientDetailsLoading}
        isEdit={'false'}
      />
    </Grid>
    {
      props.patientDetailsState.payload.map(patientDetail => {
        return (
          <Grid item xs={6}>
            <PatientDetailsCard
              patientDetail={patientDetail}
              savePatientSelected={props.savePatientSelected}
              patientIdSelected={props.patientIdSelected}
              isCartPage={props.isCartPage}
            />
          </Grid>
        )
      })
    }
  </Grid>
)

export default PatientDetails
