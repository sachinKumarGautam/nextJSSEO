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
    <BreadCrumbs isLoading={props.deliveryDetailsState.isLoading} />
    <Grid container spacing={24}>
      <Grid item xs={2}>
        <aside>
          <SideMenu isLoading={props.deliveryDetailsState.isLoading} />
        </aside>
      </Grid>
      <Grid item xs={10}>
        <DeliveryDetailsList
          deliveryDetailsState={props.deliveryDetailsState}
          submitDeliveryDetailsLoading={props.submitDeliveryDetailsLoading}
          saveDeliveryAddressSelected={props.saveDeliveryAddressSelected}
          customerState={props.customerState}
          checkPincodeDetailLoading={props.checkPincodeLoading}
          updateAddressFormValue={props.updateAddressFormValue}
          cartState={props.cartState}
          getLocalityDetailListLoading={props.getLocalityDetailListLoading}
          checkPincodeState={props.checkPincodeState}
          resetDeliveryAddressSelected={props.resetDeliveryAddressSelected}
          getDeliveryDetailsListLoading={props.getDeliveryDetailsListLoading}
          resetErrorState={props.resetErrorState}
        />
      </Grid>
    </Grid>
  </div>
)

export default DeliveryDetailsWrapper
