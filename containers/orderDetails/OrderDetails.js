import React, { Component } from 'react'

import SideMenu from '../../components/SideMenu'
import OrderInformation from './OrderInformation'

import Grid from '@material-ui/core/Grid'

class OrderDetails extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={2}>
            <SideMenu />
          </Grid>
          <Grid item xs={10}>
            <OrderInformation
              cartState={this.props.cartState}
              orderDetailsState={this.props.orderDetailsState}
              getOrderDetailsLoading={this.props.getOrderDetailsLoading}
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default OrderDetails
