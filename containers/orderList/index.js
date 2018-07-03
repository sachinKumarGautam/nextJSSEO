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
<<<<<<< HEAD
          <OrderList
            orderListState={this.props.orderListState}
            getOrderListDetailsLoading={this.props.actions.getOrderListDetailsLoading}
          />
=======
          <OrderList />
>>>>>>> 06b63f99b00a52cd71af51cea6b7954f0b45e5c7
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
    orderListState: state.orderListState
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderListWrapper)
