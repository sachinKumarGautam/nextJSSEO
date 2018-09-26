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

import { deleteCartLoading, resetSavePatientToCartError } from '../cartDetails/cartActions'
import SideMenu from '../../components/SideMenu'
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
          <Grid item xs={2}>
            <aside>
              <SideMenu
                isLoading={this.props.patientDetailsState.isLoading}
              />
            </aside>
          </Grid>
          <Grid item xs={10}>
            <section>
              <PatientList
                patientDetailsState={this.props.patientDetailsState}
                getRefillPastMedicinesLoading={
                  this.props.actions.getRefillPastMedicinesLoading
                }
                pastMedicineState={this.props.pastMedicineState}
                updateSelectedPatientDetails={
                  this.props.actions.updateSelectedPatientDetails
                }
              />
              <RefillMedicineList
                isLoading={this.props.pastMedicineState.isLoading}
                pastMedicineState={this.props.pastMedicineState}
                addToCartHandler={this.props.addToCartHandler}
                checkPincodeState={this.props.checkPincodeState}
                getRefillPastMedicinesLoading={
                  this.props.actions.getRefillPastMedicinesLoading
                }
                cartState={this.props.cartState}
                deleteCartLoading={this.props.actions.deleteCartLoading}
                globalErrorState={this.props.globalErrorState}
                resetSavePatientToCartError={this.props.actions.resetSavePatientToCartError}
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
    cartState: state.cartState,
    globalErrorState: state.globalErrorState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getRefillPastMedicinesLoading,
        updateSelectedPatientDetails,
        deleteCartLoading,
        resetSavePatientToCartError
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RefillPatientsWrapper
)
