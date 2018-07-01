import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import MedicineList from './MedicineList'

import {
  getRelatedMedicinesLoading
} from './medicineListActions'

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
        getRelatedMedicinesLoading
      },
      dispatch
    )
  }
}


function mapStateToProps (state) {
  return {
    medicineListState: state.medicineListState
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MedicineListWrapper)
