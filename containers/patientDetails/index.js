import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import SideMenu from '../../components/SideMenu'
import PatientDetailsList from './PatientDetailsList'

/*
  bread crumbs
*/

const PatientDetailsWrapper = props => (
  <div>
    <BreadCrumbs />
    <Grid container spacing={24}>
      <Grid item xs={2}>
        <aside>
          <SideMenu />
        </aside>
      </Grid>
      <Grid item xs={10}>
        <PatientDetailsList
          patientDetailsState={props.patientDetailsState}
          savePatientSelected={props.savePatientSelected}
          submitPatientDetailsLoading={props.submitPatientDetailsLoading}
          customerState={props.customerState}
          savePatientToCartLoading={props.savePatientToCartLoading}
        />
      </Grid>
    </Grid>
  </div>
)

export default PatientDetailsWrapper
