import React from 'react'

import Grid from '@material-ui/core/Grid'

import OrderConfirmationDetails from './OrderConfirmationDetails'
import MyCartDetails from './MyCartDetails'
import ActivityIndicator from '../../components/activityIndicator/index'
import CommonContentLoader
  from '../../components/activityIndicator/loader/CommonContentLoader'

const OrderConfirmation = props => {
  return (
    <Grid container>
      <Grid item xs={7}>
        <ActivityIndicator
          isLoading={props.thankYouState.isLoading}
          LoaderComp={<CommonContentLoader />}
        >
          <OrderConfirmationDetails
            cartState={props.cartState}
            submitRefillDateLoading={props.submitRefillDateLoading}
            thankYouState={props.thankYouState}
          />
        </ActivityIndicator>
      </Grid>
      <Grid item xs={5}>
        <MyCartDetails cartState={props.cartState} />
      </Grid>
    </Grid>
  )
}

export default OrderConfirmation
