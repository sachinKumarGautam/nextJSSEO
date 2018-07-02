import React, { Component } from 'react'

import BreadCrumbs from '../../components/BreadCrumbs'

import Grid from '@material-ui/core/Grid'

import OrderSummary from './OrderSummary'
import CartDetails from './CartDetails'

/*
  bread crumbs
  order summary
  cart details
*/

class CartDetailsWrapper extends Component {
  render () {
    return (
      <div>
        <BreadCrumbs />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <section>
              <OrderSummary />
            </section>
          </Grid>
          <Grid item xs={4}>
            <section>
              <CartDetails />
            </section>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default CartDetailsWrapper
