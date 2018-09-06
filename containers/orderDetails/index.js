import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderDetails from './OrderDetails'

import {
  getOrderDetailsLoading
} from './orderDetailsActions'

import {
  resetCartState,
  paymentInitiateLoading
} from '../cartDetails/cartActions'

import Loader from '../../components/activityIndicator/loader'

/*
  bread crumbs
  order details
*/

class OrderDetailsWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <section >
          <OrderDetails
            orderId={this.props.orderId}
            cartState={this.props.cartState}
            orderDetailsState={this.props.orderDetailsState}
            resetCartState={this.props.actions.resetCartState}
            paymentInitiateLoading={this.props.actions.paymentInitiateLoading}
            getOrderDetailsLoading={this.props.actions.getOrderDetailsLoading}
            constantsState={this.props.constantsState}
          />
          <Loader
            loaderType={'fullPageSpinner'}
            isLoading={this.props.cartState.payment.isLoading}
          />
        </section>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    orderDetailsState: state.orderDetailsState,
    constantsState: state.constantsState
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        getOrderDetailsLoading,
        resetCartState,
        paymentInitiateLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsWrapper)
