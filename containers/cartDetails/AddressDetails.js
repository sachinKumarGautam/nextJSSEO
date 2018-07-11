import React from 'react'

import Grid from '@material-ui/core/Grid'

import AddDeliveryAddressButton from '../deliveryDetails/AddDeliveryAddressButton'
import DeliveryDetailForm from '../deliveryDetails/DeliveryDetailsForm'
import AddressDetailsCard from '../../components/AddressDetailsCard'

const AddressDetails = props => (
  <Grid container spacing={24}>
    <Grid item xs={12}>
      <DeliveryDetailForm
        onSubmit={props.submitDeliveryDetailsLoading}
        openDeliveryFormDialog={props.openDeliveryFormDialog}
        customerState={props.customerState}
        deliveryDetailsState={props.deliveryDetailsState}
        deliveryFormState={props.deliveryFormState}
        closeDeliveryFormModal={props.closeDeliveryFormModal}
      />
    </Grid>
    {
      props.deliveryDetailsState.payload.map(deliveryDetail => {
        return (
          <Grid item xs={6}>
            <AddressDetailsCard
              deliveryDetail={deliveryDetail}
              saveAddressSelected={props.saveAddressSelected}
              addressIdSelected={props.addressIdSelected}
              isCartPage={props.isCartPage}
            />
          </Grid>
        )
      })
    }
  </Grid>
)

export default AddressDetails
