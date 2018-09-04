import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderDetails from './OrderDetails'

import {
  getOrderDetailsLoading
} from './orderDetailsActions'

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
            getOrderDetailsLoading={this.props.actions.getOrderDetailsLoading}
            constantsState={this.props.constantsState}
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
        getOrderDetailsLoading
      },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsWrapper)
