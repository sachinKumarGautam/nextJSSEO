import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderConfirmation from './OrderConfirmation'
import {
  submitRefillDateLoading
} from './thankYouActions'

import {
  getAnonymousCartIdLoading
} from '../cartDetails/cartActions'

class ThankyouWrapper extends Component {
  componentDidMount() {
    this.props.actions.getAnonymousCartIdLoading(
      this.props.cartState,
      this.props.checkPincodeState.payload.source,
      this.props.checkPincodeState.payload.id,
      ''
    )
  }

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
        submitRefillDateLoading,
        getAnonymousCartIdLoading
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    thankYouState: state.thankYouState,
    checkPincodeState: state.checkPincodeState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankyouWrapper)
