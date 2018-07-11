import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import MedicineList from './MedicineList'

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
            medicineListState={this.props.medicineState}
            query={this.props.query}
            getRelatedMedicinesLoading={this.props.getRelatedMedicinesLoading}
            checkPincodeState={this.props.checkPincodeState}
            moleculeName={this.props.moleculeName}
            incrementCartItemLoading={this.props.incrementCartItemLoading}
            cartState={this.props.cartState}
            checkPincodeLoading={this.props.checkPincodeLoading}
          />
        </section>
      </div>
    )
  }
}

export default MedicineListWrapper
