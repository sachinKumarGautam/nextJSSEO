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
          customerState={props.customerState}
        />
      </Grid>
    </Grid>
  </div>
)

export default PatientDetailsWrapper
