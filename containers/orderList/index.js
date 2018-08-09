import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BreadCrumbs from '../../components/BreadCrumbs'
import OrderList from './OrderList'

import {
  getOrderListDetailsLoading
} from './orderListActions'
/*
  bread crumbs
  order list
*/

class OrderListWrapper extends Component {
  render () {
    const {orderListState, customerState, actions} = this.props
    return (
      <div>
        <BreadCrumbs isLoading={orderListState.isLoading} />
        <section >
          <OrderList
            orderListState={orderListState}
            getOrderListDetailsLoading={actions.getOrderListDetailsLoading}
            customerState={customerState}
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
        getOrderListDetailsLoading
      },
      dispatch
    )
  }
}

function mapStateToProps (state) {
  return {
    orderListState: state.orderListState,
    customerState: state.customerState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderListWrapper)
