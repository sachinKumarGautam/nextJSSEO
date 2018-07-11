import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import PatientList from './patientList'
import RefillMedicineList from './refillMedicineList'

import {
  getRefillPastMedicinesLoading,
  updateSelectedPatientDetails
} from './refillActions'
import {incrementCartItemLoading} from '../cartDetails/cartActions'
import {checkPincodeLoading} from '../location/pincode/pincodeAction'

/*
  bread crumbs
  side menu of patient list
  patient related medicines
*/

class RefillPatientsWrapper extends Component {
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
                updateSelectedPatientDetails={this.props.actions.updateSelectedPatientDetails}
              />
            </aside>
          </Grid>
          <Grid item xs={9}>
            <section>
              <RefillMedicineList
                pastMedicineState={this.props.pastMedicineState}
                checkPincodeState={this.props.checkPincodeState}
                cartState={this.props.cartState}
                incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
                checkPincodeLoading={this.props.actions.checkPincodeLoading}
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
    checkPincodeState: state.checkPincodeState,
    cartState: state.cartState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getRefillPastMedicinesLoading,
        updateSelectedPatientDetails,
        incrementCartItemLoading,
        checkPincodeLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RefillPatientsWrapper)
