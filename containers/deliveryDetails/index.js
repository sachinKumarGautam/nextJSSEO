import React from 'react'

import Grid from '@material-ui/core/Grid'

import BreadCrumbs from '../../components/BreadCrumbs'
import SideMenu from '../../components/SideMenu'
import DeliveryDetailsList from './DeliveryDetailsList'

/*
  bread crumbs
*/

const DeliveryDetailsWrapper = props => (
  <div>
    <BreadCrumbs />
    <Grid container spacing={24}>
      <Grid item xs={2}>
        <aside>
          <SideMenu />
        </aside>
      </Grid>
      <Grid item xs={10}>
        <DeliveryDetailsList
          deliveryDetailsState={props.deliveryDetailsState}
          submitDeliveryDetailsLoading={props.submitDeliveryDetailsLoading}
          customerState={props.customerState}
          cartState={props.cartState}
        />
      </Grid>
    </Grid>
  </div>
)

export default DeliveryDetailsWrapper
