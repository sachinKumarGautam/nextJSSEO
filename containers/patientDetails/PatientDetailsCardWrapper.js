import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import PatientDetailsCard from '../../components/PatientDetailsCard'
import MultipleCardLoader
  from '../../components/activityIndicator/loader/cardLoader/MultipleCardLoader'
import ActivityIndicator from '../../components/activityIndicator/index'
import ComponentSpecificError from '../../components/activityIndicator/error/ComponentSpecificError'

class PatientDetailsCardWrapper extends Component {
  tryAgain () {
    this.props.getPatientDetailsListLoading(
      this.props.patientDetailsState,
      this.props.customerState.payload.id
    )
  }

  render () {
    return (
      <Grid
        container={!this.props.errorState.isError}
        spacing={24}
        className={this.props.patientDetailsCardWrapper}
      >
        <ActivityIndicator
          isLoading={this.props.isLoading}
          LoaderComp={<MultipleCardLoader />}
          isError={this.props.errorState.isError}
          ErrorComp={
            <ComponentSpecificError
              error={this.props.errorState.error}
              tryAgain={this.tryAgain.bind(this)}
            />
          }
        >
          {this.props.payload.map(patientDetail => {
            return (
              <Grid item xs={6}>
                <PatientDetailsCard
                  openPatientFormModal={this.props.openPatientFormModal}
                  patientDetail={patientDetail}
                  patientWrapper={this.props.patientWrapper}
                  selectPatientDetail={this.props.savePatientSelected.bind(this, patientDetail)}
                />
              </Grid>
            )
          })}
        </ActivityIndicator>
      </Grid>
    )
  }
}

export default PatientDetailsCardWrapper
