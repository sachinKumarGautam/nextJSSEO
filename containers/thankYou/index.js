import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Router from 'next/router'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderConfirmation from './OrderConfirmation'

import {
  submitRefillDateLoading
} from './thankYouActions'

import {
  getAnonymousCartIdLoading
} from '../cartDetails/cartActions'

import {
  ORDER_DETAILS
} from '../../routes/RouteConstant'

import {
  getReplacedString
} from '../../utils/replaceConstants'

class ThankyouWrapper extends Component {
  componentDidMount () {
    this.props.actions.getAnonymousCartIdLoading(
      this.props.cartState,
      this.props.checkPincodeState.payload.source,
      this.props.checkPincodeState.payload.id,
      ''
    )
  }

  viewYouOrder() {
    const url = getReplacedString(ORDER_DETAILS)
    Router.push(url)
  }

  render () {
    return (
      <div>
        <BreadCrumbs isLoading={this.props.cartState.isLoading} />
        <section>
          <OrderConfirmation
            submitRefillDateLoading={this.props.actions.submitRefillDateLoading}
            thankYouState={this.props.thankYouState}
            cartState={this.props.cartState}
            viewYouOrder={this.viewYouOrder.bind(this)}
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
