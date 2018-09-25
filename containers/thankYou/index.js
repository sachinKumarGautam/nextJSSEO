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
  getAnonymousCartIdLoading,
  paymentInitiateLoading,
  verifyPaymentLoading,
  resetCartState,
  updatePaymentFailureFlag,
  resetPaymentInitiateErrorState
} from '../cartDetails/cartActions'

import {
  getPaymentChannelsLoading
} from '../orderDetails/orderDetailsActions'

import {
  ORDER_DETAILS,
  THANK_YOU,
  HOME_PAGE
} from '../../routes/RouteConstant'

import {
  getReplacedString
} from '../../utils/replaceConstants'

import Loader from '../../components/activityIndicator/loader'

class ThankyouWrapper extends Component {
  componentDidMount () {
    this.props.actions.getAnonymousCartIdLoading(
      this.props.cartState,
      this.props.checkPincodeState.payload.source,
      this.props.checkPincodeState.payload.id,
      ''
    )

    window.onpopstate = this.onBackButtonEvent
  }

  onBackButtonEvent = (event) => {
    event.preventDefault()
    const url = getReplacedString(HOME_PAGE)
    Router.push(url)
  }

  viewYouOrder () {
    const url = getReplacedString(ORDER_DETAILS)
    Router.push(url)
  }

  retryPayment () {
    this.props.actions.resetCartState()
    const url = getReplacedString(THANK_YOU)
    const as = `${url}?payment-status=retry`
    const href = `${url}?payment-status=retry`
    Router.push(href, as)
  }

  render () {
    return (
      <div>
        <BreadCrumbs isLoading={this.props.cartState.isLoading} />
        <section>
          <OrderConfirmation
            queryParamPaymentStatus={this.props.queryParamPaymentStatus}
            submitRefillDateLoading={this.props.actions.submitRefillDateLoading}
            getPaymentChannelsLoading={this.props.actions.getPaymentChannelsLoading}
            paymentInitiateLoading={this.props.actions.paymentInitiateLoading}
            updatePaymentFailureFlag={this.props.actions.updatePaymentFailureFlag}
            verifyPaymentLoading={this.props.actions.verifyPaymentLoading}
            resetCartState={this.props.actions.resetCartState}
            thankYouState={this.props.thankYouState}
            cartState={this.props.cartState}
            customerState={this.props.customerState}
            orderDetailsState={this.props.orderDetailsState}
            orderId={this.props.orderId}
            resetPaymentInitiateErrorState={this.props.actions.resetPaymentInitiateErrorState}
            viewYouOrder={this.viewYouOrder.bind(this)}
            retryPayment={this.retryPayment.bind(this)}
            constantsState={this.props.constantsState}
          />
          <Loader
            loaderType={'fullPageSpinner'}
            isLoading={
              this.props.cartState.payment.isLoading ||
              this.props.orderDetailsState.payment_channels.isLoading
            }
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
        getAnonymousCartIdLoading,
        getPaymentChannelsLoading,
        paymentInitiateLoading,
        verifyPaymentLoading,
        updatePaymentFailureFlag,
        resetCartState,
        resetPaymentInitiateErrorState
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    customerState: state.customerState,
    thankYouState: state.thankYouState,
    orderDetailsState: state.orderDetailsState,
    constantsState: state.constantsState,
    checkPincodeState: state.checkPincodeState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankyouWrapper)
