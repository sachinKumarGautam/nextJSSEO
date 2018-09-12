import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import PatientDetailForm from '../patientDetails/PatientDetailForm'
import PatientDetailsCard from '../../components/PatientDetailsCard'

import ActivityIndicator from '../../components/activityIndicator'
import CommonSpinner from '../../components/activityIndicator/loader/CommonSpinner'

const styles = theme => ({
  addressWrapper: {
    position: 'relative'
  },
  spinnerCustomStyle: {
    position: 'absolute',
    top: '20px',
    right: '20px'
  }
})

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
    {props.patientDetailsState.payload.map(patientDetail => {
      return (
        <Grid item xs={6} className={props.classes.addressWrapper}>
          <ActivityIndicator
            isLoading={
              patientDetail.id === props.inProgressPatientId
              ? props.patientDetails.isLoading
              : false
            }
            LoaderComp={
              <CommonSpinner
                customStyle={props.classes.spinnerCustomStyle}
                thickness={3}
                size={25}
              />
            }
            bottomLoader
          >
            <PatientDetailsCard
              patientDetail={patientDetail}
              savePatientSelected={props.savePatientSelected}
              patientIdSelected={props.patientIdSelected}
              isCartPage={props.isCartPage}
            />
          </ActivityIndicator>
        </Grid>
      )
    })}
  </Grid>
)

export default withStyles(styles)(PatientDetails)
