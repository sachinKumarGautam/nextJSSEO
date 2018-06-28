import React, { Component } from 'react'

import SideMenu from '../../components/SideMenu'
import OrderListDetails from './OrderListDetails'

import Grid from '@material-ui/core/Grid'

class OrderList extends Component {
  render () {
    return (
      <div>
        <Grid container spacing={24} className={this.props.classes.productDetailsWrapper}>
          <Grid item xs={2}>
            <SideMenu/>
          </Grid>
          <Grid item xs={10}>
            <OrderListDetails/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default OrderList
