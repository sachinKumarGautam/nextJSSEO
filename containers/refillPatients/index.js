import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import PatientList from './patientList'
import RefillMedicineList from './refillMedicineList'

import {
  getRefillPastMedicinesLoading
} from './refillActions'

/*
  bread crumbs
  side menu of patient list
  patient related medicines
*/

class RefillPatientsWrapper extends Component {
  constructor (props) {
    super(props)

    this.state = {
      patientId: 0,
      patientFullName: ''
    }

    this.setPatientDetails = this.setPatientDetails.bind(this)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.patientDetailsState.payload.length !== this.props.patientDetailsState.payload.length) {
      this.setPatientDetails(
        this.props.patientDetailsState.payload[0].id,
        this.props.patientDetailsState.payload[0].full_name
      )
    }
  }

  setPatientDetails (id, name) {
    this.setState({
      id: id,
      patientFullName: name
    })
  }

  render () {
    return (
      <div>
        <BreadCrumbs />
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <aside>
              <PatientList
                patientDetailsState={this.props.patientDetailsState}
                getRefillPastMedicinesLoading={this.props.actions.getRefillPastMedicinesLoading}
                pastMedicineState={this.props.pastMedicineState}
                setPatientDetails={this.setPatientDetails}
              />
            </aside>
          </Grid>
          <Grid item xs={9}>
            <section>
              <RefillMedicineList
                pastMedicineState={this.props.pastMedicineState}
                checkPincodeState={this.props.checkPincodeState}
                patientName={this.state.patientFullName}
              />
            </section>
          </Grid>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    pastMedicineState: state.pastMedicineState,
    patientDetailsState: state.patientDetailsState,
    checkPincodeState: state.checkPincodeState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getRefillPastMedicinesLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillPatientsWrapper)
