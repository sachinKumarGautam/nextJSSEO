import React from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import PatientDetailForm from '../patientDetails/PatientDetailForm'
import PatientDetailsCard from '../../components/PatientDetailsCard'

import ActivityIndicator from '../../components/activityIndicator'
import CommonSpinner
  from '../../components/activityIndicator/loader/CommonSpinner'

const styles = theme => ({
  addressWrapper: {
    position: 'relative'
  },
  spinnerCustomStyle: {
    position: 'absolute',
    top: theme.spacing.unit * 2.5,
    right: theme.spacing.unit * 2.5
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
        updatePatientFormValue={props.updatePatientFormValue}
        isEdit={'false'}
        globalErrorState={props.globalErrorState}
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
              onClickOfPatient={props.onClickOfPatient}
              patientDetail={patientDetail}
              savePatientSelected={props.savePatientSelected}
              patientIdSelected={props.patientIdSelected}
              isCartPage={props.isCartPage}
              cartType={props.cartType}
            />
          </ActivityIndicator>
        </Grid>
      )
    })}
  </Grid>
)

export default withStyles(styles)(PatientDetails)
