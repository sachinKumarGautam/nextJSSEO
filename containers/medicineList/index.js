import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import MedicineList from './MedicineList'

import {
  getRelatedMedicinesLoading
} from './medicineListActions'
import {incrementCartItemLoading} from '../cartDetails/cartActions'

/*
  bread crumbs
  label
  medicine list
*/

class MedicineListWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section >
          <MedicineList
            medicineListState={this.props.medicineListState}
            getRelatedMedicinesLoading={this.props.actions.getRelatedMedicinesLoading}
            checkPincodeState={this.props.checkPincodeState}
            moleculeName={this.props.moleculeName}
            incrementCartItemLoading={this.props.actions.incrementCartItemLoading}
            cartState={this.props.cartState}
          />
        </section>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getRelatedMedicinesLoading,
        incrementCartItemLoading
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    medicineListState: state.medicineListState,
    checkPincodeState: state.checkPincodeState,
    cartState: state.cartState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedicineListWrapper)
