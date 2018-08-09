import React, { Component } from 'react'

import { connect } from 'react-redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import PrescriptionDetails from './PrescriptionDetails'
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
          />
        </section>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    prescriptionState: state.prescriptionState
  }
}

export default connect(mapStateToProps)(PrescriptionDetailsWrapper)
