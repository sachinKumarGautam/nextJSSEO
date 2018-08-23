import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import PrescriptionDetails from './PrescriptionDetails'
import {
  getPrescriptionListLoading
} from './prescriptionActions'
/*
  bread crumbs
  order list
*/

class PrescriptionDetailsWrapper extends Component {
  render () {
    const { prescriptionState } = this.props
    return (
      <div>
        <BreadCrumbs isLoading={prescriptionState.isLoading} />
        <section>
          <PrescriptionDetails
            prescriptionState={this.props.prescriptionState}
            getPrescriptionListLoading={this.props.actions.getPrescriptionListLoading}
            customerState={this.props.customerState}
          />
        </section>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    prescriptionState: state.prescriptionState,
    customerState: state.customerState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getPrescriptionListLoading
      },
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrescriptionDetailsWrapper)
