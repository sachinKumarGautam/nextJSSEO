import React from 'react'

import Grid from '@material-ui/core/Grid'

// import OrderConfirmationDetails from './OrderConfirmationDetails'
import PaymentFailure from './PaymentFailure'
import MyCartDetails from './MyCartDetails'

const OrderConfirmation = props => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <PaymentFailure
          cartState={props.cartState}
          submitRefillDateLoading={props.submitRefillDateLoading}
          thankYouState={props.thankYouState}
          viewYouOrder={props.viewYouOrder}
        />
        {
          // <OrderConfirmationDetails
          //   cartState={props.cartState}
          //   submitRefillDateLoading={props.submitRefillDateLoading}
          //   thankYouState={props.thankYouState}
          // />
        }
      </Grid>
      <Grid item xs={5}>
        <MyCartDetails cartState={props.cartState} />
      </Grid>
    </Grid>
  )
}

export default OrderConfirmation
