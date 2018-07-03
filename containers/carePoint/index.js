import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import CarePoint from './CarePoint'

import {
  getCarePointDetailsLoading
} from './carePointActions'

/*
  bread crumbs
  care point details
*/

class CarePointWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section >
          <CarePoint
            carePointState={this.props.carePointState}
            getCarePointDetailsLoading={this.props.actions.getCarePointDetailsLoading}
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
        getCarePointDetailsLoading
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    carePointState: state.carePointState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarePointWrapper)
