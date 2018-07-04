import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import BreadCrumbs from '../../components/BreadCrumbs'
import SideMenu from '../../components/SideMenu'
import PatientDetailsList from './PatientDetailsList'

/*
  bread crumbs
*/

const styles = theme => {
  return {
    mainStyle: {
      boxShadow: `0 0 6px 0 ${theme.palette.customGrey.grey800}`,
      opacity: 0.72,
      marginBottom: theme.spacing.unit * 2.5,
      height: theme.spacing.unit * 62.5,
    }
  }
}

const PatientDetailsWrapper = props => (
  <div>
    <BreadCrumbs />
    <Grid container spacing={24}>
      <Grid item xs={3}>
        <aside>
          <SideMenu />
        </aside>
      </Grid>
      <Grid item xs={8} className={props.classes.mainStyle}>
        <PatientDetailsList
          patientDetailsState={props.patientDetailsState}
          savePatientSelected={props.savePatientSelected}
        />
      </Grid>
    </Grid>
  </div>
)

export default  withStyles(styles)(PatientDetailsWrapper)
