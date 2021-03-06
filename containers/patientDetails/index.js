import React from 'react'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import SideMenu from '../../components/SideMenu'
import PatientDetailsList from './PatientDetailsList'
/*
  bread crumbs
*/

const PatientDetailsWrapper = props => (
  <div>
    <BreadCrumbs
      isLoading={props.patientDetailsState.isLoading}
    />
    <Grid container spacing={24}>
      <Grid item xs={2}>
        <aside>
          <SideMenu
            isLoading={props.patientDetailsState.isLoading}
          />
        </aside>
      </Grid>
      <Grid item xs={10}>
        <PatientDetailsList
          cartState={props.cartState}
          patientDetailsState={props.patientDetailsState}
          submitPatientDetailsLoading={props.submitPatientDetailsLoading}
          savePatientSelected={props.savePatientSelected}
          customerState={props.customerState}
          getPatientDetailsListLoading={props.getPatientDetailsListLoading}
          resetPatientSelected={props.resetPatientSelected}
          updatePatientFormValue={props.updatePatientFormValue}
          resetPatientForm={props.resetPatientForm}
          globalErrorState={props.globalErrorState}
          resetIsEditFlag={props.resetIsEditFlag}
        />
      </Grid>
    </Grid>
  </div>
)

export default PatientDetailsWrapper
