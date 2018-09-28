import React, { Component } from 'react'

import SideMenu from '../../components/SideMenu'
import OrderListDetails from './OrderListDetails'

import Grid from '@material-ui/core/Grid'

class OrderList extends Component {
  render () {
    const {orderListState, getOrderListDetailsLoading, customerState} = this.props
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <aside><SideMenu isLoading={orderListState.isLoading} /></aside>
          </Grid>
          <Grid item xs={10}>
            <OrderListDetails
              orderListState={orderListState}
              getOrderListDetailsLoading={getOrderListDetailsLoading}
              customerState={customerState}
              paymentInitiateLoading={this.props.paymentInitiateLoading}
              resetCartState={this.props.resetCartState}
              cartState={this.props.cartState}
              globalErrorState={this.props.globalErrorState}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default OrderList
