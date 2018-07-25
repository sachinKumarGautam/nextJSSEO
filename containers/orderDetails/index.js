import React, { Component } from 'react'

import { connect } from 'react-redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderDetails from './OrderDetails'

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
            cartState={this.props.cartState}
            orderDetailsState={this.props.orderDetailsState}
          />
        </section>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cartState: state.cartState,
    orderDetailsState: state.orderDetailsState
  }
}

export default connect(
  mapStateToProps
)(OrderDetailsWrapper)
