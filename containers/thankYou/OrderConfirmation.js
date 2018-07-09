import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'

import OrderConfirmationDetails from './OrderConfirmationDetails'
// import CartDetails from './CartDetails'

const OrderConfirmation = (props) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs={8}>
        <OrderConfirmationDetails/>
      </Grid>
      <Grid item xs={4}>
        {/* <CartDetails/> */}
      </Grid>
    </Grid>
  )
}

export default OrderConfirmation
