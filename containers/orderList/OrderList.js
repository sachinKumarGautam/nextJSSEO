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
            <OrderListDetails
              orderListState={this.props.orderListState}
              getOrderListDetailsLoading={this.props.getOrderListDetailsLoading}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default OrderList
