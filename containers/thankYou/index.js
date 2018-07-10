import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderConfirmation from './OrderConfirmation'
import {
  submitRefillDateLoading
} from './thankYouActions'

class ThankyouWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section>
          <OrderConfirmation
            submitRefillDateLoading={this.props.actions.submitRefillDateLoading}
            thankYouState={this.props.thankYouState}
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
        submitRefillDateLoading
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    thankYouState: state.thankYouState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankyouWrapper)
