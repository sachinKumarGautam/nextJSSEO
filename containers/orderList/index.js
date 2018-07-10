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
    return (
      <div>
        <BreadCrumbs />
        <section >
          <OrderList
            orderListState={this.props.orderListState}
            getOrderListDetailsLoading={this.props.actions.getOrderListDetailsLoading}
            customerState={this.props.customerState}
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
