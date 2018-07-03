import React, { Component } from 'react'

import SideMenu from '../../components/SideMenu'
import OrderListDetails from './OrderListDetails'

import Grid from '@material-ui/core/Grid'

class OrderList extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <aside><SideMenu /></aside>
          </Grid>
          <Grid item xs={10}>
<<<<<<< HEAD
            <OrderListDetails
              orderListState={this.props.orderListState}
              getOrderListDetailsLoading={this.props.getOrderListDetailsLoading}
            />
=======
            <OrderListDetails />
>>>>>>> 06b63f99b00a52cd71af51cea6b7954f0b45e5c7
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default OrderList
